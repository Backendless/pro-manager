import { Logger } from '../../logger'
import { statefulsetStatus } from './k8s-statefulset-status'
import { getVersionFromStatus } from './bl-get-version'

const Status = require('../service-status.json')
const logger = Logger('bl-statefulset-status')

export async function blStatefulsetStatus(containerName) {
    const blStatus = { name: containerName }
    let status
    try {
        status = await statefulsetStatus(containerName, true)
    } catch (err) {
        if (err.statusCode === 404) {
            blStatus.status = Status.notInstalled
            return blStatus
        }

        throw err
    }

    const serviceStatus = status.body.status

    blStatus.version = getVersionFromStatus(status)

    logger.verbose(`service status for '${containerName}' is ${JSON.stringify(serviceStatus)}`)

    if (serviceStatus.replicas < 1)
        blStatus.status = Status.stopped
    else if (serviceStatus.readyReplicas !== serviceStatus.replicas || serviceStatus.updatedReplicas !== serviceStatus.readyReplicas)
        blStatus.status = Status.changing
    else
        blStatus.status = Status.running

    return blStatus
}