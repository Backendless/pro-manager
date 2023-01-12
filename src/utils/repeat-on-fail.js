import { wait } from './waiter'
import { Logger } from '../logger'
import { circularReplacer } from './circular-replacer'

const logger = Logger('repeat-on-fail')

export async function repeatOnFail(func, repeatTimes, waitInMillis, failCallback) {
    try {
        return await func()
    } catch (e) {
        if (repeatTimes > 0) {
            logger.error(`Failed to execute function '${func.name}', wait time is ${waitInMillis}, repeat times ${repeatTimes}. The error is: ${JSON.stringify(e, circularReplacer())}`)

            if (typeof failCallback === 'function') {
                failCallback(e)
            }

            if (waitInMillis) {
                await wait(waitInMillis)
            }

            return await repeatOnFail(func, repeatTimes - 1, waitInMillis, failCallback)
        } else {
            throw e
        }
    }
}