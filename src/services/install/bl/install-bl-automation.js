import { k8sAppsV1Api, k8sCoreV1Api } from '../../k8s/k8s'
import { installStatus } from '../install-status'
import { Logger } from '../../../logger'
import { k8sConfig } from '../../../config/k8s-config'
import { AutomationConfig } from '../../k8s/config/automation-config'
import { consul } from '../../consul'
import { getMountPathFromDeployment } from '../../get-mount-path'

const logger = Logger('install-bl-automation')

export async function installAutomation({
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

    const blAutomationK8sConfig = new AutomationConfig()
    installStatus.info('installing bl-automation...')
    const workload = blAutomationK8sConfig.workload
    workload.spec.template.spec.containers[0].image = `backendless/bl-automation:${version}`
    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/repo`,
            type: 'DirectoryOrCreate'
        },
        name:     'repo'
    })

    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/logs/bl-automation/`,
            type: 'DirectoryOrCreate'
        },
        name:     'logs'
    })

    installStatus.info('creating deployment for bl-automation')
    logger.verbose(`creating workload for bl-automation with config: ${JSON.stringify(workload)}`)
    const createStatefulSetResult = await k8sAppsV1Api.createNamespacedDeployment(await k8sConfig.getNamespace(), workload)
    installStatus.info('creating service for bl-automation')
    const createServiceResult = await k8sCoreV1Api.createNamespacedService(await k8sConfig.getNamespace(), blAutomationK8sConfig.service)

    logger.info(`turn on automation in consul`)
    await consul.put('config/automation/api/enabled', true)
    await consul.put('config/console/featureToggle/automations', 1)

    return {
        createStatefulSetResult,
        createServiceResult
    }
}
