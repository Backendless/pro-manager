import {handler, Router} from '../utils/router'
import {installService} from '../services/install'

export const router = new Router()

router.post('/', handler(async ({body}) => {
    return installService.install(body)
}))

router.get('/default-arguments', handler(async () => {
    return installService.defaults()
}))

router.get('/delete', handler(async () => {
    return installService.delete()
}))

router.get('/status', handler(() => {
    return installService.status()
}))