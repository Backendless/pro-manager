import { Logger } from '../../logger'
import { k8sAppsV1Api } from './k8s'
import { k8sCoreV1Api } from './k8s'
import { k8sBatchV1Api } from './k8s'


const config = require('../../../config/config.json')
const logger = Logger('k8s-install-service')
import { createService } from './k8s-create-service'

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

        const consul = require('./config/consul.json')

        const createConsulStateful = await k8sAppsV1Api.createNamespacedStatefulSet(config.k8s.namespace, consul.workload, true)
        const createConsulServiceResult = await k8sCoreV1Api.createNamespacedService(config.k8s.namespace, consul.service, true)

        const initConfig = require('./config/init-config-values.json')

        const createInitJob = await k8sBatchV1Api.createNamespacedJob(config.k8s.namespace, initConfig.job, true)

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