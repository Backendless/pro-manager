import { k8sNetworkingV1Api } from '../../../k8s/k8s'
import { ingressConfig } from '../../../k8s/config/ingress-config'
import { k8sConfig } from '../../../../config/k8s-config'
import { Logger } from '../../../../logger'

const logger = Logger('ingress-load-balancer')

class IngressLoadbalancerService {
    async install() {
        logger.info('installing ingress rules...')
        const workload = ingressConfig.service

        logger.verbose(`creating ingress rule with config: ${JSON.stringify(workload)}`)
        const createIngressResult = await k8sNetworkingV1Api.createNamespacedIngress(await k8sConfig.getNamespace(), workload)

        return { createIngressResult }
    }

    async delete() {
        logger.info('deleting ingress rules...')
        await k8sNetworkingV1Api.deleteNamespacedIngress(ingressConfig.service.metadata.name, await k8sConfig.getNamespace())
    }
}

export const ingressLoadbalancerService = new IngressLoadbalancerService()