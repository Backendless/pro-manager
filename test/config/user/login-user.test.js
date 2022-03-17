import {userService} from "../../../src/services/user"
import {JsonDb} from "../../../src/json-db"
import {UserError} from "../../../src/error/user-error"
import {userConfig} from "../../../src/config/user-config"
import jwt from 'jsonwebtoken'

describe('user login', () => {
    beforeEach(() => {
        userService._jsonDb = new JsonDb({dbPath: `${__dirname}/test-user.json`})
        userService._jsonDb.getDbSync().delete('/')
        userConfig._jwtPass = 'test-pass'
    })

    test('should login user', async () => {
        const userToCreate = {login: 'test', password: 'test'}
        const user = await userService.register(userToCreate)

        const token = await userService.login(userToCreate)

        expect(typeof token).toBe('string')

        const userFromJwt = jwt.verify(token, await userConfig.getJwtPass())

        expect(typeof userFromJwt.created).toBe('number')
        expect(userFromJwt.login).toBe(userToCreate.login)
        expect(typeof userFromJwt.loginTime).toBe('number')
    })

    test('should throw 401 error', async () => {
        const userToCreate = {login: 'testexists', password: 'test'}
        await userService.register(userToCreate)
        userToCreate.password = 'wrong pass'
        const userFunction = async () => await userService.login(userToCreate)
        await expect(userFunction).rejects.toThrow(UserError.DuplicateUserError)
    })

})