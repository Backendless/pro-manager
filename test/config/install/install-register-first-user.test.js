import {userService} from "../../../src/services/user"
import {JsonDb} from "../../../src/json-db"
import {UserError} from "../../../src/error/user-error"
import {userConfig} from "../../../src/config/user-config"
import jwt from 'jsonwebtoken'
import {registerFirstUser} from "../../../src/services/install/register-first-user";
import {InstallError} from "../../../src/error/install-error";

describe('register first user during installation', () => {
    beforeEach(() => {
        userService._jsonDb = new JsonDb({dbPath: `${__dirname}/test-user.json`})
        userService._jsonDb.getDbSync().delete('/')
        userConfig._jwtPass = 'test-pass'
    })

    test('should register user first user', async () => {
        const userToCreate = {login: 'test', password: 'test'}
        const user = await registerFirstUser(userToCreate)

        const token = await userService.login(userToCreate)

        expect(typeof token).toBe('string')

        const userFromJwt = jwt.verify(token, await userConfig.getJwtPass())

        expect(typeof userFromJwt.created).toBe('number')
        expect(userFromJwt.login).toBe(userToCreate.login)
        expect(typeof userFromJwt.loginTime).toBe('number')
    })

    test('should throw error UserExistButPasswordDoesNotMatch', async () => {
        const userToCreate = {login: 'testexists', password: 'test'}
        await userService.register(userToCreate)
        userToCreate.password = 'wrong pass'
        const userFunction = () => registerFirstUser(userToCreate)
        await expect(userFunction).rejects.toThrow(InstallError.UserExistButPasswordDoesNotMatch)
    })

    test('should throw error UserExistButLoginNotMatchError', async () => {
        const userToCreate = {login: 'testexists', password: 'test'}
        await userService.register(userToCreate)
        userToCreate.login = 'bla'
        const userFunction = () => registerFirstUser(userToCreate)
        await expect(userFunction).rejects.toThrow(InstallError.UserExistButLoginNotMatchError)
    })

})