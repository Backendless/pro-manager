import { k8sAppsV1Api, k8sCoreV1Api } from '../../k8s/k8s'
import config from '../../../../config/config.json'
import { installStatus } from '../install-status'
import { readFileContent } from '../../../utils/fs'
import path from 'path'
import { Logger } from '../../../logger'

const logger = Logger('install-bl-server')

export async function installBlServer({ mountPath, version }) {
    const blServerK8sConfig = JSON.parse(await readFileContent(path.resolve( __dirname, '../../k8s/config/server.json')))
    installStatus.info('installing bl-server...')
    const workload = blServerK8sConfig.workload
    workload.spec.template.spec.containers[0].image=`backendless/bl-server:${version}`
    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/repo`,
            type: 'DirectoryOrCreate'
        },
        name: 'repo'
    })

    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/logs/bl-server/`,
            type: 'DirectoryOrCreate'
        },
        name: 'logs'
    })

    installStatus.info('creating statefulset for bl-server')
    logger.verbose(`creating workload for bl-server with config: ${JSON.stringify(workload)}`)
    const createStatefulSetResult = await k8sAppsV1Api.createNamespacedStatefulSet(config.k8s.namespace, workload)
    installStatus.info('creating service for bl-server')
    const createServiceResult = await k8sCoreV1Api.createNamespacedService(config.k8s.namespace, blServerK8sConfig.service)


    return { createStatefulSetResult, createServiceResult }
}
