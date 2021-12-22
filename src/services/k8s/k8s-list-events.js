import { k8sEventsV1Api } from './k8s'
import { k8sConfig } from '../../config/k8s-config'

export async function listEvents(name, resultAsIS = false) {
    return k8sEventsV1Api.listNamespacedEvent(await k8sConfig.getNamespace())
        .then(res => {
            return resultAsIS ? res : res.body.items.map(pod => {
                return {
                    name: pod.spec.hostname,
                    state: pod.status.phase,
                }
            })
        })

}