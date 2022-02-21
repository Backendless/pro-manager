import { k8sBatchV1Api } from '../k8s/k8s'
import { k8sConfig } from '../../config/k8s-config'
import { Logger } from '../../logger'
import { mountPathConfig } from '../../config/mount-path-config'

const logger = Logger('run-upgrade-job')

export async function runUpgradeJob({ version }) {
    const upgradeConfig = require('../k8s/config/upgrade.json')
    logger.info('initializing upgrade job...')
    const job = upgradeConfig.job
    job.spec.template.spec.containers[0].image = `backendless/bl-upgrade:${version}`
    const date = new Date()
    const jobName = `bl-upgrade-${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
    logger.info(`job name is ${jobName}`)
    job.metadata.name = jobName

    const mountPath = await mountPathConfig.get()
    logger.info(`mount path is ${mountPath}`)

    job.spec.template.spec.volumes = [{
        hostPath: {
            path: `${mountPath}/logs/bl-upgrade/`,
            type: 'DirectoryOrCreate'
        },
        name: 'logs'
    }]

    const upgradeJobResult = await k8sBatchV1Api.createNamespacedJob(await k8sConfig.getNamespace(), job)

    logger.verbose(`result of upgrade job is ${ JSON.stringify(upgradeJobResult)}`)

    return upgradeJobResult
}