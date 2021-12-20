import { handler, Router } from '../utils/router'
import { jobStatus } from '../services/k8s/k8s-job-status'
import { executeInPod } from '../services/k8s/k8s-execute-pod'
import { consul } from '../services/consul'
import { createConfigMap, replaceConfigMap } from '../services/k8s/k8s-config-map'
import { statefulsetRead } from '../services/k8s/k8s-statefulset-read'
import { BaseConfig } from '../config/base-config'

export const router = new Router()

router.get('/statefulset/status', handler(async ({ query }) => {
    const baseConfig = new BaseConfig('testyt')
    await baseConfig.set('/dasd33', 'dsss')
    return await baseConfig.get('/dasd')

    // return statefulsetStatus(query.name, true)
}))

router.get('/statefulset', handler(({ query }) => statefulsetRead(query.name)))

router.get('/job/status', handler(() => {
    return jobStatus('bl-init-config-values1')
}))

router.get('/pod/execute', handler(() => {
    return executeInPod('bl-consul-0', ['consul', 'kv', 'get', 'mode'])
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