import { k8sNetworkingV1Api } from '../../../k8s/k8s'
import { k8sConfig } from '../../../../config/k8s-config'
import { K8sError } from '../../../../error/k8s-error'
import { Logger } from '../../../../logger'
import { ingressLoadbalancerService } from './index'

const logger = Logger('ingress-load-balancer-create')

export async function create({ type, domain, certName }) {
    logger.info(`creating ingress rule for '${type}' with domain '${domain}' and cert '${certName}'`)

    const config = await ingressLoadbalancerService._getConfigWithValues({ type, domain, certName })

    logger.info(`creating ingress rule with config: ${JSON.stringify(config)}`)
    try {
        return await k8sNetworkingV1Api.createNamespacedIngress(await k8sConfig.getNamespace(), config)
    } catch (e) {
        logger.error(`Error during updating ingress rules: ${JSON.stringify(e)}`)
        throw new K8sError(e, `Error during updating ingress for '${type}' type`)
    }
}