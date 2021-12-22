import { k8sBatchV1Api } from './k8s'
import { Logger } from '../../logger'
import { k8sConfig } from '../../config/k8s-config'
const logger = Logger('k8s-job-pods')

export async function jobStatus(name, resultAsIS = false) {
    return k8sBatchV1Api.readNamespacedJobStatus(name, await k8sConfig.getNamespace())
        .then(res => {
            return resultAsIS ? res : res.body.status
        })

}