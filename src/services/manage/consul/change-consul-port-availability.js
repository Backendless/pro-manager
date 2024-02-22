import { k8sCoreV1Api } from '../../k8s/k8s'
import { ConsulConfig } from '../../k8s/config/consul-config'
import { k8sConfig } from '../../../config/k8s-config'
import { Logger } from '../../../logger'
import * as k8s from '@kubernetes/client-node'

const logger = Logger('change-consul-port-availability')

export async function changeConsulPortAvailability(enableNodePort) {
    logger.info(`changing consul port availability with enableNodePort=[${enableNodePort}]`)
    const consulConfig = new ConsulConfig()
    const consulService = consulConfig.service

    const patch = { spec: { type: 'ClusterIP' } }

    if (enableNodePort) {
        patch.spec.type = 'NodePort'
        patch.spec.ports = consulConfig.service.spec.ports
    }

    const options = { 'headers': { 'Content-type': k8s.PatchUtils.PATCH_FORMAT_STRATEGIC_MERGE_PATCH } }
    const updateResult = await k8sCoreV1Api.patchNamespacedService(consulService.metadata.name, await k8sConfig.getNamespace(), patch
        , undefined, undefined, undefined, undefined, options)

    logger.info(`consul service updated with result: [${JSON.stringify(updateResult)}]`)

    return updateResult
}