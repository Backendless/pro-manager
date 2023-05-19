import { handler, Router } from '../../utils/router'
import { versionService } from '../../services/system/version-service'


export const router = new Router()

router.get('/current', handler(() => {
    return versionService.getCurrent()
}))

router.get('/', handler(({ query }) => {
    return versionService.list()
}))

