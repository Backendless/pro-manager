import { Logger } from '../../logger'
import { jobStatus } from './k8s-job-status'

const States = require('../service-states.json')
const logger = Logger('bl-job-status')

export async function blJobStatus(containerName) {
    const blStatus = { name: containerName }
    let k8sJobStatus
    try {
        k8sJobStatus = await jobStatus(containerName)
    } catch (err) {
        if (err.statusCode === 404) {
            blStatus.state = States.notInstalled
            return blStatus
        }

        throw err
    }

    logger.verbose(`job status for '${containerName} is ${JSON.stringify(k8sJobStatus)}`)

    if (k8sJobStatus.succeeded === 1) {
        blStatus.state = States.complete
        blStatus.message = `started at ${k8sJobStatus.startTime} completed at ${k8sJobStatus.completionTime}`
    } else {
        blStatus.state = States.running
    }
    return blStatus
}