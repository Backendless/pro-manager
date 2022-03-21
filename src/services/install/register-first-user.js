import { userConfig } from '../../config/user-config'
import { UserError } from '../../error/user-error'
import { userService } from '../user'
import { InstallError } from '../../error/install-error'
import { Logger } from '../../logger'

const logger = Logger('register-first-user')

export async function registerFirstUser({ login, password }) {
    if (await userConfig.getAuthEnabled()) {
        logger.info('auth is enabled')
        if (login == null || password == null) {
            throw new InstallError.UserIsRequiredError()
        }

        const users = await userService.get()

        if (users.length > 0) {
            const user = users.find(u => u.login === login)

            if (!user) {
                throw new InstallError.UserExistButLoginNotMatchError()
            }

            try {
                await userService.login({ login, password })
            } catch (e) {
                if (e instanceof UserError.UserOrPasswordDoesNotMatchError) {
                    throw new InstallError.UserExistButPasswordDoesNotMatch()
                }

                throw e
            }
        } else {
            await userService.register({ login, password })
        }

    } else {
        logger.info('auth is disabled')
    }
}