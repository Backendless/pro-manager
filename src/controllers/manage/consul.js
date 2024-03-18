import { handler, Router } from '../../utils/router'
import { certManager } from '../../services/manage/cert-manager/cert-manager'
import { changeConsulPortAvailability } from '../../services/manage/consul/change-consul-port-availability'
import { isConsulExternalPortEnabled } from '../../services/manage/consul/is-consul-external-port-enabled'

export const router = new Router()


router.get('/', handler(() => {
    return certManager.getIssuers()
}))

router.put('/external-port/:action', handler(({ params }) => {
    const enableNodePort = params.action === 'enable'
    return changeConsulPortAvailability(enableNodePort)
}))

router.delete('/:type', handler(async ({ params }) => {
    const isProd = params.type === 'prod'
    return certManager.deleteIssuer(isProd)
}))

router.get('/external-port', handler(() => {
    return isConsulExternalPortEnabled()
}))