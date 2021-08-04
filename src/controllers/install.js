import { handler, Router } from '../utils/router'
import { installService } from '../services/install-service'

export const router = new Router()

router.get('/', handler(() => {
    return installService.install()
}))