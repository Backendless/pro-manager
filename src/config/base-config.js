import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import { Logger } from '../logger'

const logger = Logger('base-config')


export class BaseConfig {
    static CONFIG_DIR = `${__dirname}/../../config/`
    _configFileName = null
    _db = null

    constructor(configFileName) {
        this._configFileName = `${BaseConfig.CONFIG_DIR}${configFileName}`
    }

    async get(path) {
        return this._getDb().then(db => new Promise((resolve, reject) => {
            try {
                resolve(this._getSync(path, db))
            } catch (e) {
                reject(e)
            }
        }))
    }

    getSync(path) {
        return this._getSync(path, this._getDbSync())
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
        return this._getDb().then(db => new Promise((resolve, reject) => {
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

    _getDb() {
        return new Promise((resolve, reject) => {
            try {
                resolve(this._getDbSync())
            } catch (e) {
                reject(e)
            }
        })
    }

    _getDbSync() {
        if (this._db == null) {
            logger.verbose(`creating json db for ${this._configFileName}`)
            try {
                this._db = new JsonDB(new Config(this._configFileName, true, false, '/'))
                logger.verbose(`created json db for ${this._configFileName}`)
            } catch (e) {
                logger.error(`error during creating json db for ${this._configFileName}, error: ${e}`)
                throw e
            }
        }

        return this._db
    }
}