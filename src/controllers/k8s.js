import { handler, Router } from '../utils/router'
import { statefulsetStatus } from '../services/k8s/k8s-statefulset-status'
import { jobStatus } from '../services/k8s/k8s-job-status'
import { executeInPod } from '../services/k8s/k8s-execute-pod'
import {consul} from "../services/consul";

export const router = new Router()

router.get('/statefulset/status', handler(() => {
    return statefulsetStatus('bl-consul')
}))

router.get('/job/status', handler(() => {
    return jobStatus('bl-init-config-values1')
}))

router.get('/pod/execute', handler(() => {
    return executeInPod('bl-consul-0', ['consul', 'kv', 'get', 'mode'])
}))

router.get('/consul/get', handler(() => {
    return consul.get('mode')
}))