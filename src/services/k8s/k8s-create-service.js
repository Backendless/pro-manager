const k8s = require('@kubernetes/client-node')

import { k8sCoreV1Api } from './k8s'
import { Logger } from '../../logger'
import { k8sConfig } from '../../config/k8s-config'
const logger = Logger('k8s-create-service')

export async function createService(config) {
    logger.info(`creating service with config ${config}`)
    const yamlString = k8s.dumpYaml(config)
    const yamlNamespace = k8s.loadYaml(yamlString)

    // k8sApi.createNamespacedPod()

    k8sCoreV1Api.createNamespacedStatefulSet(config.namespace, )

    return k8sCoreV1Api.createNamespace(yamlNamespace)
        .then(result => {
            logger.verbose(`create result - ${JSON.stringify(result)}`)
            return result
        })
        .catch(error => {
            logger.verbose(`create error - ${JSON.stringify(error)}`)
            throw error
        })
}