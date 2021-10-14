import { Logger } from '../logger'

const fs = require('fs')

const logger = Logger('fs-util')

export async function checkReadWriteAccess(path) {
    return new Promise((resolve, reject) => {
        fs.access(path, fs.constants.R_OK | fs.constants.W_OK, err => {
            if (err) {
                logger.info('$\'{path}\' doesn\'t exist or access denied')
                resolve(false)
            } else {
                logger.info(`can read/write '${path}'`)
                resolve(true)
            }
        })
    })
}

export async function readFileContent(path) {
    logger.verbose(`reading file by path ${path}`)
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                logger.error(`error to read file by path $'{path}' with error: ${err}`)
                reject(err)
            } else {
                logger.verbose(`file read by path ${path} with the following content '${data}`)
                resolve(data)
            }
        })
    })
}