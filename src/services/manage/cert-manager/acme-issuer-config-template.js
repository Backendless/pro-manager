export class AcmeIssuerConfigTemplate {

    apiVersion = 'cert-manager.io/v1'
    kind = 'ClusterIssuer'
    metadata = {
        name: 'letsencrypt-<prod|staging>'
    }
    spec = {
        acme: {
            email: '<holder>',
            server: 'https://acme-staging-v02.api.letsencrypt.org/directory',
            privateKeySecretRef: {
                name: 'acme-issuer-account-key'
            },
            solvers: [
                {
                    http01: {
                        ingress: {
                            ingressClassName: 'nginx'
                        }
                    }
                }
            ]
        }
    }
}