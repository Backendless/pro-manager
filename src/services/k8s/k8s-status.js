import { k8sAppsV1Api } from './k8s'
import { Logger } from '../../logger'
import { k8sConfig } from '../../config/k8s-config'
const logger = Logger('k8s-status')

export async function statefulsetStatus(name, resultAsIS = false) {
    return k8sAppsV1Api.readNamespacedStatefulSetStatus( name, await k8sConfig.getNamespace())
        .then(res => {
            return resultAsIS ? res : res.body.status
        })
}

export async function deploymentStatus(name, resultAsIS = false) {
    return k8sAppsV1Api.readNamespacedDeploymentStatus( name, await k8sConfig.getNamespace())
        .then(res => {
            return resultAsIS ? res : res.body.status
        })
}