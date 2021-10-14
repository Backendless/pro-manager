import { k8sAppsV1Api, k8sCoreV1Api } from '../../k8s/k8s'
import config from '../../../../config/config.json'
import { installStatus } from '../install-status'
import { Logger } from '../../../logger'
import { readFileContent } from '../../../utils/fs'
import path from 'path'

const logger = Logger('install-redis')

export async function installRedis({ fullMountPath, internalPort, externalPort, name }) {
    const redisK8sConfig = JSON.parse(await readFileContent(path.resolve( __dirname, '../../k8s/config/redis.json')))
    installStatus.info(`installing ${name}...`)
    const workload = redisK8sConfig.workload
    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${fullMountPath}`,
            type: 'DirectoryOrCreate'
        },
        name: 'data'
    })

    workload.metadata.name = name
    workload.metadata.annotations.name = name
    workload.spec.selector.matchLabels.app = name
    workload.spec.template.metadata.labels.app = name
    workload.spec.template.spec.containers[0].name = name
    workload.spec.template.spec.containers[0].args.push('--port', internalPort.toString())
    workload.spec.template.spec.containers[0].ports[0].containerPort = internalPort

    installStatus.info(`creating statefulset for ${name}`)
    logger.verbose(`creating statefulset for ${name} with workload '${JSON.stringify(workload)}'`)
    const createStateful = await k8sAppsV1Api.createNamespacedStatefulSet(config.k8s.namespace, workload)
    logger.verbose(`result of create stateful set for ${name} is: ${JSON.stringify(createStateful)}`)
    installStatus.info(`creating service for ${name}`)

    const service = redisK8sConfig.service
    service.metadata.labels.app = name
    service.metadata.name = name
    service.spec.selector.app = name

    service.spec.ports[0].nodePort = externalPort
    service.spec.ports[0].port = internalPort
    service.spec.ports[0].targetPort = internalPort

    const createServiceResult = await k8sCoreV1Api.createNamespacedService(config.k8s.namespace, service)


    return { createStateful, createServiceResult }
}
