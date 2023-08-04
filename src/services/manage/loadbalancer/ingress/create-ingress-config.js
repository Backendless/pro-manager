import { localCertManager } from '../../cert/local-cert-manager'
import { ApiError } from '../../../../error'
import { ingressLoadbalancerService } from './index'
import { certManager } from '../../cert-manager/cert-manager'

export async function createIngressConfig({ type, domain, certName }) {
    const config = ingressLoadbalancerService._getConfigForTypeOrThrow(type)
    config.spec.rules[0].host = domain

    if (certName) {
        const certs = await localCertManager.list()

        if (certs.includes(certName)) {
            config.spec.tls = [
                {
                    'hosts': [
                        domain
                    ],
                    'secretName': certName
                }
            ]
        } else if (certName === certManager.getIssuerName(true) || certName === certManager.getIssuerName(false)) {
            const annotations = config.metadata.annotations || {}
            annotations['cert-manager.io/cluster-issuer'] = certName
            config.metadata.annotations = annotations
            config.spec.tls = [
                {
                    'hosts': [
                        domain
                    ],
                    'secretName': `${certName}-${domain.replace(/\./g, '-')}`
                }
            ]
        } else {
            throw new ApiError.BadRequestError(`certName '${certName}' does not exists`)
        }
    } else {
      config.spec.tls = []
    }

    return config
}