import {handler, Router} from '../../utils/router'
import {dataConfigurationService} from "../../services/manage/configuration/data"

export const router = new Router()

router.get('/describe', handler(() => dataConfigurationService.describeConfiguration()))

router.get('/config', handler(() => dataConfigurationService.getDataConfigs()))

router.put('/config', handler(({body, query}) => {
    return dataConfigurationService.saveConfigAndRestart({config: body, shouldRestart: query.restart})
}))