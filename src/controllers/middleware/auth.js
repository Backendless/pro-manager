import { userService } from '../../services/user'

export function auth() {
    return async (req, res, next) => {
        const token = req.cookies['auth-token'] || req.headers['auth-token']
        try {
            await userService.checkAuth(token)
        } catch (e) {
           return next(e)
        }
        return next()
    }
}