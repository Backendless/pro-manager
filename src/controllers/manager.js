import { handler, Router } from '../utils/router'
import { manageService } from '../services/manage/manage-service'

export const router = new Router()

router.get('/status', handler(() => manageService.status()))

router.put('/state', handler(({ body }) => {
    return manageService.changeState(body)
}))