import { k8sConfig } from '../../../../config/k8s-config'
import * as k8s from '@kubernetes/client-node'
import { k8sNetworkingV1Api } from '../../../k8s/k8s'
import { K8sError } from '../../../../error/k8s-error'
import { Logger } from '../../../../logger'
import { ingressLoadbalancerService } from './index'

const logger = Logger('ingress-load-balancer-update')

export async function update( { type, domain, certName } ){
    const k8sNamespace = await k8sConfig.getNamespace()

    const config = await ingressLoadbalancerService._getConfigWithValues({ type, domain, certName })

    const ingressName = config.metadata.name

    const body = { spec : config.spec }
    logger.info(`body to update is ${body}`)
    const options = { 'headers': { 'Content-type': k8s.PatchUtils.PATCH_FORMAT_STRATEGIC_MERGE_PATCH } }
    try {
        return await k8sNetworkingV1Api.patchNamespacedIngress(ingressName, k8sNamespace, body,
            undefined, undefined, undefined, undefined, options)
    } catch (e) {
        logger.error(`Error during updating ingress rules: ${JSON.stringify(e)}`)
        throw new K8sError(e, `Error during updating ingress for '${type}' type`)
    }
}