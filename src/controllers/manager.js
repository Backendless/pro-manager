import { handler, Router } from '../utils/router'
import { manageService } from '../services/manage-service'

export const router = new Router()

router.get('/status', handler(() => manageService.status()))

router.get('/status/stop', handler(() => {

    return manageService.changeState({
        serviceName: 'bl-nginx',
        state: 'stop'
    })

}))