import { Router as ExpressRouter } from 'express'

export class Router extends ExpressRouter {
  constructor(options) {
    super(Object.assign({ mergeParams: true }, options))
  }
}
