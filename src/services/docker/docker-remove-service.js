import { Logger } from '../../logger'
import { docker } from './docker'

export function removeService(serviceId) {
    docker.getService(serviceId).remove()
        .then(result => Logger.Docker.info(`Service remove result - ${JSON.stringify(result)}`))
        .catch(error => Logger.Docker.error(`Remove error - ${JSON.stringify(error)}`))
}