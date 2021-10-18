import { k8sAppsV1Api, k8sCoreV1Api } from '../../k8s/k8s'
import config from '../../../../config/config.json'
import { installStatus } from '../install-status'
import { readFileContent } from '../../../utils/fs'
import path from 'path'

export async function installConsul({ mountPath }) {
    const consulK8sConfig = JSON.parse(await readFileContent(path.resolve( __dirname, '../../k8s/config/consul.json')))
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
    const createConsulStateful = await k8sAppsV1Api.createNamespacedStatefulSet(config.k8s.namespace, workload)
    installStatus.info('creating service for consul')
    const createConsulServiceResult = await k8sCoreV1Api.createNamespacedService(config.k8s.namespace, consulK8sConfig.service)


    return { createConsulStateful, createConsulServiceResult }
}
