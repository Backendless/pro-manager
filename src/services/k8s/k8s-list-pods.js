import { k8sCoreV1Api, k8sAppsV1Api } from './k8s'
import { Logger } from '../../logger'
import { k8sConfig } from '../../config/k8s-config'
const logger = Logger('k8s-list-pods')

export async function listPods(name, resultAsIS = false) {
    return k8sCoreV1Api.listNamespacedPod(await k8sConfig.getNamespace(), true, true, '', '', `app=${name}`)
        .then(res => {
            return resultAsIS ? res : res.body.items.map(pod => {
                return {
                    name: pod.spec.hostname,
                    state: pod.status.phase,
                }
            })
        })

}