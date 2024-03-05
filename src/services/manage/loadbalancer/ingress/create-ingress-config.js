import { localCertManager } from '../../cert/local-cert-manager'
import { ApiError } from '../../../../error'
import { ingressLoadbalancerService } from './index'
import { certManager } from '../../cert-manager/cert-manager'
import { createSecretName } from './tls-name'
import { validateUserAndPassword } from './validate-user-and-password'
import { replaceBasicAuthSecret } from './replace-basic-auth-secret'

export async function createIngressConfig({ type, domain, certName, user, password }) {
    validateUserAndPassword({ user, password })

    const config = ingressLoadbalancerService._getConfigForTypeOrThrow(type)
    config.spec.rules[0].host = domain

    const annotations = config.metadata.annotations || {}

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

            annotations['cert-manager.io/cluster-issuer'] = certName
            config.spec.tls = [
                {
                    'hosts': [
                        domain
                    ],
                    'secretName': createSecretName( certName, domain )
                }
            ]
        } else {
            throw new ApiError.BadRequestError(`certName '${certName}' does not exists`)
        }
    } else {
      config.spec.tls = []
    }

    if( password ){
        const secretName = type + '-basic-auth-secret-for-ingress'
        await replaceBasicAuthSecret({ secretName, user, password })

        annotations['nginx.ingress.kubernetes.io/auth-type'] = 'basic'
        annotations['nginx.ingress.kubernetes.io/auth-secret'] = secretName
        annotations['nginx.ingress.kubernetes.io/auth-realm'] = 'Authentication Required'
    }

    config.metadata.annotations = annotations

    return config
}