const k8s = require('@kubernetes/client-node')

import { k8sAppsV1Api } from './k8s'
import { Logger } from '../../logger'

const config = require('../../../config/config.json')
const logger = Logger('k8s-statefulset-restart')

export async function statefulsetRestart(name, resultAsIS = false) {
    // const statefulSet = (await k8sAppsV1Api.readNamespacedStatefulSetScale(name, config.k8s.namespace)).body
    // // statefulSet.spec.replicas = replicas
    //
    //
    // return k8sAppsV1Api.replaceNamespacedStatefulSetScale(name, config.k8s.namespace, statefulSet, undefined, undefined, 'kubectl-rollout')
    //     .then(res => {
    //         return resultAsIS ? res : res.body.status
    //     })

    // const statefulSet = (await k8sAppsV1Api.readNamespacedStatefulSetScale(name, config.k8s.namespace)).body
    //
    // return k8sAppsV1Api.replaceNamespacedStatefulSet(name, config.k8s.namespace, statefulSet, undefined, undefined, 'kubectl-rollout')
    //     .then(res => {
    //         return resultAsIS ? res : res.body.status
    //     })

    // const options = {"headers": {"Content-type": k8s.PatchUtils.PATCH_FORMAT_JSON_PATCH}};
    const options = { 'headers': { 'Content-type': k8s.PatchUtils.PATCH_FORMAT_STRATEGIC_MERGE_PATCH } }

    const body =
    // [
    //     {
    //         "op": "replace",
    //         "path": "/spec/template/metadata/annotations/kubectl.kubernetes.io%2FrestartedAt",
    //         "value": new Date().toISOString()
    //     }
    // ]
        {
        'spec': {
            'template': {
                'metadata': {
                    'annotations':
                        { 'kubectl.kubernetes.io/restartedAt': new Date().toISOString() }
                }
            }
        }
    }

    return k8sAppsV1Api.patchNamespacedStatefulSet(name, config.k8s.namespace, body, undefined, undefined, 'kubectl-rollout', undefined, options)
        .then(res => {
            return resultAsIS ? res : res.body.status
        })

}