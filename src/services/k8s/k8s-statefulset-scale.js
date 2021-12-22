import { k8sAppsV1Api } from './k8s'
import { Logger } from '../../logger'
import { k8sConfig } from '../../config/k8s-config'
const logger = Logger('k8s-statefulset-scale')

export async function statefulsetScale(name, replicas, resultAsIS = false) {
    const statefulSet = (await k8sAppsV1Api.readNamespacedStatefulSetScale(name, await k8sConfig.getNamespace())).body
    statefulSet.spec.replicas = replicas

    return k8sAppsV1Api.replaceNamespacedStatefulSetScale(name, await k8sConfig.getNamespace(), statefulSet)
        .then(res => {
            return resultAsIS ? res : res.body.status
        })
}