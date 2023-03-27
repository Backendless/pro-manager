import { handler, Router } from '../../utils/router'
import { mailConfigurationService } from '../../services/manage/configuration/mail'

export const router = new Router()

router.get('/describe', handler(() => mailConfigurationService.describeConfiguration()))

router.get('/', handler(() => mailConfigurationService.get()))

router.put('/', handler(({ body, query }) => {
    return mailConfigurationService.saveConfigAndRestart({ config: body, shouldRestart: query.restart === 'true' })
}))

router.put('/test', handler(({ body }) => {
    return mailConfigurationService.testConfiguration(body)
}))