import { installStatus } from './install-status'
import { blContainers } from '../bl-containers'
import { waitForJobToComplete } from '../../utils/job-waiter'

export async function waitForInitConsulJobComplete() {
    installStatus.info('checking status of init config job')
    await waitForJobToComplete(blContainers.bl.initConfigValues.name,
        () => installStatus.info('init config job is not completed, waiting for 1 second to recheck'))
}