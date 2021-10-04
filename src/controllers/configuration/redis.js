import {handler, Router} from '../../utils/router'
import {redisConfigurationService} from "../../services/manage/configuration/redis";

export const router = new Router()

router.get('/describe', handler(() => redisConfigurationService.describeConfiguration()))

router.get('/config', handler(() => redisConfigurationService.getRedisConfigs()))

router.put('/config', handler(({body, query}) => {
    return redisConfigurationService.saveConfigAndRestart({config: body, shouldRestart: query.restart})
}))