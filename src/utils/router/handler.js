import { composeErrorStacks, FakeError } from '../../error'
import { Logger } from '../../logger'

const logger = Logger('router-handler')

export function handler(cb) {
  const fakeRootError = new FakeError()

  return async function (req, res, next) {
    const context = {
      ...req.context,

      req,
      res,
      next,
      status: null,
      params: req.params,
      query: req.query,
      body: req.body,
      files: req.files,
      headers: req.headers,
      authKey: req.headers['auth-key'],

      streaming: false,
      // stream(fileStream) {
      //   context.streaming = true
      //
      //   if (fileStream instanceof ReadFileStream) {
      //     res.writeHead(200, fileStream.composeResponseHeaders())
      //
      //     fileStream.pipe(res)
      //
      //   } else {
      //     throw new Error('Only ReadFileStream instance is supported')
      //   }
      //
      // }
    }

    try {
      const result = await cb.call(context, context)

      if (!context.streaming) {
        res.status(context.status || 200)

        if (result && (Array.isArray(result) || typeof result === 'object')) {
          res.json(result)
        } else if (result) {
          res.send(result)
        } else {
          res.end()
        }
      }
    } catch (e) {
      logger.verbose(e)
      e.stack = composeErrorStacks(e.stack, fakeRootError.stack)
      next(e)
    }
  }
}
