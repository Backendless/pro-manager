import {installStatus} from './install-status'
import {installMysql} from './mysql'
import {checkReadWriteAccess} from "../../utils/fs";

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

        return installMysql.install(install)
        return this.service.install(install)
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