import {handler, Router} from '../utils/router'
import {installService} from '../services/install'

export const router = new Router()

router.get('/', handler(async () => {
    return installService.install(await installService.defaults())
}))

router.get('/status', handler(() => {
    return installService.status()
}))