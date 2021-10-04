import {handler, Router} from '../../utils/router'
import {mysqlConnectionConfigurationService} from "../../services/manage/configuration/mysql";

export const router = new Router()

router.get('/describe', handler(() => mysqlConnectionConfigurationService.describeConfiguration()))

router.get('/shard', handler(() => mysqlConnectionConfigurationService.getShards()))

router.put('/shard', handler(({body, query}) => {
    return mysqlConnectionConfigurationService.saveShardAndRestart({shard: body, shouldRestart: query.restart})
}))