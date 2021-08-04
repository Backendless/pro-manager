import winston from 'winston'
import path from 'path'
import fs from 'fs'

// import { Config } from '../config'

winston.addColors({
  error  : 'red',
  warn   : 'yellow',
  info   : 'grey',
  verbose: 'cyan',
  debug  : 'blue',
  silly  : 'magenta',
})

const TransportTypes = {
  CONSOLE   : 'console',
  FILE      : 'file',
  LOGSTASH  : 'logstash',
  PAPERTRAIL: 'papertrail',
}

const Transports = {
  [TransportTypes.CONSOLE]: options => new winston.transports.Console(options),

  [TransportTypes.FILE]: options => {
    require('winston-daily-rotate-file')

    if (options.filename) {
      options.filename = path.resolve(options.filename)
    }

    if (options.dirname) {
      options.dirname = path.resolve(options.dirname)
    }

    const transporter = new winston.transports.DailyRotateFile(options)

    if (fs.existsSync(transporter.dirname)) {
      return transporter
    }

    console.log(
      `FILE Transport is not applied, directory: ${transporter.dirname} doesn't not exist`,
      `options: ${JSON.stringify(options)}`
    )
  },

  [TransportTypes.LOGSTASH]: options => {
    const LogstashProvider = require('winston-logstash').Logstash

    const transporter = new LogstashProvider(options)

    transporter.on('error', error => {
      console.error('Logstash Transport', error)
    })

    console.log(`Logstash Transport is applied: ${JSON.stringify(options)}`)

    return transporter
  },

  [TransportTypes.PAPERTRAIL]: options => {
    const PapertrailProvider = require('winston-papertrail').Papertrail

    const transporter = new PapertrailProvider(options)

    transporter.on('error', error => {
      console.error('Papertrail Transport', error)
    })

    console.log(`Papertrail Transport is applied: ${JSON.stringify(options)}`)

    return transporter
  },
}

const AVAILABLE_TRANSPORT_TYPES = Object.keys(Transports)

const DefaultOptions = {
  [TransportTypes.CONSOLE]: {
    colorize                       : true,
    timestamp                      : true,
    handleExceptions               : true,
    humanReadableUnhandledException: true,
  },

  [TransportTypes.FILE]: {
    json                           : false,
    timestamp                      : true,
    handleExceptions               : true,
    humanReadableUnhandledException: true,
    maxsize                        : 20 * 1024 * 1024, // = 20 Mb,
    maxFiles                       : 20,
    filename                       : './.log',
    datePattern                    : 'marketplace-server-yyyy-MM-dd',
    prepend                        : true,
  },

  [TransportTypes.LOGSTASH]: {
    timestamp                      : true,
    handleExceptions               : true,
    humanReadableUnhandledException: true,
    node_name                      : 'backendless-marketplace-server',
    port                           : 10514,
    host                           : '127.0.0.1',
  },

  [TransportTypes.PAPERTRAIL]: {
    hostname: 'backendless-marketplace-server',
    host    : '127.0.0.1',
  },
}

function getTransportConfig() {
  const loggers = []

  // if (Config.loggers) {
  //   AVAILABLE_TRANSPORT_TYPES.forEach(transportType => {
  //     const options = Config.loggers[transportType]
  //
  //     if (options) {
  //       if (typeof options !== 'boolean' && typeof options !== 'object') {
  //         throw new Error(
  //           'Logger Transport Options is invalid, must be one of ["true", Object].'
  //         )
  //       }
  //
  //       loggers.push({
  //         type   : transportType,
  //         options: typeof options === 'object'
  //           ? Object.assign({}, DefaultOptions[transportType], options)
  //           : DefaultOptions[transportType],
  //       })
  //     }
  //   })
  // }

  return loggers
}

/**
 * @typedef Logger
 *
 * @method error
 * @method warn
 * @method info
 * @method verbose
 * @method debug
 * @method silly
 * */

/**
 * @returns {Logger} logger
 * */
function createLogger(category) {
  let logger = winston

  const transportConfig = getTransportConfig()

  // const loggersConfig = Config.loggers || {}
  // const loggersLevels = loggersConfig.levels || {}
  const loggersLevels = {}

  loggersLevels.default = loggersLevels.default || 'info'

  const level = loggersLevels[category] || loggersLevels.default

  if (transportConfig && transportConfig.length) {
    const transports = []

    transportConfig.forEach(({ type, options }) => {
      const transport = Transports[type]({ ...options, label: category })

      if (transport) {
        transports.push(transport)
      }
    })

    if (transports.length) {
      logger = new winston.Logger({
        level,
        transports,
      })
    }
  }

  logger.min = level => {
    if (logger.levels[level] >= 0) {
      return logger.levels[logger.level] >= logger.levels[level]
    }
  }

  console.log(`created logger [${category || 'Global'}] - ${level}`)

  return logger
}

export const Logger = createLogger

Logger.Server = createLogger('Server')
Logger.Docker = createLogger('DockerService')


