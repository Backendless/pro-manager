import { handler, Router } from '../utils/router'
import { statefulsetStatus } from '../services/k8s/k8s-statefulset-status'
import { jobStatus } from '../services/k8s/k8s-job-status'

export const router = new Router()

router.get('/statefulset/status', handler(() => {
    return statefulsetStatus('bl-consul')
}))

router.get('/job/status', handler(() => {
    return jobStatus('bl-init-config-values')
}))