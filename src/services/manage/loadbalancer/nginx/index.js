import { installStatus } from '../../../install/install-status'
import blK8sConfig from '../../../k8s/config/nginx.json'
import { k8sAppsV1Api, k8sCoreV1Api } from '../../../k8s/k8s'
import { k8sConfig } from '../../../../config/k8s-config'
import { Logger } from '../../../../logger'
import { deleteStatefulsetAndService } from '../../../k8s/k8s-delete-service'

const logger = Logger('nginx-load-balancer')

class NginxLoadBalancerService{
    async install(){
        logger.info('installing nginx...')
        const workload = blK8sConfig.workload


        logger.info('creating statefulset for bl-nginx')
        logger.verbose(`creating workload for bl-nginx with config: ${JSON.stringify(workload)}`)
        const createStatefulSetResult = await k8sAppsV1Api.createNamespacedStatefulSet(await k8sConfig.getNamespace(), workload)
        installStatus.info('creating service for bl-nginx')
        const createServiceResult = await k8sCoreV1Api.createNamespacedService(await k8sConfig.getNamespace(), blK8sConfig.service)

        // await waitForInitConsulJobComplete()
        // await consul.put('config/rt-server/socketServer/connection-port', blK8sConfig.service.spec.ports.filter( port => port.name === 'bl-rt-server')[0].nodePort)
        // await consul.put('config/rt-server/socketServer/connection-host', '127.0.0.1')

        return { createStatefulSetResult, createServiceResult }
    }

    async delete(){
        await deleteStatefulsetAndService('bl-nginx')
    }
}

export const nginxLoadBalancerService = new NginxLoadBalancerService()