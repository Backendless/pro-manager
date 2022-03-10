import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import { Logger } from '../logger'

const logger = Logger('json-db')

export class JsonDb {
    _dbPath = null
    _separator = null
    _db = null

    constructor({ dbPath, separator = '/' }) {
        this._dbPath = dbPath
        this._separator = separator
    }

    getDb() {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.getDbSync())
            } catch (e) {
                reject(e)
            }
        })
    }

    getDbSync() {
        if (this._db == null) {
            logger.verbose(`creating json db for ${this._dbPath}`)
            try {
                this._db = new JsonDB(new Config(this._dbPath, true, false, this._separator))
                logger.verbose(`created json db for ${this._dbPath}`)
            } catch (e) {
                logger.error(`error during creating json db for ${this._dbPath}, error: ${e}`)
                throw e
            }
        }

        return this._db
    }
}