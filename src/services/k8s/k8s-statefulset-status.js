import { k8sAppsV1Api } from './k8s'
import { Logger } from '../../logger'

const config = require('../../../config/config.json')
const logger = Logger('k8s-list-pods')

export async function statefulsetStatus(name, resultAsIS = false) {
    return k8sAppsV1Api.readNamespacedStatefulSetStatus( name, config.k8s.namespace)
        .then(res => {
            return resultAsIS ? res : res.body.status
        })

}