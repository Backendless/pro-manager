import {userService} from "../../../src/services/user"
import {JsonDb} from "../../../src/json-db"
import {UserError} from "../../../src/error/user-error"
import {userConfig} from "../../../src/config/user-config"

describe('user remove', () => {
    beforeEach(() => {
        userService._jsonDb = new JsonDb({dbPath: `${__dirname}/test-user.json`})
        userService._jsonDb.getDbSync().delete('/')
        userConfig._jwtPass = 'test-pass'
    })

    test('should remove existed user', async () => {
        const userToCreate = {login: 'test', password: 'test'}
        const userToCreate2 = {login: 'test2', password: 'test2'}
        await userService.register(userToCreate2)
        const user = await userService.register(userToCreate)

        await userService.remove(user.id)
    })

    test('should remove NOT existed user', async () => {
        const userToCreate = {login: 'test', password: 'test'}
        const userToCreate2 = {login: 'test2', password: 'test2'}
        await userService.register(userToCreate)
        await userService.register(userToCreate2)

        await userService.remove('not existed user')
    })

    test('should throw FailToRemoveLastUserError when trying to remove user and less than 2 users exist', async () => {
        const userToCreate = {login: 'test', password: 'test'}
        const user = await userService.register(userToCreate)

        await expect(userService.remove(user.id))
          .rejects
          .toThrow(UserError.FailToRemoveLastUserError)
    })
})
