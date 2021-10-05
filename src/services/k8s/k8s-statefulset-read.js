import { k8sAppsV1Api } from './k8s'
import { Logger } from '../../logger'
import { V1StatefulSet } from '@kubernetes/client-node/dist/gen/model/v1StatefulSet'

const config = require('../../../config/config.json')
const logger = Logger('k8s-statefulset-read')

export async function statefulsetRead(name) {
    const body = new V1StatefulSet()
    body.metadata = {
        annotations: { 'name': name },
        name: name
    }
    body.spec = {
        selector: {
            matchLabels: {
                'app': name
            }
        },
        template: {
            'metadata': {
                'labels': {
                    'app': name
                }
            }
        }
    }
    return k8sAppsV1Api.readNamespacedStatefulSet(name, config.k8s.namespace)

}