import { k8sBatchV1Api } from '../k8s/k8s'
import config from '../../../config/config.json'
import { installStatus } from './install-status'
import initConfig from '../k8s/config/init-config-values.json'

export async function initConfigInConsul({ version }) {
    installStatus.info('initializing consul config...')
    const job = initConfig.job
    job.spec.template.spec.containers[0].image = `backendless/bl-config-loader:${version}`
    const createInitJob = await k8sBatchV1Api.createNamespacedJob(config.k8s.namespace, job)

    return { createInitJob }
}
