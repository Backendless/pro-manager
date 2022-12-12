import { k8sConfig } from '../../config/k8s-config'
const k8s = require('@kubernetes/client-node')

import { Logger } from '../../logger'

const logger = Logger('k8s')

const kc = new k8s.KubeConfig()

export let k8sCoreV1Api
export let k8sAppsV1Api
export let k8sBatchV1Api
export let k8sEventsV1Api
export let k8sNetworkingV1Api
export let k8sRbacAuthorizationV1Api
export let k8sExec
export let k8sLog

export const reloadK8sConfig = () => {
    logger.info('reloading k8s config...')
    try {
        kc.loadFromFile(k8sConfig.getConfigFile())
        k8sCoreV1Api = kc.makeApiClient(k8s.CoreV1Api)
        k8sAppsV1Api = kc.makeApiClient(k8s.AppsV1Api)
        k8sBatchV1Api = kc.makeApiClient(k8s.BatchV1Api)
        k8sEventsV1Api = kc.makeApiClient(k8s.EventsV1Api)
        k8sNetworkingV1Api = kc.makeApiClient(k8s.NetworkingV1Api)
        k8sRbacAuthorizationV1Api = kc.makeApiClient(k8s.RbacAuthorizationV1Api)
        k8sExec = new k8s.Exec(kc)
        k8sLog = new k8s.Log(kc)
    } catch (e) {
        logger.error(`failed to load k8s config ${e}`)
    }
}

