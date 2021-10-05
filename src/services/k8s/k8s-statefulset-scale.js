import { k8sAppsV1Api } from './k8s'
import { Logger } from '../../logger'

const config = require('../../../config/config.json')
const logger = Logger('k8s-statefulset-scale')

export async function statefulsetScale(name, replicas, resultAsIS = false) {
    const statefulSet = (await k8sAppsV1Api.readNamespacedStatefulSetScale(name, config.k8s.namespace)).body
    statefulSet.spec.replicas = replicas

    return k8sAppsV1Api.replaceNamespacedStatefulSetScale(name, config.k8s.namespace, statefulSet)
        .then(res => {
            return resultAsIS ? res : res.body.status
        })
}