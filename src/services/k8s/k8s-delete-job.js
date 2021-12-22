import { k8sBatchV1Api } from './k8s'
import { Logger } from '../../logger'
import { k8sConfig } from '../../config/k8s-config'

const logger = Logger('k8s-delete-job')

export async function deleteJob(name) {
    logger.info(`removing job '${name}'...`)
    try {
        const removeStatefulSetResult = await k8sBatchV1Api.deleteNamespacedJob(name, await k8sConfig.getNamespace())
    } catch (e) {
        logger.error(e)
    }
}