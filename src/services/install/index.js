import { installStatus } from './install-status'
import { checkReadWriteAccess } from '../../utils/fs'
import { blContainers } from '../bl-containers'
import Status from '../service-status.json'
import { initConfigMap } from './init-config-map'
import { Logger } from '../../logger'
import { isWin } from '../../utils/os'
import * as fs from 'fs'
import { deleteService } from '../k8s/k8s-delete-service'
import { ApiError } from '../../error'
import { mountPathConfig } from '../../config/mount-path-config'
import { registerFirstUser } from './register-first-user'
import { defaultArguments } from './default-arguments'
import { upgradeService } from '../upgrade'
import { consul } from '../consul'
import { circularReplacer } from '../../utils/circular-replacer'

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
        fs.promises.readdir(install.mountPath)

        if (!(await checkReadWriteAccess(install.mountPath))) {
            throw new ApiError.BadRequestError(`Read write access is denied for ${install.mountPath}'`)
        }

        await registerFirstUser(install)

        //install process should be async
        this._install(install).then(async result => {
            installStatus.setServiceCreated(true)
            await upgradeService.upgrade(install)
            installStatus.info('All services are created, you can see status of each service on Manage page')
        })
            .catch(error => {
            installStatus.error(`Error during install process. Error: ${error}, \nObject: ${JSON.stringify(error, circularReplacer())}`)
        })
    }

    async _install(install) {
        if (isWin()) {
            //we should replace `C:` or `D:` or any other latter to /mnt/<latter> because docker paths will be mounted in this way
            const mountPathParts = install.mountPath.match(/(.)(:)(.*)/)
            install.mountPath = `/run/desktop/mnt/host/${mountPathParts[1].toLowerCase()}${mountPathParts[3].replace(/\\/g, '/')}`
        }

        logger.info(`mount path '${install.mountPath}' will be used`)

        await initConfigMap()

        for (const dependency of blContainers.getSortedDependencies()) {
            installStatus.info(`processing ${dependency.name}...`)
            await this._installContainer(dependency, install)
        }

        installStatus.info('checking status of bl-init-config-values job')
        const initConfigValuesContainer = blContainers.bl.initConfigValues
        if ((await initConfigValuesContainer.serviceStatus()).status === Status.notInstalled) {
            await initConfigValuesContainer.installService(install)
        } else {
            installStatus.info('bl-init-config-values job already created')
        }

        if(install.license) {
            await consul.put('license', install.license)
        }

        //TODO: remove the block after resolve BKNDLSS-29380
        if(install.licence) {
            await consul.put('license', install.licence)
        }

        const containers = Object.entries(blContainers.bl)
            .filter(([key, container]) => container !== initConfigValuesContainer)
            .map(([key, container]) => container)

        for (const container of containers) {
            await this._installContainer(container, install)
        }

        await mountPathConfig.save(install.mountPath)

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

        if (status.status === Status.notInstalled) {
            installStatus.info(`install container ${dependency.name}`)

            await dependency.installService(install)
        } else {
            installStatus.info(`service ${dependency.name} already installed`)
        }
    }

    /**
     * @route GET /status
     * @return {Object}
     */
    async status() {
        return {
            messages: installStatus.get(),
            servicesCreated: await installStatus.isServicesCreated()
        }
    }

    async deleteAll() {
        for (const [key, dependency] of Object.entries(blContainers.dependencies)) {
            await dependency.deleteService()
        }

        for (const [key, dependency] of Object.entries(blContainers.bl)) {
            await dependency.deleteService()
        }
    }

    async deleteService(serviceName) {
        return deleteService(serviceName)
    }

    /**
     * @route GET /default-arguments
     * @return {InstallArgument}
     */
    async defaults() {
        return defaultArguments()
    }
}

export const installService = new InstallService()