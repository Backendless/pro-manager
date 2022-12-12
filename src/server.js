import express from 'express'
import Config from '../config/config.json'
import compression from 'compression'
import cors from 'cors'
import stoppable from 'stoppable'

// import { Config } from './config'
// import { logRoutes } from './utils/log-routes'
import { Logger } from './logger'
import { mainRouter } from './controllers'
// import { swaggerUIController } from './swagger'
import { notFoundHandler, errorsHandler } from './error'
import { reloadK8sConfig } from './services/k8s/k8s'

const logger = Logger.Server

export function start() {
  console.log('Start server...')
  reloadK8sConfig()
  const app = express()

  // app.use(helmet({
  //   contentSecurityPolicy: false
  // }))

  app.use(compression())

  app.use(cors({ origin: true })) //TODO: check this before release

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // app.get('/favicon.ico', (req, res) => res.send(''))

  // if (logger.min('debug')) {
  //   app.use(logRoutes(logger, [
  //     '/health',
  //   ]))
  // }

  app.use('/', express.static('static'))

  app.use(mainRouter)

  // app.use('*', notFoundHandler)

  app.use(errorsHandler)

  console.log('Start listening port:', Config.port)

  const server = stoppable(app.listen(Config.port, err => {
    if (err) {
      logger.error(err)
      process.exit(1)
    }

    logger.info('')
    logger.info('*************************************************************************************')
    logger.info('***   Backendless Pro Manage is running, talking to API server on %s', Config.apiUrl)
    logger.info(`***   Open http://localhost:${Config.port} in a browser to view the app.`)
    logger.info('*************************************************************************************')
    logger.info('')
  }))

  const startGracefulShutdown = signal => {
    console.log(`Termination ${signal} signal received. Shutting down...`)

    const stoppingTime = Date.now()

    server.stop(() => {
      const stoppingDuration = Date.now() - stoppingTime

      console.log(`The Server has been stopped in ${stoppingDuration / 1000} seconds`)

      process.exit(0)
    })
  }

  require('./socket-io')

  process.on('SIGTERM', startGracefulShutdown)
  process.on('SIGINT', startGracefulShutdown)
}
