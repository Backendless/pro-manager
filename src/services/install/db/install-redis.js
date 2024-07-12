import { k8sAppsV1Api, k8sCoreV1Api } from '../../k8s/k8s'
import { installStatus } from '../install-status'
import { Logger } from '../../../logger'
import { readFileContent } from '../../../utils/fs'
import { k8sConfig } from '../../../config/k8s-config'
import path from 'path'
import fse from 'fs-extra'
import fs from 'fs'
import { isWin } from '../../../utils/os'

const logger = Logger('install-redis')

export async function installRedis({ fullMountPath, logMountPath, internalPort, externalPort, name }) {
    const redisK8sConfig = JSON.parse(await readFileContent(path.resolve( __dirname, '../../k8s/config/redis.json')))
    installStatus.info(`installing ${name}...`)
    const workload = redisK8sConfig.workload
    const specConfig = workload.spec.template.spec

    specConfig.volumes.push({
        hostPath: {
            path: `${fullMountPath}`,
            type: 'DirectoryOrCreate'
        },
        name: 'data'
    })

    if (!isWin()) {
        specConfig.containers[0].volumeMounts.push({
            'mountPath': '/var/log/redis',
            'name':      'logs'
        })

        if (!(await fse.exists(logMountPath))) {
            installStatus.info(`The path [${logMountPath}] for redis logs does not exists, will be created`)
            await fse.mkdirp(logMountPath)
        }

        try {
            fs.chmodSync(logMountPath, 0o777)
            logger.info(`changed permission for redis log path folder "${logMountPath}"`)
        } catch (err) {
            logger.error(`Error chmod permissions for redis log folder '${logMountPath}': ${err.message}`)
        }

        specConfig.volumes.push({
            hostPath: {
                path: `${logMountPath}`,
                type: 'DirectoryOrCreate'
            },
            name:     'logs'
        })
    }

    workload.metadata.name = name
    workload.metadata.annotations.name = name
    workload.spec.selector.matchLabels.app = name
    workload.spec.template.metadata.labels.app = name
    specConfig.containers[0].name = name
    specConfig.containers[0].args.push('--port', internalPort.toString())
    specConfig.containers[0].ports[0].containerPort = internalPort

    installStatus.info(`creating statefulset for ${name}`)
    logger.verbose(`creating statefulset for ${name} with workload '${JSON.stringify(workload)}'`)
    const createStateful = await k8sAppsV1Api.createNamespacedStatefulSet(await k8sConfig.getNamespace(), workload)
    logger.verbose(`result of create stateful set for ${name} is: ${JSON.stringify(createStateful)}`)
    installStatus.info(`creating service for ${name}`)

    const service = redisK8sConfig.service
    service.metadata.labels.app = name
    service.metadata.name = name
    service.spec.selector.app = name

    service.spec.ports[0].nodePort = externalPort
    service.spec.ports[0].port = internalPort
    service.spec.ports[0].targetPort = internalPort

    const createServiceResult = await k8sCoreV1Api.createNamespacedService(await k8sConfig.getNamespace(), service)


    return { createStateful, createServiceResult }
}
