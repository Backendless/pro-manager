import { k8sAppsV1Api } from './k8s'
import { Logger } from '../../logger'
import { k8sConfig } from '../../config/k8s-config'
const logger = Logger('k8s-scale')

export async function statefulsetScale(name, replicas, resultAsIS = false) {
    logger.info(`Scaling statefulset [${name}] to [${replicas}] replicas`)
    const statefulSet = (await k8sAppsV1Api.readNamespacedStatefulSetScale(name, await k8sConfig.getNamespace())).body
    logger.debug(`statefulset found [${JSON.stringify(statefulSet)}]`)
    statefulSet.spec.replicas = replicas

    const result = await k8sAppsV1Api.replaceNamespacedStatefulSetScale(name, await k8sConfig.getNamespace(), statefulSet)
    logger.debug( `result of scale statefulSet is [${result}]`)

    return resultAsIS ? result : result.body.status
}

export async function deploymentScale(name, replicas, resultAsIS = false) {
    logger.info(`Scaling deployment [${name}] to [${replicas}] replicas`)
    const deployment = (await k8sAppsV1Api.readNamespacedDeploymentScale(name, await k8sConfig.getNamespace())).body
    logger.debug(`deployment found [${JSON.stringify(deployment)}]`)
    deployment.spec.replicas = replicas

    const result = await k8sAppsV1Api.replaceNamespacedDeploymentScale(name, await k8sConfig.getNamespace(), deployment)
    return resultAsIS ? result : result.body.status
}