import { JsonDb } from '../../json-db'
import bcrypt from 'bcrypt'
import { userConfig } from '../../config/user-config'
import { Logger } from '../../logger'

import uuidv1 from 'uuid/v1'
import { UserError } from '../../error/user-error'

const DB_DIR = `${__dirname}/../../../db/`
const _dbFileName = 'users.json'
const _usersPath = '/users'

const logger = Logger('user-service')

class UserService {
    _jsonDb = null

    constructor() {
        this._jsonDb = new JsonDb({ dbPath: DB_DIR + _dbFileName })
    }

    async register({ login, password }) {
        logger.info(`registering user with login '${login}'`)
        const db = await this._jsonDb.getDb()
        let userIndex
        try {
            userIndex = db.getIndex(_usersPath, login, 'login')
        } catch (e) {
            logger.info(`User registration error: ${e}`)
        }

        logger.info(`user index for login '${login}' is [${userIndex}]`)

        if (userIndex >= 0) {
            logger.info(`the user with login '${login}' already exists at index [${userIndex}]`)
            throw new UserError.DuplicateUserError(login)
        }

        const hashedPassword = await bcrypt.hash(password, await userConfig.getSalt())
        logger.info(`hashed password for user with login '${login}'`)

        const user = {
            login,
            password: hashedPassword,
            id: uuidv1(),
            created: new Date().getTime()
        }
        logger.info(`will be save user with login '${login}' and id '${user.id}'`)
        db.push(`${_usersPath}[]`, user, true)
        return user
    }

    async login({ login, password }) {

    }

    async remove(login) {

    }

    async get() {

    }
}

export const userService = new UserService()