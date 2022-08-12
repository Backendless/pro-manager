import { handler, Router } from '../../../utils/router'
import { ingressLoadbalancerService } from '../../../services/manage/loadbalancer/ingress'


export const router = new Router()

router.post('/', handler(({ body, query }) => {
    return ingressLoadbalancerService.create( body )
}))

router.put('/', handler(({ body, query }) => {
    return ingressLoadbalancerService.update( body )
}))

router.get('/', handler(() => {
    return ingressLoadbalancerService.list(  )
}))

router.delete('/', handler(({ body, query }) => {
    return ingressLoadbalancerService.delete( body )
}))