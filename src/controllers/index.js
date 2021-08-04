import { Router } from '../utils/router'

export const mainRouter = new Router()

mainRouter.use('/services/k8s', require('./k8s').router)
mainRouter.use('/services/install', require('./install').router)
mainRouter.use('/services/manage', require('./manager').router)
mainRouter.use('/health', require('./health').router)
