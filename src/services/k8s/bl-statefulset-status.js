import { Logger } from '../../logger'
import { statefulsetStatus } from './k8s-statefulset-status'

const status = require('../service-status.json')
const logger = Logger('bl-statefulset-status')

export async function blStatefulsetStatus(containerName) {
    const blStatus = { name: containerName }
    let serviceStatus
    try {
        serviceStatus = await statefulsetStatus(containerName)
    } catch (err) {
        if (err.statusCode === 404) {
            blStatus.status = status.notInstalled
            return blStatus
        }

        throw err
    }

    logger.verbose(`service status for '${containerName}' is ${JSON.stringify(serviceStatus)}`)

    if (serviceStatus.replicas < 1)
        blStatus.status = status.stopped
    else if (serviceStatus.readyReplicas !== serviceStatus.replicas || serviceStatus.updatedReplicas !== serviceStatus.readyReplicas)
        blStatus.status = status.changing
    else
        blStatus.status = status.running

    return blStatus
}