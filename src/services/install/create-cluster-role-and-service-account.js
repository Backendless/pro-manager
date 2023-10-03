import { k8sCoreV1Api, k8sRbacAuthorizationV1Api } from '../k8s/k8s'
import { Logger } from '../../logger'
import { k8sConfig } from '../../config/k8s-config'

const logger = Logger('install-role')

export async function createClusterRoleAndServiceAccount({ blRole }) {
    logger.info(`installing service account [${JSON.stringify(blRole.serviceAccount)}]}]`)
    const createServiceAccountResult = await k8sCoreV1Api.createNamespacedServiceAccount(await k8sConfig.getNamespace(), blRole.serviceAccount)
    logger.info(`created service account [${JSON.stringify(createServiceAccountResult)}]`)

    logger.info('creating cluster role')
    const createRoleResult = await k8sRbacAuthorizationV1Api.createClusterRole(blRole.clusterRole)
    logger.info(`created role [${JSON.stringify(createRoleResult)}]`)

    logger.info('creating cluster role binding')
    const createRoleBindingResult = await k8sRbacAuthorizationV1Api.createClusterRoleBinding(blRole.clusterRoleBinding)
    logger.info(`created role binding [${JSON.stringify(createRoleBindingResult)}]`)

    return {
        createServiceAccountResult,
        createRoleResult,
        createRoleBindingResult
    }
}