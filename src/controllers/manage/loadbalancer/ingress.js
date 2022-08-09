import { handler, Router } from '../../../utils/router'
import { ingressLoadbalancerService } from '../../../services/manage/loadbalancer/ingress'


export const router = new Router()

router.post('/install', handler(({ body, query }) => {
    return ingressLoadbalancerService.install()
}))

router.delete('/', handler(({ body, query }) => {
    return ingressLoadbalancerService.delete()
}))