import { k8sAppsV1Api, k8sCoreV1Api } from '../../k8s/k8s'
import config from '../../../../config/config.json'
import blServerK8sConfig from '../../k8s/config/server.json'
import { installStatus } from '../install-status'

export async function installBlTaskman({ mountPath, version }) {
    installStatus.info('installing bl-taskman...')
    const workload = blServerK8sConfig.workload
    workload.spec.template.spec.containers[0].image=`backendless/bl-taskman:${version}`
    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/repo`,
            type: 'DirectoryOrCreate'
        },
        name: 'repo'
    })

    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/logs/bl-taskman/`,
            type: 'DirectoryOrCreate'
        },
        name: 'logs'
    })

    installStatus.info('creating statefulset for bl-taskman')
    const createStatefulSetResult = await k8sAppsV1Api.createNamespacedStatefulSet(config.k8s.namespace, workload)
    installStatus.info('creating service for bl-taskman')
    const createServiceResult = await k8sCoreV1Api.createNamespacedService(config.k8s.namespace, blServerK8sConfig.service)


    return { createStatefulSetResult, createServiceResult }
}
