import {k8sAppsV1Api, k8sCoreV1Api} from '../../k8s/k8s'
import config from '../../../../config/config.json'
import mongoK8sConfig from '../../k8s/config/mongo.json'
import {installStatus} from '../install-status'
import {Logger} from "../../../logger";

const logger = Logger('install-mongo')

export async function installMongo({mountPath}) {
    installStatus.info('installing mongo...')
    const workload = mongoK8sConfig.workload
    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/mongo/data`,
            type: 'DirectoryOrCreate'
        },
        name: 'data'
    })


    logger.verbose(`creating stateful set for mongo with config: ${JSON.stringify(workload)}`)
    installStatus.info('creating statefulset for mongo')
    const createStatefulsetResult = await k8sAppsV1Api.createNamespacedStatefulSet(config.k8s.namespace, workload)
    installStatus.info('creating service for mongo')
    const createServiceResult = await k8sCoreV1Api.createNamespacedService(config.k8s.namespace, mongoK8sConfig.service)


    return {createStatefulsetResult, createServiceResult}
}
