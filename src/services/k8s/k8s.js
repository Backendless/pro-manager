import { k8sConfig } from '../../config/k8s-config'
const k8s = require('@kubernetes/client-node')

const kc = new k8s.KubeConfig()
kc.loadFromFile(k8sConfig.getConfigFile())
export const k8sCoreV1Api = kc.makeApiClient(k8s.CoreV1Api)
export const k8sAppsV1Api = kc.makeApiClient(k8s.AppsV1Api)
export const k8sBatchV1Api = kc.makeApiClient(k8s.BatchV1Api)
export const k8sEventsV1Api = kc.makeApiClient(k8s.EventsV1Api)
export const k8sNetworkingV1Api = kc.makeApiClient(k8s.NetworkingV1Api)
export const k8sRbacAuthorizationV1Api = kc.makeApiClient(k8s.RbacAuthorizationV1Api)
export const k8sExec = new k8s.Exec(kc)
export const k8sLog = new k8s.Log(kc)

