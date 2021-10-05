import { Router } from '../utils/router'

export const mainRouter = new Router()

mainRouter.use('/services/k8s', require('./k8s').router)
mainRouter.use('/services/install', require('./install').router)
mainRouter.use('/services/manage', require('./manager').router)
mainRouter.use('/services/manage/configuration/mysql', require('./configuration/mysql').router)
mainRouter.use('/services/manage/configuration/redis', require('./configuration/redis').router)
mainRouter.use('/services/manage/configuration/data', require('./configuration/data').router)
mainRouter.use('/health', require('./health').router)
