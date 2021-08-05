import { k8sCoreV1Api, k8sAppsV1Api } from './k8s'
import { Logger } from '../../logger'
import { HttpError, V1ConfigMap } from '@kubernetes/client-node'

const config = require('../../../config/config.json')

export async function replaceConfigMap(name, map) {
    const configMap = new V1ConfigMap()
    configMap.data = map
    configMap.metadata = { name }
    try {
        return await k8sCoreV1Api.replaceNamespacedConfigMap(name, config.k8s.namespace, configMap)
    } catch (error) {
        if (error instanceof HttpError && error.statusCode === 404) {
            return await createConfigMap(name, map)
        }

        throw error
    }
}

export async function createConfigMap(name, map) {
    const configMap = new V1ConfigMap()
    configMap.data = map
    configMap.metadata = { name }
    return k8sCoreV1Api.createNamespacedConfigMap(config.k8s.namespace, configMap)
}

