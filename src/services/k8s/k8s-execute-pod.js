import { k8sExec } from './k8s'
import { k8sConfig } from '../../config/k8s-config'
import { Logger } from '../../logger'

const { Writable } = require('stream')


const logger = Logger('k8s-execute-pod')

export async function executeInPod(pod, args) {
    const outStream = new Writable({
        write: function (chunk, encoding, next) {
            logger.verbose(`out chunk ${chunk.toString()}`)
            outStream.emit('result', chunk.toString())
            next()
        }
    })

    const errStream = new Writable({
        write: function (chunk, encoding, next) {
            logger.verbose(`err chunk ${chunk.toString()}`)
            errStream.emit('error', chunk )
            next()
        }
    })

    const promise = new Promise((resolve, reject) => {
        outStream.on('result', chunk => resolve(chunk))
        errStream.on('error', err => reject(new Error(err.toString())))

    })

    const ws = await k8sExec.exec(await k8sConfig.getNamespace(), pod, '', args,
        outStream, errStream, null,
        false /* tty */,
        status => {
            logger.verbose(`string value of status ${JSON.stringify(status, null, 2)}`)
        })

    const result = await promise
    ws.close()
    outStream.destroy()
    errStream.destroy()
    return result
}