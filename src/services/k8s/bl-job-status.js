import { Logger } from '../../logger'
import { jobStatus } from './k8s-job-status'
import { getVersionFromStatus } from './bl-get-version'

const Status = require('../service-status.json')
const logger = Logger('bl-job-status')

export async function blJobStatus(containerName) {
    const blStatus = { name: containerName }
    let status
    try {
        status = await jobStatus(containerName, true)
    } catch (err) {
        if (err.statusCode === 404) {
            blStatus.status = Status.notInstalled
            return blStatus
        }

        throw err
    }

    const k8sJobStatus = status.body.status
    blStatus.version = getVersionFromStatus(status)

    logger.verbose(`job status for '${containerName} is ${JSON.stringify(k8sJobStatus)}`)

    if (k8sJobStatus.succeeded === 1) {
        blStatus.status = Status.complete
        blStatus.message = `started at ${k8sJobStatus.startTime} completed at ${k8sJobStatus.completionTime}`
    } else {
        blStatus.status = Status.running
    }
    return blStatus
}