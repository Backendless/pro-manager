import { k8sAppsV1Api, k8sCoreV1Api } from '../../k8s/k8s'
import { installStatus } from '../install-status'
import { k8sConfig } from '../../../config/k8s-config'
import { ConsulConfig } from '../../k8s/config/consul-config'

export async function installConsul({ mountPath }) {
    const consulK8sConfig = new ConsulConfig()
    installStatus.info('installing consul...')
    const workload = consulK8sConfig.workload
    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/consul/data`,
            type: 'DirectoryOrCreate'
        },
        name: 'consul-data'
    })

    installStatus.info('creating statefulset for consul')
    const createConsulStateful = await k8sAppsV1Api.createNamespacedStatefulSet(await k8sConfig.getNamespace(), workload)
    installStatus.info('creating service for consul')
    const createConsulServiceResult = await k8sCoreV1Api.createNamespacedService(await k8sConfig.getNamespace(), consulK8sConfig.service)


    return { createConsulStateful, createConsulServiceResult }
}
