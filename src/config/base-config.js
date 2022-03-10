import { Logger } from '../logger'
import { JsonDb } from '../json-db'
import { get } from '@babel/register/lib/cache'

const logger = Logger('base-config')


export class BaseConfig {
    static CONFIG_DIR = `${__dirname}/../../config/`
    _configFileName = null
    _jsonDb = null

    constructor(configFileName) {
        this._configFileName = `${BaseConfig.CONFIG_DIR}${configFileName}`
        this._jsonDb = new JsonDb({ dbPath: this._configFileName })
    }

    async get(path) {
        return this._jsonDb.getDb().then(db => new Promise((resolve, reject) => {
            try {
                resolve(this._getSync(path, db))
            } catch (e) {
                reject(e)
            }
        }))
    }

    async getNullable(path) {
        try {
            return await this.get(path)
        } catch (e) {
            if (e.message != null && e.message.includes('Can\'t find dataPath')) {
                return null
            }

            throw e
        }
    }

    getSync(path) {
        return this._getSync(path, this._jsonDb.getDbSync())
    }

    _getSync(path, db) {
        try {
            const value = db.getData(path)
            logger.verbose(`found value '${value}' for '${path}' from config ${this._configFileName}`)
            return value
        } catch (e) {
            logger.error(`error during found value for '${path}' from config ${this._configFileName}, error: ${e}`)
            throw e
        }
    }

    async set(path, value) {
        return this._jsonDb.getDb().then(db => new Promise((resolve, reject) => {
            logger.verbose(`trying to save value '${value}' for '${path}' to config ${this._configFileName}`)
            try {
                const pushResult = db.push(path, value)
                logger.verbose(`saved value '${value}' for '${path}' to config ${this._configFileName}`)
                resolve(pushResult)
            } catch (e) {
                logger.error(`error during save '${value}' for '${path}' from config ${this._configFileName}, error: ${e}`)
                reject(e)
            }
        }))
    }
}