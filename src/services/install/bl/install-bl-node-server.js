import { k8sAppsV1Api, k8sCoreV1Api } from '../../k8s/k8s'
import { installStatus } from '../install-status'
import { Logger } from '../../../logger'
import { getMountPathFromDeployment } from '../../get-mount-path'
import { NodeServerConfig } from '../../k8s/config/node-server-config'
import { consul } from '../../consul'
import { k8sConfig } from '../../../config/k8s-config'

const logger = Logger('install-bl-node-server')

export async function installNodeServer({
                                            mountPath,
                                            version
                                        }) {
    if (!mountPath) {
        logger.info('mountPath is not provided, will get from bl-server')
        const repoMountPath = await getMountPathFromDeployment({
            workloadName: 'bl-server',
            volumeName:   'repo'
        })
        logger.info(`repo path for bl-server is [${repoMountPath}]`)
        mountPath = repoMountPath.replace('/repo', '')
        logger.info(`mount path will be [${mountPath}]`)

    }

    const nodeServerConfig = new NodeServerConfig()
    installStatus.info('installing bl-node-server...')
    const workload = nodeServerConfig.workload
    workload.spec.template.spec.containers[0].image = `backendless/bl-node-server:${version}`
    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/repo`,
            type: 'DirectoryOrCreate'
        },
        name:     'repo'
    })

    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/logs/bl-node-server/`,
            type: 'DirectoryOrCreate'
        },
        name:     'logs'
    })

    installStatus.info('creating deployment for bl-node-server')
    logger.verbose(`creating workload for bl-node-server with config: ${JSON.stringify(workload)}`)
    const createStatefulSetResult = await k8sAppsV1Api.createNamespacedDeployment(await k8sConfig.getNamespace(), workload)
    installStatus.info('creating service for bl-node-server')
    const createServiceResult = await k8sCoreV1Api.createNamespacedService(await k8sConfig.getNamespace(), nodeServerConfig.service)

    logger.info(`add config to consul`)
    await consul.put('config/nodeServer/internalAddress', 'http://bl-node-server:4000')

    return {
        createStatefulSetResult,
        createServiceResult
    }
}
