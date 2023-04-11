import { userService } from '../../services/user'

export function auth() {
    return async (req, res, next) => {
        const token = req.cookies['auth-token'] || req.headers['auth-token']
        try {
            const userId = await userService.checkAuthAndGetUserId(token)
            req.context.userId = userId
        } catch (e) {
            return next(e)
        }

        return next()
    }
}
