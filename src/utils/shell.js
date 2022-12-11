import { exec } from 'child_process'
import { Logger } from '../logger'

const logger = Logger('shell')

export const executeInShell = async command => {
    return new Promise((resolve, reject) => {

        exec(command, (error, stdout, stderr) => {
            if (error) {
                logger.error(`general error: ${error.message}`)
                reject(new Error(error))
                return
            }
            if (stderr) {
                logger.error(`stderr: ${stderr}`)
                reject(new Error(stderr))
                return
            }

            logger.info(`stdout: ${stdout}`)
            resolve(stdout)
        })
    })
}