'use strict';

class manage {
    /*TYPES*/
    /**
     * @typedef {Object} State
     *
     * @property {string} serviceName - it can be any of service from get status method for example `bl-server`, `bl-web-console
     * or `all` to change state for all services
     * @property {string} state - stop|start|restart
     * @property {boolean} hidden
     */

    /*TYPES*/

    /**
     * @route PUT /state
     * @param {State} [state]
     */
    async changeState(state) {
    }

    /**
     * @route GET /status
     * @return {Object}
     */
    async status() {
        return [
            {name: "bl-server", state: "running", message: "Everything is ok", hidden: false},
            {name: "bl-web-console", state: "running", message: "Everything is ok", hidden: false},
            {name: "bl-web-console", state: "running", message: "Everything is ok", hidden: false},
            {name: "bl-hazelcast", state: "starting", message: "Pulling image", hidden: false},
            {name: "bl-mysql", state: "disabled", message: "Everything is ok", hidden: true},
            {name: "bl-redis", state: "stopping", message: "Removing connections", hidden: false},
        ]
    }

}

Backendless.ServerCode.addService(manage);