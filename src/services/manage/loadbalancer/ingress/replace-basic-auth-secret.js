import { k8sCoreV1Api } from '../../../k8s/k8s'
import { k8sConfig } from '../../../../config/k8s-config'
import { Logger } from '../../../../logger'
import bcrypt from 'bcrypt'

const logger = Logger('replace-basic-auth-secret')

export async function replaceBasicAuthSecret({ secretName, user, password }) {
    const namespace = await k8sConfig.getNamespace()
    try {
        const removeSecretResult = await k8sCoreV1Api.deleteNamespacedSecret(secretName, namespace)
        logger.info(`secret removed with result: [${JSON.stringify(removeSecretResult)}]`)
    } catch ( e ) {
        logger.info(`remove result: [${JSON.stringify(e)}]`)
        if( e.statusCode && e.statusCode === 404 ){
            logger.info(`secret with name [${secretName}] is not exist`)
        } else {
            throw e
        }
    }

    const authString = `${user}:${bcrypt.hashSync(password, 10)}`
    const base64AuthString = Buffer.from(authString).toString('base64')

    const secretManifest = {
        apiVersion: 'v1',
        kind:       'Secret',
        metadata:   {
            name:      secretName,
            namespace: namespace,
        },
        type:       'Opaque',
        data:       {
            'auth': base64AuthString,
        },
    }

    const createSecretResult = await k8sCoreV1Api.createNamespacedSecret(namespace, secretManifest)
    logger.info(`secret created with a result [${JSON.stringify(createSecretResult)}]`)
    return createSecretResult

}