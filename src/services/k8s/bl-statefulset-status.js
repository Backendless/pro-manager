import { listPods } from './k8s-list-pods'
import { Logger } from '../../logger'
import { statefulsetStatus } from './k8s-statefulset-status'

const States = require('../service-states.json')
const logger = Logger('bl-statefulset-status')

export async function blStatefulsetStatus(containerName) {
    const blStatus = { name: containerName }
    let serviceStatus
    try {
        serviceStatus = await statefulsetStatus(containerName)
    } catch (err) {
        if (err.statusCode === 404) {
            blStatus.state = States.notInstalled
            return blStatus
        }

        throw err
    }

    logger.verbose(`service status for '${containerName}' is ${JSON.stringify(serviceStatus)}`)

    if (serviceStatus.replicas < 1)
        blStatus.state = States.disabled

    if (serviceStatus.readyReplicas !== serviceStatus.replicas || serviceStatus.updatedReplicas !== serviceStatus.readyReplicas)
        blStatus.state = States.changing

    return blStatus
}