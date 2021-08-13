import { installStatus } from './install-status'
import { installMysql } from './db/mysql'
import { checkReadWriteAccess } from '../../utils/fs'
import { blContainers } from '../bl-containers'
import States from '../service-states.json'
import { initConfigMap } from './init-config-map'

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

        for (const [key, dependency] of Object.entries(blContainers.dependencies)) {
            installStatus.info(`processing ${dependency.name}...`)
            await this._installContainer(dependency, install)
        }

        installStatus.info('checking status of bl-init-config-values job')
        const initConfigValuesContainer = blContainers.bl.initConfigValues;
        if ((await initConfigValuesContainer.serviceStatus()).state === States.notInstalled)
            await initConfigValuesContainer.installService(install)
        else
            installStatus.info('bl-init-config-values job already created')

        Object.entries(blContainers.bl)
            .filter(([key, container]) => container !== initConfigValuesContainer)
            .map(async ([key, container]) => await this._installContainer(container, install))

    }


    async _installContainer(dependency, install) {
        installStatus.info(`checking status for ${dependency.name}`)
        const status = await dependency.serviceStatus()
        installStatus.info(`status of ${dependency.name} is ${status}`)

        if (status.state === States.notInstalled)
            await dependency.installService(install)
        else
            installStatus.info(`service ${dependency.name} already installed`)
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

    /**
     * @route GET /default-arguments
     * @return {InstallArgument}
     */
    async defaults() {
        return {
            version: '6.4.1.9',
            port: 80,
            mountPath: '/opt/backendless'
        }
    }
}

export const installService = new InstallService()