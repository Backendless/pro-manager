import { k8sAppsV1Api, k8sCoreV1Api } from './k8s'
import { Logger } from '../../logger'
import { k8sConfig } from '../../config/k8s-config'

const logger = Logger('k8s-delete-service')

export async function deleteStatefulsetAndService(name) {
    logger.info(`removing statefulset ${name}...`)
    try {
        const removeStatefulSetResult = await k8sAppsV1Api.deleteNamespacedStatefulSet(name, await k8sConfig.getNamespace())
        logger.debug(`remove statefulset [${name}] result [${JSON.stringify(removeStatefulSetResult)}]`)
        logger.info(`removing service ${name}...`)
        const removeServiceResult = await k8sCoreV1Api.deleteNamespacedService(name, await k8sConfig.getNamespace())
        logger.debug(`remove service [${name}] result [${JSON.stringify(removeServiceResult)}]`)
    } catch (e) {
        logger.error(e)
    }
}

export async function deleteDeploymentAndService(name) {
    logger.info(`removing deployment ${name}...`)
    try {
        const removeStatefulSetResult = await k8sAppsV1Api.deleteNamespacedDeployment(name, await k8sConfig.getNamespace())
        logger.debug(`remove deployment [${name}] result [${JSON.stringify(removeStatefulSetResult)}]`)
        logger.info(`removing service ${name}...`)
        const removeServiceResult = await k8sCoreV1Api.deleteNamespacedService(name, await k8sConfig.getNamespace())
        logger.debug(`remove service [${name}] result [${JSON.stringify(removeServiceResult)}]`)
    } catch (e) {
        logger.error(e)
    }
}