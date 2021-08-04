import { Logger } from '../../logger'
import { docker } from './docker'

const logger = Logger.Docker

/**
 * @typedef {Object} Filter
 *
 * @property {array} name - array of string
 * @property {array} label - array of label keys
 */

/**
 * @param {Filter} [filter]
 */
export async function listServices(filter) {
    logger.info('test')
    // const filter = {name: ["bl-nginx"]};
    // const dockerFilter = {
    //     label: [
    //         // "\"com.docker.swarm.service.name\": \"bl-nginx\""
    //         "bl-service"
    //     ]
    // }
    // Logger.Docker.info(`Filter example: ${JSON.stringify(dockerFilter1)}`)

    // const dockerLabels = filter.labels == null ? [] : Object.entries(filter.labels).map(([key, val]) => `"${key}":"${val}"`)
    // const dockerFilter = {name: filter.name, label: dockerLabels}
    const filterStringValue = JSON.stringify(filter)
    Logger.Docker.info(`Filter services by filter: ${filterStringValue}`)

    return docker.listServices({ filters: filterStringValue })
        .then(result => {
            Logger.Docker.info(`result - ${JSON.stringify(result)}`)
            return result
        })
        .catch(error => {
            Logger.Docker.error(`error - ${error}`)
            return error
        })

}