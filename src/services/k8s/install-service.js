import { Logger } from '../../logger'
import { k8sAppsV1Api, k8sBatchV1Api, k8sCoreV1Api } from './k8s'
import { k8sConfig } from '../../config/k8s-config'
import { ConsulConfig } from './config/consul-config'

const logger = Logger('k8s-install-service')

class InstallService {
    /*TYPES*/
    /**
     * @typedef {Object} InstallArgument
     *
     * @property {string} version
     * @property {number} port
     * @property {string} mountPath
     * @property {string} licence
     */

    /*TYPES*/

    /**
     * @param {InstallArgument} [install]
     */
    async install(install) {
        // const nginx = require('./config/nginx.json')
        // const nginxService = require('./config/nginx-service.json')

        const consul = new ConsulConfig()

        const createConsulStateful = await k8sAppsV1Api.createNamespacedStatefulSet(await k8sConfig.getNamespace(), consul.workload, true)
        const createConsulServiceResult = await k8sCoreV1Api.createNamespacedService(await k8sConfig.getNamespace(), consul.service, true)

        const initConfig = require('./config/init-config-values.json')

        const createInitJob = await k8sBatchV1Api.createNamespacedJob(await k8sConfig.getNamespace(), initConfig.job, true)

        return { createConsulStateful, createConsulServiceResult, createInitJob }


        // return createService(nginx).then(async res => {
        //     const serviceResult = await createService(nginxService)
        //     return `result of nginx is ${res}.\nResult of service is ${serviceResult}`
        // });
    }

    /**
     * @route GET /status
     * @return {Object}
     */
    async status() {
        return {
            messages: [
                { time: 1624373244, message: 'Pulling images...' },
                { time: 1624373244, message: 'Pulled images' },
                { time: 1624373246, message: 'Starting consul...' },
                { time: 1624373280, message: 'Starting mysql...' },
                { time: 1624373293, message: 'Pulling images...' }
            ],
            progress: 35
        }
    }

    /**
     * @route GET /default-arguments
     * @return {InstallArgument}
     */
    async defaults() {
        return {
            version: '6.4.1.8',
            port: 80,
            mountPath: '/opt/backendless'
        }
    }
}

export const installService = new InstallService()