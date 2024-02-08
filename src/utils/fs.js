import { Logger } from '../logger'
import { isWin } from './os'
//import { promisify } from 'util'
import fs from 'fs'

const logger = Logger('fs-util')

export async function checkReadWriteAccess(path) {
    return new Promise((resolve, reject) => {
        fs.access(path, fs.constants.R_OK | fs.constants.W_OK, err => {
            if (err) {
                logger.info(`'${path}' doesn't exist or access denied`)
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

export async function isDirectory(path) {
    logger.verbose(`checking if path is directory ${path}`)
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, result) => {
            if (err) {
                logger.error(`error to check path ${path} with error: ${err}`)
                reject(err)
            } else {
                const isDir = result.isDirectory()
                logger.verbose(`path ${path} is directory: ${isDir}`)
                resolve(isDir)
            }
        })
    })
}

export async function listDirectory(path) {
    logger.verbose(`listing directory ${path}`)
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, result) => {
            if (err) {
                logger.error(`error to list directory ${path}: ${err}`)
                reject(err)
            } else {
                logger.verbose(`directory ${path} listed: ${result}`)
                resolve(result)
            }
        })
    })
}

export function osDelimiterForFiles() {
    return isWin() ? '\\' : '/'
}