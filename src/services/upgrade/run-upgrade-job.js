import { k8sBatchV1Api } from '../k8s/k8s'
import { k8sConfig } from '../../config/k8s-config'
import { Logger } from '../../logger'
import { mountPathConfig } from '../../config/mount-path-config'
import { readFileContent } from '../../utils/fs'
import path from 'path'
import { UpgradeConfig } from '../k8s/config/upgrade-config'

const logger = Logger('run-upgrade-job')
const TEN_DAYS_IN_SECONDS = 3600 * 24 * 10

export const jobListLabel = 'bl-upgrade'

export async function runUpgradeJob({ version, checkUpgradeAvailable }) {
    const upgradeConfig = new UpgradeConfig()
    logger.info('initializing upgrade job...')
    const job = upgradeConfig.job
    job.spec.template.spec.containers[0].image = `backendless/bl-upgrade:${version}`
    job.spec.ttlSecondsAfterFinished = TEN_DAYS_IN_SECONDS
    const date = new Date()
    const jobName = `bl-upgrade-${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
    logger.info(`job name is ${jobName}`)
    job.metadata.name = jobName

    if (!checkUpgradeAvailable) {
        job.spec.template.spec.containers[0].env.push({
            name:  'checkLicenseBeforeUpgrade',
            value: 'false'
        })
    }

    const mountPath = await mountPathConfig.get()
    logger.info(`mount path is ${mountPath}`)

    job.spec.template.spec.volumes = [{
        hostPath: {
            path: `${mountPath}/logs/bl-upgrade/`,
            type: 'DirectoryOrCreate'
        },
        name: 'logs'
    }]

    job.spec.template.metadata = {
        labels: {
            app: jobListLabel,
            upgradeJobName: jobName
        }
    }

    const upgradeJobResult = await k8sBatchV1Api.createNamespacedJob(await k8sConfig.getNamespace(), job)

    logger.verbose(`result of upgrade job is ${JSON.stringify(upgradeJobResult)}`)

    return upgradeJobResult
}