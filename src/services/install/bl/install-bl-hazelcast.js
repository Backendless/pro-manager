import { k8sAppsV1Api, k8sCoreV1Api, k8sRbacAuthorizationV1Api } from '../../k8s/k8s'
import { installStatus } from '../install-status'
import axios from 'axios'
import { blJobStatus } from '../../k8s/bl-job-status'
import { blContainers } from '../../bl-containers'
import { consul } from '../../consul'
import { HttpError } from '@kubernetes/client-node'
import { readFileContent } from '../../../utils/fs'
import path from 'path'
import { k8sConfig } from '../../../config/k8s-config'

const Status = require('../../service-status.json')

export async function installBlHazelcast({ version }) {
    const blK8sConfig = JSON.parse(await readFileContent(path.resolve( __dirname, '../../k8s/config/hazelcast.json')))
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

    installStatus.info('setting config for hazelcast server...')
    await consul.put('config/hazelcast/xml', await downloadFile(version, 'hazelcast.xml'))
    installStatus.info('setting config for hazelcast client...')
    await consul.put('config/hazelcast/client/xml', await downloadFile(version, 'hazelcast-client.xml'))

    installStatus.info('installing bl-hazelcast...')
    const workload = blK8sConfig.workload
    workload.spec.template.spec.containers[0].image = `backendless/bl-hazelcast:${version}`


    installStatus.info('creating statefulset for bl-hazelcast')
    const createStatefulSetResult = await k8sAppsV1Api.createNamespacedStatefulSet(await k8sConfig.getNamespace(), workload)
    installStatus.info('creating service for bl-hazelcast')
    const createServiceResult = await k8sCoreV1Api.createNamespacedService(await k8sConfig.getNamespace(), blK8sConfig.service)


    return { createStatefulSetResult, createServiceResult }
}

async function downloadFile(version, name) {
    return (await axios.get(`https://raw.githubusercontent.com/Backendless/BackendlessPro/release_${version}/kubernetes-doc/services/hazelcast/4.0.x-4.1.x/${name}`)).data

}

async function waitForInitConsulJobComplete() {
    installStatus.info('checking status of init config job')
    const status = await blJobStatus(blContainers.bl.initConfigValues.name)

    if (status.status === Status.complete)
        return

    installStatus.info('init config job is not completed, waiting for 1 second to recheck')
    await wait(1000)
    await waitForInitConsulJobComplete()


}

const wait = time => new Promise(resolve => setTimeout(resolve, time))