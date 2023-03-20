import { Logger } from '../../../logger'
import { listPods } from '../../k8s/k8s-list-pods'
import { k8sConfig } from '../../../config/k8s-config'

const stream = require('stream')
const { k8sLog } = require('../../k8s/k8s')

const logger = Logger('service-log')

export class ServiceLog {

    clients = {}
    serviceNamesBySocketId = {}
    serviceRequests = {}

    constructor(socketIO) {
        this.socketIO = socketIO
    }

    async subscribe({ socketIOClientId, serviceName, podName, channelName }) {
        const subscriber = { serviceName, channelName, podName }

        const subscribers = this.clients[serviceName] = this.clients[serviceName] || []

        if (subscribers.length < 1) {
            const newLength = subscribers.push(socketIOClientId)
            try {
                await this._subscribeToK8s(subscriber)
            } catch (e) {
                logger.error(`Cannot subscribe for logs ${serviceName}. Message: ${e}`)
                subscribers.splice(newLength - 1, 1)
                return
            }
        }

        if (!subscribers.includes(socketIOClientId)) {
            logger.info(`client '${socketIOClientId} added to subscribers`)
            subscribers.push(socketIOClientId)
        }

        if (!Array.isArray(this.serviceNamesBySocketId[socketIOClientId])) {
            this.serviceNamesBySocketId[socketIOClientId] = []
        }

        const serviceNames = this.serviceNamesBySocketId[socketIOClientId]

        if (!serviceNames.includes(socketIOClientId)) {
            serviceNames.push(serviceName)
        }
    }

    unsubscribe({ socketIOClientId, serviceName }) {
        const subscribers = this.clients[serviceName]
        if (subscribers != null) {
            const indexOfSubscriber = subscribers.indexOf(socketIOClientId)
            if (indexOfSubscriber >= 0) {
                subscribers.splice(indexOfSubscriber, 1)
            }

            if (subscribers.length < 1) {
                logger.info('Last client unsubscribed, k8s request will be aborted')
                if( this.serviceRequests[serviceName] != null ) {
                    this.serviceRequests[serviceName].abort()
                }
            }
        }
    }

    unsubscribeAll({ socketIOClientId }) {
        const serviceNames = this.serviceNamesBySocketId[socketIOClientId]

        if (Array.isArray(serviceNames)) {
            for (const serviceName of serviceNames) {
                this.unsubscribe({ socketIOClientId, serviceName })
            }
        }

        delete this.serviceNamesBySocketId[socketIOClientId]
    }

    async _subscribeToK8s(subscriber) {
        const { serviceName, channelName } = subscriber
        let { podName } = subscriber
        const logStream = new stream.PassThrough()

        logStream.on('data', chunk => {
            this.socketIO.emit(channelName, chunk.toString())
        })

        logStream.on('close', () => {
            logger.info(`stream to the channel [${channelName}] is closed `)
            this.socketIO.emit(channelName, '\nConnection to the pod is closed. Please disconnect and try reconnect again')
        })

        logStream.on('end', () => {
            logger.info(`stream to the channel [${channelName}] is ended `)
            this.socketIO.emit(channelName, '\nConnection to the pod is ended. Please disconnect and try reconnect again')
        })

        logStream.on('error', e => {
            logger.error(`error from subscriber [${subscriber}] is: ${e}`)
        })

        if (podName == null) {
            const pods = await listPods(serviceName)

            if (pods == null || pods.length < 1) {
                throw new Error(`There is no pods for service '${serviceName}'`)
            }

            podName = pods[0].name
        }

        logger.info(`Connecting to '${podName}' pod, to get logs for service '${serviceName}'`)

        const req = await k8sLog.log(await k8sConfig.getNamespace(), podName, null, logStream,
            () => {
            },
            { follow: true, pretty: false, timestamps: true })

        req.on('response', resp => {
            logger.info(`response on subscribe is: ${JSON.stringify(resp)}`)

            if (resp.statusCode >= 400) {
                this.socketIO.emit(channelName, `There is an error during subscription: ${JSON.stringify(resp)}. 
                \nPlease disconnect and try reconnect again`)
            }

        })

        logger.info(`Connected to '${podName}' pod, to get logs for service '${serviceName}`)

        const clientsLength = this.clients[serviceName].length
        if (clientsLength > 0) {
            logger.info(`There is ${clientsLength} clients subscribed for ${serviceName} logs`)
            this.serviceRequests[serviceName] = req
        } else {
            logger.info(`There no clients subscribed for ${serviceName} logs. Request will be aborted`)
            req.abort()
        }
    }
}
