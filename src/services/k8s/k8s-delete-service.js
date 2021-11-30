import { k8sAppsV1Api, k8sCoreV1Api } from './k8s'
import * as config from '../../../config/config.json'
import { Logger } from '../../logger'

const logger = Logger('k8s-delete-service')

export async function deleteService(name) {
    logger.info(`removing ${name}...`)
    try {
        const removeStatefulSetResult = await k8sAppsV1Api.deleteNamespacedStatefulSet(name, config.k8s.namespace)
        logger.info(`removing service ${name}...`)
        const removeServiceResult = await k8sCoreV1Api.deleteNamespacedService(name, config.k8s.namespace)
    } catch (e) {
        logger.error(e)
    }
}