import { removeService } from './docker/docker-remove-service'
import { listServices } from './docker/docker-list-services'
import { createService } from './docker/docker-create-service'

export class ManageService {
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
        if (state.state === 'stop') {
            const service = (await listServices({ name: [state.serviceName] }))[0]
            return removeService(service.ID)
        } else if (state.state === 'start') {
            return createService({ name: state.serviceName })
        }

    }

    /**
     * @route GET /status
     * @return {Object}
     */
    async status() {
        // return listServices({})
        return listServices({ label: ['bl-service'] }).then(result => result.map(dockerState =>
            ({
                id: dockerState.ID,
                name: dockerState.Spec.Name,
                state: dockerState.Spec.Mode.Replicated.Replicas > 0 ? 'running' : 'disabled',
                message: `created at ${dockerState.CreatedAt}, replicas: ${dockerState.Spec.Mode.Replicated.Replicas}`
            })))

        // return [
        //     {name: "bl-server", state: "running", message: "Everything is ok", hidden: false},
        //     {name: "bl-web-console", state: "running", message: "Everything is ok", hidden: false},
        //     {name: "bl-web-console", state: "running", message: "Everything is ok", hidden: false},
        //     {name: "bl-hazelcast", state: "starting", message: "Pulling image", hidden: false},
        //     {name: "bl-mysql", state: "disabled", message: "Everything is ok", hidden: true},
        //     {name: "bl-redis", state: "stopping", message: "Removing connections", hidden: false},
        // ]
    }
}

export const manageService = new ManageService()