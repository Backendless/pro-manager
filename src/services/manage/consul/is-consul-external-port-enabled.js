import { k8sCoreV1Api } from '../../k8s/k8s'
import { k8sConfig } from '../../../config/k8s-config'
import { ConsulConfig } from '../../k8s/config/consul-config'

export async function isConsulExternalPortEnabled() {
    const consulConfig = new ConsulConfig()
    const consulService = consulConfig.service
    const serviceInfo = await k8sCoreV1Api.readNamespacedService(consulService.metadata.name, await k8sConfig.getNamespace())
    
    return serviceInfo.body.spec.type == 'NodePort'
}