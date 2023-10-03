import { k8sCoreV1Api, k8sRbacAuthorizationV1Api } from '../k8s/k8s'
import { k8sConfig } from '../../config/k8s-config'
import { Logger } from '../../logger'

const logger = Logger('remove-cluster-role-and-service-account')

export async function removeClusterRoleAndServiceAccount({ blRole }) {
    logger.info(`removing service account [${JSON.stringify(blRole.serviceAccount)}]}]`)
    const deleteServiceAccountResult = await k8sCoreV1Api.deleteNamespacedServiceAccount(blRole.serviceAccount.metadata.name, await k8sConfig.getNamespace())
    logger.info(`removed service account [${JSON.stringify(deleteServiceAccountResult)}]`)

    logger.info('removing cluster role')
    const deleteRoleResult = await k8sRbacAuthorizationV1Api.deleteClusterRole(blRole.clusterRole.metadata.name)
    logger.info(`removed role [${JSON.stringify(deleteRoleResult)}]`)

    logger.info('removing cluster role binding')
    const deleteRoleBindingResult = await k8sRbacAuthorizationV1Api.deleteClusterRoleBinding(blRole.clusterRoleBinding.metadata.name)
    logger.info(`removed role binding [${JSON.stringify(deleteRoleBindingResult)}]`)

    return {
        deleteServiceAccountResult,
        deleteRoleResult,
        deleteRoleBindingResult
    }

}