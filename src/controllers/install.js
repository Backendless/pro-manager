import { handler, Router } from '../utils/router'
import { installService } from '../services/install'
import { installStatus } from '../services/install/install-status'

export const router = new Router()

router.post('/', handler(({ body }) => installService.install(body)))

router.get('/default-arguments', handler(async () => {
    return installService.defaults()
}))

router.delete('/delete', handler(async () => {
    return installService.deleteAll()
}))

router.delete('/:serviceName', handler(({ params }) => {
    const { serviceName } = params
    return installService.deleteService(serviceName)
}))

router.post('/:serviceName', handler(({ params, body }) => {
    const { serviceName } = params
    return installService.installService(serviceName, body)
}))

router.get('/status', handler(() => {
    return installService.status()
}))