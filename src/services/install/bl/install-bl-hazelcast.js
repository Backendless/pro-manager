import { k8sAppsV1Api, k8sCoreV1Api, k8sRbacAuthorizationV1Api } from '../../k8s/k8s'
import { installStatus } from '../install-status'
import { consul } from '../../consul'
import { HttpError } from '@kubernetes/client-node'
import { k8sConfig } from '../../../config/k8s-config'
import { waitForInitConsulJobComplete } from '../wait-for-init-consul-job-complete'
import { HazelcastConfig } from '../../k8s/config/hazelcast-config'

const Status = require('../../service-status.json')

export async function installBlHazelcast({ version }) {
    const blK8sConfig = new HazelcastConfig()
    await waitForInitConsulJobComplete()

    const clusterRoleName = blK8sConfig.permissions.clusterRole.metadata.name
    installStatus.info(`check if cluster role name ${clusterRoleName} exists`)
    let clusterRoleExists = true
    try {
        await k8sRbacAuthorizationV1Api.readClusterRole(clusterRoleName)
        installStatus.info(`cluster role name ${clusterRoleName} exists`)
    } catch (e) {
        if (e instanceof HttpError && e.statusCode === 404) {
            clusterRoleExists = false
        }

    }

    if (!clusterRoleExists) {
        installStatus.info('applying ClusterRole permissions for hazelcast')
        await k8sRbacAuthorizationV1Api.createClusterRole(blK8sConfig.permissions.clusterRole)
    }


    const clusterRoleBindingName = blK8sConfig.permissions.clusterRoleBinding.metadata.name
    installStatus.info(`check if cluster role binding name ${clusterRoleBindingName} exists`)
    let clusterRoleBindingExists = true
    try {
        await k8sRbacAuthorizationV1Api.readClusterRoleBinding(clusterRoleBindingName)
        installStatus.info(`cluster role binding name ${clusterRoleBindingName} exists`)
    } catch (e) {
        if (e instanceof HttpError && e.statusCode === 404) {
            clusterRoleBindingExists = false
        }

    }

    if (!clusterRoleBindingExists) {
        installStatus.info('applying ClusterRoleBinding permissions for hazelcast')
        await k8sRbacAuthorizationV1Api.createClusterRoleBinding(blK8sConfig.permissions.clusterRoleBinding)
    }

    const namespace = await k8sConfig.getNamespace()

    installStatus.info('setting config for hazelcast server...')
    await consul.put('config/hazelcast/xml', blK8sConfig.hazelcastXml(namespace))
    installStatus.info('setting config for hazelcast client...')
    await consul.put('config/hazelcast/client/xml', blK8sConfig.hazelcastClientXml(namespace))

    installStatus.info('installing bl-hazelcast...')
    const workload = blK8sConfig.workload
    workload.spec.template.spec.containers[0].image = `backendless/bl-hazelcast:${version}`


    installStatus.info('creating deployment for bl-hazelcast')

    const createStatefulSetResult = await k8sAppsV1Api.createNamespacedDeployment(namespace, workload)
    installStatus.info('creating service for bl-hazelcast')
    const createServiceResult = await k8sCoreV1Api.createNamespacedService(namespace, blK8sConfig.service)


    return {
        createStatefulSetResult,
        createServiceResult
    }
}