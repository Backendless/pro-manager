import { k8sNetworkingV1Api } from '../../../k8s/k8s'
import { k8sConfig } from '../../../../config/k8s-config'
import { Logger } from '../../../../logger'
import {
    getIngressConfig,
    getIngressLabelToSelect,
    getIngressTypes,
    getTypeFromLabels
} from '../../../k8s/config/ingress'
import { ApiError } from '../../../../error'
import { create } from './create'
import { update } from './update'
import { localCertManager } from '../../cert/local-cert-manager'
import { domainConfigurationService } from '../../configuration/domain'
import { describeDomainConfiguration } from '../../configuration/domain/describe-domain-configuration'
import { manageService } from '../../manage-service'
import { describeIngressConfiguration } from './describe-ingress-configuration'
import { certManager } from '../../cert-manager/cert-manager'
import { extractCertNameFromSecretName } from './tls-name'

const logger = Logger('ingress-load-balancer')

class IngressLoadbalancerService {
    async create({ type, domain, certName }) {
        const createResult = await create({ type, domain, certName })
        await this._saveToConsul({ type, domain, certName })
        return createResult
    }

    async update({ type, domain, certName }) {
        const updateResult = await update({ type, domain, certName })
        await this._saveToConsul({ type, domain, certName })
        return updateResult
    }

    async list() {
        const k8sResponse = await k8sNetworkingV1Api.listNamespacedIngress(await k8sConfig.getNamespace(), true, true, '', '', getIngressLabelToSelect())
        return k8sResponse.body.items.map(item => {
          const domain = item.spec.rules[0].host
          const certName = item.spec.tls && item.spec.tls.length > 0 ? extractCertNameFromSecretName( item.spec.tls[0].secretName, domain ) : null
          return {
            domain: domain,
            type: getTypeFromLabels( item.metadata.labels ),
            sslEnabled: certName !== null,
            certName: certName
          }
        })
    }

    async getCerts() {
        const localCerts = await localCertManager.list()
        logger.info(`local certificates is [${localCerts}]`)
        const letsencryptCerts = await certManager.getIssuers()
        logger.info(`letsencrypt certificates is [${JSON.stringify(letsencryptCerts)}]`)

        const result = [].concat(localCerts)

        if (letsencryptCerts.prod.name) {
            result.push(letsencryptCerts.prod.name)
        }

        if (letsencryptCerts.stage.name) {
            result.push(letsencryptCerts.stage.name)
        }

        return result
    }

    describe() {
        return describeIngressConfiguration()
    }

    async delete({ type }) {
        const ingressName = this._getConfigForTypeOrThrow(type).metadata.name
        logger.info(`deleting ingress rules for '${type}' type`)
        await k8sNetworkingV1Api.deleteNamespacedIngress(ingressName, await k8sConfig.getNamespace())
        await this._saveDefaultToConsul({type})
    }

    async apply() {
        await manageService.restartService('bl-server')
        await manageService.restartService('bl-web-console')
        await manageService.restartService('bl-taskman')
        await manageService.restartService('bl-rt-server')
    }

    async _saveDefaultToConsul({ type }) {
        const configDescriptions = describeDomainConfiguration()[type]
        const objectToSave = {}
        objectToSave[type] = {}

        for (const configDescription of configDescriptions) {
            Object.assign(objectToSave[type], await configDescription.getDefaultConfiguration())
        }

        logger.info(`saving default config to consul: ${JSON.stringify(objectToSave)}`)

        await domainConfigurationService.saveAll(objectToSave)
    }

    async _saveToConsul({ type, domain, certName }) {
        const configDescriptions = describeDomainConfiguration()[type]
        const objectToSave = {}
        objectToSave[type] = {}

        for (const configDescription of configDescriptions) {
            Object.assign(objectToSave[type], configDescription.convertFromIngressObject({ type, domain, certName }))
        }

        logger.info(`saving config to consul: ${JSON.stringify(objectToSave)}`)

        await domainConfigurationService.saveAll(objectToSave)
    }

    _getConfigForTypeOrThrow(type) {
        const config = getIngressConfig(type)

        if (!config) {
            throw new ApiError.BadRequestError(`There is no config for '${type}' type. Available types is: ${getIngressTypes().join(', ')}`)
        }
        return config
    }

    async _getConfigWithValues() {

    }
}

export const ingressLoadbalancerService = new IngressLoadbalancerService()