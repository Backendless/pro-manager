import { JsonDb } from '../../json-db'
import bcrypt from 'bcrypt'
import { userConfig } from '../../config/user-config'
import { Logger } from '../../logger'
import uuidv1 from 'uuid/v1'
import { UserError } from '../../error/user-error'
import jwt from 'jsonwebtoken'

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
        const userIndex = this._getIndexByLogin(db, login)

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
            created: new Date().getTime(),
            updated: new Date().getTime(),
            resetPasswordTime: new Date().getTime()
        }
        logger.info(`the user will be save with login '${login}' and id '${user.id}'`)
        db.push(`${_usersPath}[]`, user, true)

        const userToReturn = { ...user }
        delete userToReturn.password
        return userToReturn
    }

    async update({ id, login, password }) {
        logger.info(`updating user with id '${id}'`)
        const db = await this._jsonDb.getDb()
        const userIndex = this._getIndexById(db, id)

        logger.info(`user index for id '${id}' is [${userIndex}]`)

        if (userIndex < 0) {
            logger.info(`the user with id '${id}' not found at index [${userIndex}]`)
            throw new UserError.UserNotFoundByIdError()
        }

        const user = db.getData(`${_usersPath}[${userIndex}]`)
        logger.info(`user to update found [${JSON.stringify(user)}] found`)

        let updated = false

        if (password != null) {
            const hashedPassword = await bcrypt.hash(password, await userConfig.getSalt())
            logger.info(`hashed password for user with login '${login}'`)
            user.password = hashedPassword
            user.resetPasswordTime = new Date().getTime()
            updated = true
        }

        if (login != null && !user.login !== login) {
            user.login = login
            updated = true
        }

        if (updated) {
            logger.info(`the user will be updated with id '${user.id}'`)
            user.updated = new Date().getTime()
            db.push(`${_usersPath}[${userIndex}]`, user, true)
            logger.info(`the user is updated '${JSON.stringify(user)}'`)
        } else {
            logger.info(`the user is NOT updated with id '${user.id}'`)
        }

        const userToReturn = { ...user }
        delete userToReturn.password
        return userToReturn
    }

    async login({ login, password }) {
        logger.info(`logging user '${login}'`)
        const db = await this._jsonDb.getDb()
        const userIndex = this._getIndexByLogin(db, login)

        if (userIndex < 0) {
            logger.info(`the user with login '${login}' does not exist`)
            throw new UserError.UserOrPasswordDoesNotMatchError()
        }

        const user = db.getData(`${_usersPath}[${userIndex}]`)
        logger.info(`user [${JSON.stringify(user)}] found`)

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if(!isPasswordCorrect){
            logger.info(`the user with login '${login}' does not exist`)
            throw new UserError.UserOrPasswordDoesNotMatchError()
        }

        delete user.password
        user.loginTime = new Date().getTime()
        const token = jwt.sign(user, await userConfig.getJwtPass())
        logger.info(`token '${token}' generated for '${login}`)

        return token
    }

    async remove(id) {
        logger.info(`removing user with id '${id}'`)
        if( (await this.get()).length < 2 ){
            throw new UserError.FailToRemoveLastUserError()
        }

        const db = await this._jsonDb.getDb()
        const userIndex = this._getIndexById(db, id)

        if (userIndex < 0) {
            logger.info(`the user with login '${id}' does not exist`)
        }else {
            logger.info(`trying delete user with id '${id}' by '${_usersPath}[${userIndex}]' path`)
            await db.delete(`${_usersPath}[${userIndex}]`)
            logger.info(`user with id '${id}' removed`)
        }

    }

    async get() {
        logger.info('getting users')
        const db = await this._jsonDb.getDb()
        try {
            return db.getData(`${_usersPath}`).map(user => {
                delete user.password
                return user
            })
        } catch (e){
            if( e.message.includes('Can\'t find dataPath')) {
                return []
            }
            throw e
        }
    }

    async checkAuthAndGetUserId(token) {
        if (!await userConfig.getAuthEnabled()) {
            logger.verbose('Auth disabled, check skipped')
            return ''
        }

        logger.verbose(`checking auth for token '${JSON.stringify(token)}'`)

        if (token == null) {
            throw new UserError.InlaidTokenError()
        }

        let userFromJwt
        try {
            userFromJwt = jwt.verify(token, await userConfig.getJwtPass())
        }catch (e)
        {
            logger.error(`Error during parsing JWT token [${token}]. Error: ${e}`)
            throw new UserError.InlaidTokenError()
        }
        logger.verbose(`User from jwt is [${userFromJwt}]`)

        const db = await this._jsonDb.getDb()
        const userIndex = this._getIndexById(db, userFromJwt.id)

        if (userIndex < 0) {
            logger.warn(`the user with login '${userFromJwt.login}' does not exist`)
            throw new UserError.InlaidTokenError()
        }

        const user = db.getData(`${_usersPath}[${userIndex}]`)
        logger.verbose(`user [${JSON.stringify(user)}] found`)

        if (user.resetPasswordTime > userFromJwt.resetPasswordTime) {
            logger.warn(`the user reset password time '${user.resetPasswordTime}' should the same as 
            reset password from jwt '${userFromJwt.resetPasswordTime}'`)
            throw new UserError.InlaidTokenError()
        }

        return user.id
    }

    async authEnabled() {
        return userConfig.getAuthEnabled()
    }

    getTokenKey() {
        return 'auth-token'
    }

    _getIndexByLogin(db, login) {
        return this._getIndexByKey(db, 'login', login)
    }

    _getIndexById(db, id) {
        return this._getIndexByKey(db, 'id', id)
    }

    _getIndexByKey(db, key, value) {
        let userIndex = -1
        try {
            userIndex = db.getIndex(_usersPath, value, key)
        } catch (e) {
            logger.info(`User registration error: ${e}`)
        }

        return userIndex
    }
}

export const userService = new UserService()
