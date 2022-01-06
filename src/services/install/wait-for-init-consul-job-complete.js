import { installStatus } from './install-status'
import { blJobStatus } from '../k8s/bl-job-status'
import { blContainers } from '../bl-containers'
import Status from '../service-status.json'

export async function waitForInitConsulJobComplete() {
    installStatus.info('checking status of init config job')
    const status = await blJobStatus(blContainers.bl.initConfigValues.name)

    if (status.status === Status.complete)
        return

    installStatus.info('init config job is not completed, waiting for 1 second to recheck')
    await wait(1000)
    await waitForInitConsulJobComplete()


}

const wait = time => new Promise(resolve => setTimeout(resolve, time))