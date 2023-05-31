import { AcmeIssuerConfigTemplate } from './acme-issuer-config-template'
import { k8sObjectApi } from '../../k8s/k8s'
import { Logger } from '../../../logger'

const logger = Logger('cert-manager')

class CertManager {

    async createIssuer({ email, isProd }) {
        const issuerConfig = new AcmeIssuerConfigTemplate()
        issuerConfig.metadata.name = this.getIssuerName(isProd)
        issuerConfig.spec.acme.email = email
        issuerConfig.spec.acme.server = isProd
            ? 'https://acme-v02.api.letsencrypt.org/directory'
            : 'https://acme-staging-v02.api.letsencrypt.org/directory'
        issuerConfig.spec.acme.privateKeySecretRef.name = `acme-issuer-account-key-${isProd ? 'prod' : 'stage'}`

        logger.info(`creating issuer for ${isProd ? 'PROD' : 'STAGE'} with the following config: [${JSON.stringify(issuerConfig)}]`)

        const createResult = await k8sObjectApi.create(issuerConfig)

        logger.info(`create result is [${JSON.stringify(createResult)}]`)

        return createResult
    }

    async getIssuers() {
        return {
            prod: await this.getIssuer(true),
            stage: await this.getIssuer(false)
        }
    }

    async getIssuer(isProd) {
        const config = this.getIssuerConfig(isProd)

        logger.info(`reading issuer for ${isProd ? 'PROD' : 'STAGE'} with config: [${JSON.stringify(config)}]`)

        try {
            const readResponse = await k8sObjectApi.read(config)
            logger.info(`read response for ${isProd ? 'PROD' : 'STAGE'} is [${JSON.stringify(readResponse)}]`)
            return {
                name: readResponse.body.metadata.name,
                created: readResponse.body.metadata.creationTimestamp,
                email: readResponse.body.spec.acme.email,
                server: readResponse.body.spec.acme.server,
                secretName: readResponse.body.spec.acme.privateKeySecretRef
            }
        } catch (e) {
            logger.error(`read FAILED for ${isProd ? 'PROD' : 'STAGE'} error is [${JSON.stringify(e)}]`)
            if (e.response && e.response.statusCode === 404) {
                return {}
            }
            return e
        }
    }


    async deleteIssuer(isProd) {
        const config = this.getIssuerConfig(isProd)

        logger.info(`deleting issuer for ${isProd ? 'PROD' : 'STAGE'} with config: [${JSON.stringify(config)}]`)

        try {
            const deleteResponse = await k8sObjectApi.delete(config)
            logger.info(`delete response for ${isProd ? 'PROD' : 'STAGE'} is [${JSON.stringify(deleteResponse)}]`)
            return deleteResponse
        } catch (e) {
            logger.error(`delete FAILED for ${isProd ? 'PROD' : 'STAGE'} error is [${JSON.stringify(e)}]`)
            if (e.response && e.response.statusCode === 404) {
                return {}
            }
            return e
        }
    }

    getIssuerName(isProd) {
        return `letsencrypt-${isProd ? 'prod' : 'stage'}`
    }

    getIssuerConfig(isProd) {
        const config = {
            apiVersion: 'cert-manager.io/v1',
            kind: 'ClusterIssuer',
            metadata: {
                name: this.getIssuerName(isProd)
            }
        }
        return config
    }


}

export const certManager = new CertManager()