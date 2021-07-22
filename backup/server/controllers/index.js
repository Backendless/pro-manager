import { Router } from '../utils/router'

export const mainRouter = new Router()

mainRouter.use('/install', require('./install').router)
mainRouter.use('/health', require('./health').router)
