import {k8sAppsV1Api, k8sCoreV1Api} from '../../k8s/k8s'
import config from '../../../../config/config.json'
import redisK8sConfig from '../../k8s/config/consul.json'
import {installStatus} from '../install-status'

export async function installRedis({fullMountPath, internalPort, externalPort, name}) {
    installStatus.info('installing ${name}...')
    const workload = redisK8sConfig.workload
    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${fullMountPath}`,
            type: 'DirectoryOrCreate'
        },
        name: 'data'
    })

    workload.metadata.name = name
    workload.metadata.annotations.name = name
    workload.spec.selector.matchLabels.app = name
    workload.spec.template.metadata.labels.app = name
    workload.spec.template.spec.containers[0].name = name
    workload.spec.template.spec.containers[0].ports[0].containerPort = internalPort

    installStatus.info(`creating statefulset for ${name}`)
    const createConsulStateful = await k8sAppsV1Api.createNamespacedStatefulSet(config.k8s.namespace, workload)
    installStatus.info(`creating service for ${name}`)

    const service = redisK8sConfig.service;
    service.metadata.labels.app = name
    service.metadata.name = name
    service.spec.selector.app = name

    service.spec.ports[0].nodePort = externalPort
    service.spec.ports[0].port = internalPort
    service.spec.ports[0].targetPort = internalPort

    const createConsulServiceResult = await k8sCoreV1Api.createNamespacedService(config.k8s.namespace, service)


    return {createConsulStateful, createConsulServiceResult}
}
