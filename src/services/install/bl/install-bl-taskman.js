import { k8sAppsV1Api, k8sCoreV1Api } from '../../k8s/k8s'
import { installStatus } from '../install-status'
import { readFileContent } from '../../../utils/fs'
import path from 'path'
import { k8sConfig } from '../../../config/k8s-config'

export async function installBlTaskman({ mountPath, version }) {
    const blK8sConfig = JSON.parse(await readFileContent(path.resolve(__dirname, '../../k8s/config/taskman.json')))
    installStatus.info('installing bl-taskman...')
    const workload = blK8sConfig.workload
    workload.spec.template.spec.containers[0].image = `backendless/bl-server:${version}`
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
    const createStatefulSetResult = await k8sAppsV1Api.createNamespacedStatefulSet(await k8sConfig.getNamespace(), workload)
    installStatus.info('creating service for bl-taskman')
    const createServiceResult = await k8sCoreV1Api.createNamespacedService(await k8sConfig.getNamespace(), blK8sConfig.service)


    return { createStatefulSetResult, createServiceResult }
}
