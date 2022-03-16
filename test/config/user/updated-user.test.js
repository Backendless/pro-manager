import {userService} from "../../../src/services/user"
import {JsonDb} from "../../../src/json-db"
import {UserError} from "../../../src/error/user-error"

describe('user update', () => {
    beforeEach(() => {
        userService._jsonDb = new JsonDb({dbPath: `${__dirname}/test-user.json`})
        userService._jsonDb.getDbSync().delete('/')
    })
    test('should update user login', async () => {
        const userToCreate = {login: 'test', password: 'test'}
        const user = await userService.register(userToCreate)

        user.login = 'testUpdate'

        const updatedUser = await userService.update(user)

        expect(updatedUser.login).toBe(user.login)
        expect(updatedUser.login).not.toBe('test')
        expect(updatedUser.updated).toBeGreaterThan(user.updated)
        expect(updatedUser.resetPasswordTime).toBe(user.resetPasswordTime)
    })

    test('should update user password', async () => {
        const userToCreate = {login: 'test', password: 'test'}
        const user = await userService.register(userToCreate)

        const updatedUser = await userService.update({id: user.id, password: 'newpass', login: user.login})

        expect(updatedUser.login).toBe(user.login)
        expect(updatedUser.updated).toBeGreaterThan(user.updated)
        expect(updatedUser.resetPasswordTime).toBeGreaterThan(user.resetPasswordTime)
    })

    test('should throw not found error', async () => {
        const userFunction = async () => await userService.update({'id': 'ddss'})
        await expect(userFunction).rejects.toThrow(UserError.UserNotFoundByIdError)
    })
})