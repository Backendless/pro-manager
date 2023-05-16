import { Logger } from '../../logger'
import { deploymentStatus, statefulsetStatus } from './k8s-status'
import { getVersionFromStatus } from './bl-get-version'

const Status = require('../service-status.json')
const logger = Logger('bl-status')

export async function blStatefulsetStatus(containerName) {
    return blStatus(containerName, () => statefulsetStatus(containerName, true))
}

export async function blDeploymentStatus(containerName) {
    return blStatus(containerName, () => deploymentStatus(containerName, true))
}

async function blStatus(containerName, getK8sStatus) {
    const blStatus = { name: containerName }
    let status
    try {
        status = await getK8sStatus()
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

    if (!serviceStatus.replicas)
        blStatus.status = Status.stopped
    else if (serviceStatus.readyReplicas !== serviceStatus.replicas || serviceStatus.updatedReplicas !== serviceStatus.readyReplicas)
        blStatus.status = Status.changing
    else
        blStatus.status = Status.running

    return blStatus
}