import { k8sAppsV1Api } from './k8s'
import { Logger } from '../../logger'
import { V1StatefulSet } from '@kubernetes/client-node/dist/gen/model/v1StatefulSet'
import { k8sConfig } from '../../config/k8s-config'
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
    return k8sAppsV1Api.readNamespacedStatefulSet(name, await k8sConfig.getNamespace())

}