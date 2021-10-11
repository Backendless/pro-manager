import { Logger } from '../../../logger'
import { listPods } from '../../k8s/k8s-list-pods'

const stream = require('stream')
const { k8sLog } = require('../../k8s/k8s')
const config = require('../../../../config/config.json')

const logger = Logger('service-log')

export class ServiceLog {

    clients = {}
    serviceNamesBySocketId = {}
    serviceRequests = {}

    constructor(socketIO) {
        this.socketIO = socketIO
    }

    async subscribe({ socketIOClientId, subscriber }) {
        const { serviceName } = subscriber

        if (!Array.isArray(this.clients[serviceName])) {
            this.clients[serviceName] = []
        }

        const subscribers = this.clients[serviceName]

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
                this.serviceRequests[serviceName].abort()
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
        const logStream = new stream.PassThrough()

        logStream.on('data', chunk => {
            logger.verbose(`log message: ${chunk}`)
            this.socketIO.emit(channelName, chunk.toString())
        })

        const pods = await listPods(serviceName)

        if (pods == null || pods.length < 1) {
            throw new Error(`There is no pods for service '${serviceName}'`)
        }

        const podName = pods[0].name

        logger.info(`Connecting to '${podName}' pod, to get logs for service '${serviceName}'`)

        const req = await k8sLog.log(config.k8s.namespace, podName, serviceName, logStream,
            () => {
            },
            { follow: true, tailLines: 50, pretty: false, timestamps: true })

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
