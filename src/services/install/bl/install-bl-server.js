import { k8sAppsV1Api, k8sCoreV1Api } from '../../k8s/k8s'
import { installStatus } from '../install-status'
import { readFileContent } from '../../../utils/fs'
import path from 'path'
import { Logger } from '../../../logger'
import { k8sConfig } from '../../../config/k8s-config'
import { waitForInitConsulJobComplete } from '../wait-for-init-consul-job-complete'
import { consul } from '../../consul'

const logger = Logger('install-bl-server')

export async function installBlServer({ mountPath, version }) {
    const blServerK8sConfig = JSON.parse(await readFileContent(path.resolve(__dirname, '../../k8s/config/server.json')))
    installStatus.info('installing bl-server...')
    const workload = blServerK8sConfig.workload
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
            path: `${mountPath}/logs/bl-server/`,
            type: 'DirectoryOrCreate'
        },
        name: 'logs'
    })

    installStatus.info('creating statefulset for bl-server')
    logger.verbose(`creating workload for bl-server with config: ${JSON.stringify(workload)}`)
    const createStatefulSetResult = await k8sAppsV1Api.createNamespacedStatefulSet(await k8sConfig.getNamespace(), workload)
    installStatus.info('creating service for bl-server')
    const createServiceResult = await k8sCoreV1Api.createNamespacedService(await k8sConfig.getNamespace(), blServerK8sConfig.service)

    return { createStatefulSetResult, createServiceResult }
}
