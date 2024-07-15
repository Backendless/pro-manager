import { handler, Router } from '../utils/router'
import { jobStatus } from '../services/k8s/k8s-job-status'
import { executeInPod } from '../services/k8s/k8s-execute-pod'
import { consul } from '../services/consul'
import { createConfigMap, replaceConfigMap } from '../services/k8s/k8s-config-map'
import { statefulsetRead } from '../services/k8s/k8s-statefulset-read'
import { BaseConfig } from '../config/base-config'
import { listPods } from '../services/k8s/k8s-list-pods'
import { getDeploymentEvents, getPodEvents } from '../services/k8s/k8s-events-manager'
import { deploymentStatus } from '../services/k8s/k8s-status'

export const router = new Router()

router.get('/statefulset/status', handler(async ({ query }) => {
    const baseConfig = new BaseConfig('testyt')
    await baseConfig.set('/dasd33', 'dsss')
    return await baseConfig.get('/dasd')

    // return statefulsetStatus(query.name, true)
}))

router.get('/statefulset', handler(({ query }) => statefulsetRead(query.name)))

router.get('/deployment', handler(({ query }) => deploymentStatus(query.name, true)))

router.get('/job/status', handler(() => {
    return jobStatus('bl-init-config-values', true)
}))

router.get('/pod/execute', handler(() => {
    return executeInPod('bl-consul-0', ['consul', 'kv', 'get', 'mode'])
}))

router.get('/pod/list/:serviceName', handler(({ params }) => {
    const { serviceName } = params
    return listPods(serviceName, true)
}))

router.get('/consul/get', handler(() => {
    return consul.get('mode')
}))

router.get('/map/replace', handler(() => {
    return replaceConfigMap('bl-test1', { some: 'and it is value replaced' })
}))

router.get('/map/create', handler(() => {
    return createConfigMap('bl-test',{ some:'and it is value' })
}))

router.get('/pod/events/:podName', handler(({ params }) => {
    const { podName } = params
    return getPodEvents(podName)
}))

router.get('/deployment/events/:serviceName', handler(({ params }) => {
    const { serviceName } = params
    return getDeploymentEvents(serviceName)
}))