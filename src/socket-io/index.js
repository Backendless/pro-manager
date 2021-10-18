import { ServiceLog } from '../services/manage/log/service-log'
import { Logger } from '../logger'

const config = require('../../config/config.json')
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
export const io = new Server(server)

const serviceLog = new ServiceLog(io)

const logger = Logger('socket-io')

io.on('connection', client => {
    console.log(`a client with id '${client.id}  connected: ${JSON.stringify(client.handshake)}`)

    client.on('service-logs:subscribe', subscriber => {
        const { serviceName, channelName } = subscriber
        logger.info(`client ${client.id} subscribed for '${channelName}' for logs for service '${serviceName}'`)
        serviceLog.subscribe({ socketIOClientId: client.id, subscriber })
    })

    client.on('service-logs:unsubscribe', subscriber => {
        const { serviceName, channelName } = subscriber
        logger.info(`client ${client.id} unsubscribed for '${channelName}' for logs for service '${serviceName}'`)
        serviceLog.unsubscribe({ socketIOClientId: client.id, serviceName })
    })

    client.on('disconnect', () => {
        logger.info(`client ${client.id} disconnected`)
        serviceLog.unsubscribeAll({ socketIOClientId: client.id })
    })
})

server.listen(config.socketIOPort, () => {
    logger.info(`Socket io service started listening on *:${config.socketIOPort}`)
})
