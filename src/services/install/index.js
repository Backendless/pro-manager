import { installStatus } from './install-status'
import { installMysql } from './db/mysql'
import { checkReadWriteAccess } from '../../utils/fs'
import { blContainers } from '../bl-containers'
import States from '../service-states.json'
import { initConfigMap } from './init-config-map'
import { Logger } from '../../logger'
import { k8sAppsV1Api, k8sCoreV1Api } from '../k8s/k8s'
import * as config from '../../../config/config.json'

const logger = Logger('install-service')

class InstallService {

    constructor() {
        this.service = require('../k8s/install-service').installService
    }

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
        if (!(await checkReadWriteAccess(install.mountPath))) {
            throw new Error(`Read write access is denied for ${install.mountPath}'`)
        }

        await initConfigMap()

        for (const dependency of blContainers.getSortedDependencies()) {
            installStatus.info(`processing ${dependency.name}...`)
            await this._installContainer(dependency, install)
        }

        installStatus.info('checking status of bl-init-config-values job')
        const initConfigValuesContainer = blContainers.bl.initConfigValues
        if ((await initConfigValuesContainer.serviceStatus()).state === States.notInstalled) {
            await initConfigValuesContainer.installService(install)
        } else {
            installStatus.info('bl-init-config-values job already created')
        }

        const containers = Object.entries(blContainers.bl)
            .filter(([key, container]) => container !== initConfigValuesContainer)
            .map(([key, container]) => container)

        for (const container of containers) {
            await this._installContainer(container, install)
        }

        return installStatus.get(0)
    }

    async installService(serviceName, install) {
        const allContainers = Object.entries({ ...blContainers.bl, ...blContainers.dependencies })
        const container = allContainers
            .filter(([key, container]) => container.name === serviceName)
            .map(([key, container]) => container)

        logger.info(`found container ${JSON.stringify(container)} to install`)

        if (container.length < 1) {
            throw new Error(`'${serviceName}' is not in the list of containers, use one of the following: `
                + `'${allContainers.map(([key, container]) => container.name)}'`)
        }
        return this._installContainer(container[0], install)
    }


    async _installContainer(dependency, install) {
        installStatus.info(`checking status for ${dependency.name}`)
        const status = await dependency.serviceStatus()
        installStatus.info(`status of ${dependency.name} is ${JSON.stringify(status)}`)

        if (status.state === States.notInstalled) {
            installStatus.info(`install container ${dependency.name}`)

            await dependency.installService(install)
        } else {
            installStatus.info(`service ${dependency.name} already installed`)
        }
    }

    async _deleteContainer({ name }) {
        logger.info(`removing ${name}...`)
        try {
            const removeStatefulSetResult = await k8sAppsV1Api.deleteNamespacedStatefulSet(name, config.k8s.namespace)
            logger.info(`removing service ${name}...`)
            const removeServiceResult = await k8sCoreV1Api.deleteNamespacedService(name, config.k8s.namespace)
        } catch (e) {
            logger.error(e)
        }
    }

    /**
     * @route GET /status
     * @return {Object}
     */
    async status() {
        return {
            messages: installStatus.get(),
            progress: 35
        }
    }

    async delete() {
        for (const [key, dependency] of Object.entries(blContainers.dependencies)) {
            await this._deleteContainer(dependency)
        }

        for (const [key, dependency] of Object.entries(blContainers.bl)) {
            await this._deleteContainer(dependency)
        }
    }

    async deleteService(serviceName) {
        return this._deleteContainer({ name: serviceName })
    }

    /**
     * @route GET /default-arguments
     * @return {InstallArgument}
     */
    async defaults() {
        return {
            version: '6.4.1.9',
            mountPath: '/mnt/c/k8s-mount'
        }
    }
}

export const installService = new InstallService()