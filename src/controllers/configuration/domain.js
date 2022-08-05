import { handler, Router } from '../../utils/router'
import { domainConfigurationService } from '../../services/manage/configuration/domain'

export const router = new Router()

router.get('/describe', handler(() => domainConfigurationService.describeConfiguration()))

router.get('/config', handler(() => domainConfigurationService.getAll()))

router.put('/config', handler(({ body, query }) => {
    return domainConfigurationService.saveConfigAndRestart({ config: body, shouldRestart: query.restart })
}))