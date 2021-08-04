import { Logger } from '../logger'
import { ApiError } from './error'

const logger = Logger.Server

const NON_TRANSFERABLE_HEADERS = [
  'content-type',
  'content-length',
]

export function notFoundHandler(req, res, next) {
  next(new ApiError.NotFoundError('Action Not Found'))
}

export function errorsHandler(err, req, res, next) {
  if (err.headers) {
    Object.keys(err.headers).forEach(header => {
      if (!NON_TRANSFERABLE_HEADERS.includes(header.toLowerCase())) {
        res.set(header, err.headers[header])
      }
    })
  }

  if (err.code || err.headers) {
    //if the error is from any Backendless Api Call we should to transfer it to the client
    res.status(err.status || 400).json({ code: err.code, message: err.message })

    logger.debug('[ERROR]', err)
  } else if (err instanceof ApiError) {
    res.status(err.httpStatusCode || 500).json(err)

    logger.debug('[API ERROR]', err)
  } else {
    logger.error(`[INTERNAL SERVER ERROR] ${err.id} `, err)

    res.status(500).json(
      new ApiError.ISE(`Oops. An internal error has occurred.\n${err}` )
    )
  }
}