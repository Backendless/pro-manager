import { handler, Router } from '../../utils/router'
import { userService } from '../../services/user'

export const router = new Router()

router.post('/register', handler(({ body, query }) => {
    return userService.register(body)
}))

router.post('/login', handler(({ body, query }) => {
    return ''
}))