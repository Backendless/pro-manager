const k8s = require('@kubernetes/client-node')

import { k8sAppsV1Api } from './k8s'
import { Logger } from '../../logger'
import { k8sConfig } from '../../config/k8s-config'
const logger = Logger('k8s-restart')

export async function statefulsetRestart(name, resultAsIS = false) {
    logger.info(`Restarting statefulset: [${name}]` )
    // const statefulSet = (await k8sAppsV1Api.readNamespacedStatefulSetScale(name, await k8sConfig.getNamespace())).body
    // // statefulSet.spec.replicas = replicas
    //
    //
    // return k8sAppsV1Api.replaceNamespacedStatefulSetScale(name, await k8sConfig.getNamespace(), statefulSet, undefined, undefined, 'kubectl-rollout')
    //     .then(res => {
    //         return resultAsIS ? res : res.body.status
    //     })

    // const statefulSet = (await k8sAppsV1Api.readNamespacedStatefulSetScale(name, await k8sConfig.getNamespace())).body
    //
    // return k8sAppsV1Api.replaceNamespacedStatefulSet(name, await k8sConfig.getNamespace(), statefulSet, undefined, undefined, 'kubectl-rollout')
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

    return k8sAppsV1Api.patchNamespacedStatefulSet(name, await k8sConfig.getNamespace(), body, undefined, undefined, 'kubectl-rollout', undefined, options)
        .then(res => {
            return resultAsIS ? res : res.body.status
        })

}

export async function deploymentRestart(name, resultAsIS = false) {
    logger.info(`Restarting deployment: [${name}]` )
    const options = { 'headers': { 'Content-type': k8s.PatchUtils.PATCH_FORMAT_STRATEGIC_MERGE_PATCH } }

    const body =
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

    return k8sAppsV1Api.patchNamespacedDeployment(name, await k8sConfig.getNamespace(), body, undefined, undefined, 'kubectl-rollout', undefined, options)
        .then(res => {
            return resultAsIS ? res : res.body.status
        })

}