import { runUpgradeJob } from './run-upgrade-job'
import { Logger } from '../../logger'
import { waitForJobToComplete } from '../../utils/job-waiter'
import { k8sAppsV1Api, k8sCoreV1Api } from '../k8s/k8s'
import { k8sConfig } from '../../config/k8s-config'
import * as k8s from '@kubernetes/client-node'
import { blContainers } from '../bl-containers'
import { listPods } from '../k8s/k8s-list-pods'

const logger = Logger('UpgradeService')

class UpgradeService {
    async upgrade({ version }) {
        runUpgradeJob({ version })
            .then(async result => {
                const jobName = result.response.body.metadata.name
                await waitForJobToComplete(jobName)
                logger.info('upgrade job completed')

                const containers = Object.entries(blContainers.bl)
                    .filter(([key, container]) => container !== blContainers.bl.initConfigValues)
                    .map(([key, container]) => container)

                for (const container of containers) {
                    logger.info(`upgrading ${container.name} to ${container.imageName}:${version}`)
                    const result = await this._upgradeVersion(container.name, container.imageName, version)
                    logger.info(`upgrade version for ${container.imageName} result is ${JSON.stringify(result)}`)
                }

            })
            .catch(err => {
                logger.error(`Run upgrade job failed with error: ${JSON.stringify(err)}`)
            })
    }

    async _upgradeVersion(serviceName, imageName, version) {
        const body = {
            'spec': {
                'template': {
                    'spec': {

                        'containers': [{
                            'image': `backendless/${imageName}:${version}`,
                            'name': serviceName
                        }]
                    }
                }
            }
        }
        const options = { 'headers': { 'Content-type': k8s.PatchUtils.PATCH_FORMAT_STRATEGIC_MERGE_PATCH } }
        return await k8sAppsV1Api.patchNamespacedStatefulSet(serviceName, await k8sConfig.getNamespace(), body,
            undefined, undefined, undefined, undefined, options)
    }

    async getJobs() {
        const upgradeJobConfig = require('../k8s/config/upgrade.json')
        const pods = (await listPods(upgradeJobConfig.job.spec.template.metadata.labels.app, true)).body.items
        return pods.map(pod => {
            return {
                jobName: pod.metadata.labels['job-name'],
                podName: pod.metadata.name,
                creationTimestamp: pod.metadata.creationTimestamp
            }
        }).sort((job1, job2) => {
            return new Date(job2.creationTimestamp).getTime() - new Date(job1.creationTimestamp).getTime()
        })
    }
}


export const upgradeService = new UpgradeService()