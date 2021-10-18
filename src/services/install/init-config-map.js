import { installStatus } from './install-status'
import { createConfigMap } from '../k8s/k8s-config-map'
import { HttpError } from '@kubernetes/client-node'

export async function initConfigMap() {
    const initConfigMapConfig = require('../k8s/config/config-map.json')
    installStatus.info('initializing k8s config map...')
    try {
        await createConfigMap(initConfigMapConfig.name, initConfigMapConfig.map)
    } catch (error) {
        if (error instanceof HttpError && error.statusCode === 409 && error.response.body.reason === 'AlreadyExists') {
            installStatus.info('k8s config map already initialized')
            return
        }
        throw error
    }
}
