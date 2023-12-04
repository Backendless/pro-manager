import { Router } from '../utils/router'

const proxy = require('express-http-proxy')

export const router = new Router()

router.use('/docker-hub', proxy('https://hub.docker.com', { parseReqBody: false }))