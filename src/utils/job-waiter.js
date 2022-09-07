import { blJobStatus } from '../services/k8s/bl-job-status'
import Status from '../services/service-status.json'
import { wait } from './waiter'
import { Logger } from '../logger'
import { circularReplacer } from './circular-replacer'

const logger = Logger('job-waiter')

export async function waitForJobToComplete(jobName, jobNotCompleteCallback){
    try {
        const status = await blJobStatus(jobName)

        if (status.status === Status.complete)
            return
    } catch (e) {
        logger.error(`Error during status check. Error: ${e}, \nObject: ${JSON.stringify(e, circularReplacer())}`)
    }

    if (jobNotCompleteCallback !== undefined) {
        jobNotCompleteCallback()
    }

    logger.info('job is not completed, waiting for 1 second to recheck')
    await wait(1000)
    await waitForJobToComplete(jobName, jobNotCompleteCallback)
}