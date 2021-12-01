import { k8sBatchV1Api } from './k8s'
import * as config from '../../../config/config.json'
import { Logger } from '../../logger'

const logger = Logger('k8s-delete-job')

export async function deleteJob(name) {
    logger.info(`removing job '${name}'...`)
    try {
        const removeStatefulSetResult = await k8sBatchV1Api.deleteNamespacedJob(name, config.k8s.namespace)
    } catch (e) {
        logger.error(e)
    }
}