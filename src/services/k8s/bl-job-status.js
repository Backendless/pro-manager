import { Logger } from '../../logger'
import { jobStatus } from './k8s-job-status'

const Status = require('../service-status.json')
const logger = Logger('bl-job-status')

export async function blJobStatus(containerName) {
    const blStatus = { name: containerName }
    let k8sJobStatus
    try {
        k8sJobStatus = await jobStatus(containerName)
    } catch (err) {
        if (err.statusCode === 404) {
            blStatus.status = Status.notInstalled
            return blStatus
        }

        throw err
    }

    logger.verbose(`job status for '${containerName} is ${JSON.stringify(k8sJobStatus)}`)

    if (k8sJobStatus.succeeded === 1) {
        blStatus.status = Status.complete
        blStatus.message = `started at ${k8sJobStatus.startTime} completed at ${k8sJobStatus.completionTime}`
    } else {
        blStatus.status = Status.running
    }
    return blStatus
}