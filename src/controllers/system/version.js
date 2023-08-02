import { handler, Router } from '../../utils/router'
import { versionService } from '../../services/system/version-service'
import bodyParser from 'express'


export const router = new Router()

router.get('/current', handler(() => {
    return versionService.getCurrent()
}))

router.get('/', handler(({ query }) => {
    return versionService.list( query )
}))

router.put('/change', handler(({ body }) => {
    return versionService.changeVersion(body)
}))

