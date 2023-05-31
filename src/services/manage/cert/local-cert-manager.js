import { k8sConfig } from '../../../config/k8s-config'
import { k8sAppsV1Api, k8sCoreV1Api } from '../../k8s/k8s'
import { ApiError } from '../../../error'
import { Logger } from '../../../logger'
import { K8sError } from '../../../error/k8s-error'
import * as k8s from '@kubernetes/client-node'
import { describeCertConfiguration } from './describe-cert-configuration'

const logger = Logger('CertManager')

class LocalCertManager {
    async upload({ crtBytes, keyBytes, certName }) {
        const k8sNamespace = await k8sConfig.getNamespace()
        const v1Secret = {
            'apiVersion': 'v1',
            'kind': 'Secret',
            'metadata': {
                'name': certName,
                'namespace': k8sNamespace,
                'labels': {
                    'bl-secret': 'tls'
                }
            },
            'data': {
                'tls.crt': crtBytes.toString('base64'),
                'tls.key': keyBytes.toString('base64')
            },
            'type': 'kubernetes.io/tls'
        }

        try {
            return await k8sCoreV1Api.createNamespacedSecret(k8sNamespace, v1Secret)
        } catch (e) {
            logger.error(`Error during saving tls certificates: ${JSON.stringify(e)}`)
            throw new K8sError(e, 'Error during saving tls certificates')
        }
    }

    async list() {
        const k8sResponse = await k8sCoreV1Api.listNamespacedSecret(await k8sConfig.getNamespace(), true, true, '', '', 'bl-secret=tls')
        logger.verbose(`secrets response is ${JSON.stringify(k8sResponse)}`)
        return k8sResponse.body.items.map(item => item.metadata.name)
    }

    describe() {
        return describeCertConfiguration()
    }

    async delete(certName) {
        try {
            return await k8sCoreV1Api.deleteNamespacedSecret(certName, await k8sConfig.getNamespace())
        } catch (e) {
            logger.error(`Failed to remove certificate: ${JSON.stringify(e)}`)

            if (e.response && e.response.statusCode === 404) {
                throw new ApiError.NotFoundError(`Certificate '${certName}' not found`)
            }

            throw new K8sError(e, `Error during delete '${certName}'`)
        }
    }

    async update({ crtBytes, keyBytes, certName }) {
        const k8sNamespace = await k8sConfig.getNamespace()
        const requestData = []

        if (crtBytes) {
            requestData.push({
                'op': 'replace',
                'path': '/data/tls.crt',
                'value': crtBytes.toString('base64')
            })
        }

        if (keyBytes) {
            requestData.push({
                'op': 'replace',
                'path': '/data/tls.key',
                'value': keyBytes.toString('base64')
            })
        }

        const options = { 'headers': { 'Content-type': k8s.PatchUtils.PATCH_FORMAT_JSON_PATCH } }
        try {
            return await k8sCoreV1Api.patchNamespacedSecret(certName, k8sNamespace, requestData,
                undefined, undefined, undefined, undefined, options)
        } catch (e) {
            logger.error(`Error during updating tls certificates: ${JSON.stringify(e)}`)
            throw new K8sError(e, 'Error during updating tls certificate')
        }
    }
}

export const localCertManager = new LocalCertManager()
