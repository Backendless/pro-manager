import {userService} from "../../../src/services/user"
import {JsonDb} from "../../../src/json-db"
import {UserError} from "../../../src/error/user-error"

describe('user registration', () => {
    beforeEach(() => {
        userService._jsonDb = new JsonDb({dbPath: `${__dirname}/test-user.json`})
        userService._jsonDb.getDbSync().delete('/')
    })
    test('should register user', async () => {
        const userToCreate = {login: 'test', password: 'test'}
        const user = await userService.register(userToCreate)
        expect(typeof user.id).toBe('string')
        expect(typeof user.created).toBe('number')
        expect(user.login).toBe(userToCreate.login)
        expect(user.password).not.toBe(userToCreate.password)
    })

    test('should throw duplicate error', async () => {

        const userToCreate = {login: 'testexists', password: 'test'}
        await userService.register(userToCreate)
        const userFunction = async () => await userService.register(userToCreate)
        await expect(userFunction).rejects.toThrow(UserError.DuplicateUserError)
    })

})