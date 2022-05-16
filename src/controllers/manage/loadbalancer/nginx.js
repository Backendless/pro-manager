import { handler, Router } from '../../../utils/router'
import { nginxLoadBalancerService } from '../../../services/manage/loadbalancer/nginx'

export const router = new Router()

router.post('/install', handler(({ body, query }) => {
    return nginxLoadBalancerService.install()
}))

router.delete('/', handler(({ body, query }) => {
    return nginxLoadBalancerService.delete()
}))