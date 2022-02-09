import { handler, Router } from '../utils/router'
import { manageService } from '../services/manage/manage-service'
import { upgradeService } from '../services/upgrade'

export const router = new Router()

router.get('/status', handler(() => manageService.status()))

router.put('/', handler(({ body }) => {
    return upgradeService.upgrade(body)
}))

router.get('/jobs', handler(() => {
    return upgradeService.getJobs()
}))