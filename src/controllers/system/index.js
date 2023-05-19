import { Router } from '../../utils/router'

export const systemRouter = new Router()

systemRouter.use('/version',  require('./version').router)

