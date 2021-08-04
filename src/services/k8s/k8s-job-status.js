import { k8sBatchV1Api } from './k8s'
import { Logger } from '../../logger'

const config = require('../../../config/config.json')
const logger = Logger('k8s-job-pods')

export async function jobStatus(name, resultAsIS = false) {
    return k8sBatchV1Api.readNamespacedJobStatus(name, config.k8s.namespace)
        .then(res => {
            return resultAsIS ? res : res.body.status
        })

}