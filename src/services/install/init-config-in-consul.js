import { k8sBatchV1Api } from '../k8s/k8s'
import { installStatus } from './install-status'
import { k8sConfig } from '../../config/k8s-config'

export async function initConfigInConsul({ version }) {
    const initConfig = require('../k8s/config/init-config-values.json')
    installStatus.info('initializing consul config...')
    const job = initConfig.job
    job.spec.template.spec.containers[0].image = `backendless/bl-config-loader:${version}`
    const createInitJob = await k8sBatchV1Api.createNamespacedJob(await k8sConfig.getNamespace(), job)

    return { createInitJob }
}
