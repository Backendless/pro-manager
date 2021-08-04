import { k8sEventsV1Api } from './k8s'
import { Logger } from '../../logger'

const config = require('../../../config/config.json')

export async function listEvents(name, resultAsIS = false) {
    return k8sEventsV1Api.listNamespacedEvent(config.k8s.namespace)
        .then(res => {
            return resultAsIS ? res : res.body.items.map(pod => {
                return {
                    name: pod.spec.hostname,
                    state: pod.status.phase,
                }
            })
        })

}