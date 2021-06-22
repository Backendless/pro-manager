'use strict';

class /*SERVICE_NAME*/
ProManager/*SERVICE_NAME*/ {
    /*TYPES*/
    /**
     * @typedef {Object} InstallArgument
     *
     * @property {string} version
     * @property {InstallPorts} ports
     * @property {string} mountPath
     * @property {string} hostName
     */

    /**
     * @typedef {Object} InstallPorts
     *
     * @property {number} blServer
     * @property {number} blWebConsole
     *
     */

    /*TYPES*/
    /*METHODS*/
    /*METHOD install*//*METHOD_COMPLEX_TYPES*//*InstallArgument*//*METHOD_COMPLEX_TYPES*/

    /**
     * @route POST /install
     * @param {InstallArgument} [install]
     */
    async install(install) {
        /*METHOD_BODY*/


        /*METHOD_BODY*/
    }

    /*METHODS*/
}

Backendless.ServerCode.addService(/*SERVICE_NAME*/ProManager/*SERVICE_NAME*/);