import {userService} from "../../../src/services/user"
import {JsonDb} from "../../../src/json-db"
import {UserError} from "../../../src/error/user-error"
import {userConfig} from "../../../src/config/user-config"
import jwt from 'jsonwebtoken'

describe('user remove', () => {
    beforeEach(() => {
        userService._jsonDb = new JsonDb({dbPath: `${__dirname}/test-user.json`})
        userService._jsonDb.getDbSync().delete('/')
        userConfig._jwtPass = 'test-pass'
    })

    test('should remove existed user', async () => {
        const userToCreate = {login: 'test', password: 'test'}
        const user = await userService.register(userToCreate)

        await userService.remove(user.id)

    })

    test('should remove NOT existed user', async () => {
        await userService.remove('not existed user')
    })
})