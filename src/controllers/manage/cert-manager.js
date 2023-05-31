import { handler, Router } from '../../utils/router'
import { certManager } from '../../services/manage/cert-manager/cert-manager'

export const router = new Router()


router.get('/', handler(() => {
    return certManager.getIssuers()
}))

router.post('/', handler(({ body }) => {
    return certManager.createIssuer( body )
}))

router.delete('/:type', handler(async ({ params }) => {
    const isProd = params.type === 'prod'
    return certManager.deleteIssuer(isProd)
}))