import { k8sCoreV1Api } from './k8s'
import { HttpError, V1ConfigMap } from '@kubernetes/client-node'
import { k8sConfig } from '../../config/k8s-config'

export async function replaceConfigMap(name, map) {
    const configMap = new V1ConfigMap()
    configMap.data = map
    configMap.metadata = { name }
    try {
        return await k8sCoreV1Api.replaceNamespacedConfigMap(name, await k8sConfig.getNamespace(), configMap)
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
    return k8sCoreV1Api.createNamespacedConfigMap(await k8sConfig.getNamespace(), configMap)
}

