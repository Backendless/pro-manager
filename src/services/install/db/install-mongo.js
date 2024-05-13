import { k8sAppsV1Api, k8sCoreV1Api } from '../../k8s/k8s'
import { installStatus } from '../install-status'
import { Logger } from '../../../logger'
import { readFileContent } from '../../../utils/fs'
import { k8sConfig } from '../../../config/k8s-config'
import path from 'path'

const logger = Logger('install-mongo')

export async function installMongo({ mountPath }) {
    const mongoK8sConfig = JSON.parse(await readFileContent(path.resolve( __dirname, '../../k8s/config/mongo.json')))
    installStatus.info('installing mongo...')
    const workload = mongoK8sConfig.workload
    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/mongo/data`,
            type: 'DirectoryOrCreate'
        },
        name: 'data'
    })

    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/logs/bl-mongo`,
            type: 'DirectoryOrCreate'
        },
        name: 'logs'
    })


    logger.verbose(`creating stateful set for mongo with config: ${JSON.stringify(workload)}`)
    installStatus.info('creating statefulset for mongo')
    const createStatefulsetResult = await k8sAppsV1Api.createNamespacedStatefulSet(await k8sConfig.getNamespace(), workload)
    installStatus.info('creating service for mongo')
    const createServiceResult = await k8sCoreV1Api.createNamespacedService(await k8sConfig.getNamespace(), mongoK8sConfig.service)


    return { createStatefulsetResult, createServiceResult }
}
