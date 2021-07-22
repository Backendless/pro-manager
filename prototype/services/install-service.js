'use strict';

class install {
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
     * @route POST /
     * @param {InstallArgument} [install]
     */
    async install(install) {
    }

    /**
     * @route GET /status
     * @return {Object}
     */
    async status() {
        return {
            messages: [
                {time: 1624373244, message: "Pulling images..."},
                {time: 1624373244, message: "Pulled images"},
                {time: 1624373246, message: "Starting consul..."},
                {time: 1624373280, message: "Starting mysql..."},
                {time: 1624373293, message: "Pulling images..."}
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
            version: "6.4.1.8",
            port: 80,
            mountPath: "/opt/backendless"
        }
    }
}

Backendless.ServerCode.addService(install)