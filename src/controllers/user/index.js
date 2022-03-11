import { handler, Router } from '../../utils/router'
import { userService } from '../../services/user'

export const router = new Router()

const _maxCookieAge = 1000*3600*24*60

router.post('/register', handler(({ body }) => {
    return userService.register(body)
}))

router.post('/login', handler(({ res, body }) => {
    const token = userService.login(body)
    res.cookie('auth-token', token, { maxAge: _maxCookieAge })
    return token
}))

router.get('/', handler(() => {
    return userService.get()
}))