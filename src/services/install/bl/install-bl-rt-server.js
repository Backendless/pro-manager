import { k8sAppsV1Api, k8sCoreV1Api } from '../../k8s/k8s'
import blK8sConfig from '../../k8s/config/rt-server.json'
import { installStatus } from '../install-status'
import { Logger } from '../../../logger'
import { k8sConfig } from '../../../config/k8s-config'
import { waitForInitConsulJobComplete } from '../wait-for-init-consul-job-complete'
import { consul } from '../../consul'

const logger = Logger('install-bl-rt-server')

export async function installBlRtServer({ mountPath, version }) {
    installStatus.info('installing bl-rt-server...')
    const workload = blK8sConfig.workload
    workload.spec.template.spec.containers[0].image=`backendless/bl-rt-server:${version}`
    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/repo`,
            type: 'DirectoryOrCreate'
        },
        name: 'repo'
    })

    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/logs/bl-rt-server/`,
            type: 'DirectoryOrCreate'
        },
        name: 'logs'
    })

    installStatus.info('creating deployment for bl-rt-server')
    logger.verbose(`creating workload for bl-rt-server with config: ${JSON.stringify(workload)}`)
    const createStatefulSetResult = await k8sAppsV1Api.createNamespacedDeployment(await k8sConfig.getNamespace(), workload)
    installStatus.info('creating service for bl-rt-server')
    const createServiceResult = await k8sCoreV1Api.createNamespacedService(await k8sConfig.getNamespace(), blK8sConfig.service)

    return { createStatefulSetResult, createServiceResult }
}
