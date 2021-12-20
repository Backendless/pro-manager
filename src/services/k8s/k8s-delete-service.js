import { k8sAppsV1Api, k8sCoreV1Api } from './k8s'
import { Logger } from '../../logger'
import { k8sConfig } from '../../config/k8s-config'

const logger = Logger('k8s-delete-service')

export async function deleteService(name) {
    logger.info(`removing ${name}...`)
    try {
        const removeStatefulSetResult = await k8sAppsV1Api.deleteNamespacedStatefulSet(name, await k8sConfig.getNamespace())
        logger.info(`removing service ${name}...`)
        const removeServiceResult = await k8sCoreV1Api.deleteNamespacedService(name, await k8sConfig.getNamespace())
    } catch (e) {
        logger.error(e)
    }
}