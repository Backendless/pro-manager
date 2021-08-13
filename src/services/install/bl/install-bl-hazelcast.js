import { k8sAppsV1Api, k8sCoreV1Api } from '../../k8s/k8s'
import config from '../../../../config/config.json'
import blK8sConfig from '../../k8s/config/hazelcast.json'
import { installStatus } from '../install-status'
import axios from 'axios'
import { blJobStatus } from '../../k8s/bl-job-status'
import { blContainers } from '../../bl-containers'
import { consul } from '../../consul'

const States = require('../../service-states.json')

export async function installBlHazelcast({ version }) {
    await waitForInitConsulJobComplete()

    installStatus.info('setting config for hazelcast server...')
    await consul.put('config/hazelcast/xml', await downloadFile(version,'hazelcast.xml'))
    installStatus.info('setting config for hazelcast client...')
    await consul.put('config/hazelcast/client/xml', await downloadFile(version,'hazelcast-client.xml'))

    installStatus.info('installing bl-hazelcast...')
    const workload = blK8sConfig.workload
    workload.spec.template.spec.containers[0].image = `backendless/bl-hazelcast:${version}`


    installStatus.info('creating statefulset for bl-hazelcast')
    const createStatefulSetResult = await k8sAppsV1Api.createNamespacedStatefulSet(config.k8s.namespace, workload)
    installStatus.info('creating service for bl-hazelcast')
    const createServiceResult = await k8sCoreV1Api.createNamespacedService(config.k8s.namespace, blK8sConfig.service)


    return { createStatefulSetResult, createServiceResult }
}

async function downloadFile(version, name) {
    return (await axios.get(`https://raw.githubusercontent.com/Backendless/BackendlessPro/release_${version}/kubernetes-doc/services/hazelcast/4.0.x-4.1.x/${name}`)).data

}

async function waitForInitConsulJobComplete() {
    installStatus.info('checking status of init config job')
    const status = await blJobStatus(blContainers.bl.initConfigValues.name)

    if (status.state === States.complete)
        return

    installStatus.info('init config job is not completed, waiting for 1 second to recheck')
    await wait(1000)
    await waitForInitConsulJobComplete()


}

const wait = time => new Promise(resolve => setTimeout(resolve, time))