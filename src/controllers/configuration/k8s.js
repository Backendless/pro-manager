import { handler, Router } from '../../utils/router'
import { k8sConfigurationService } from '../../services/manage/configuration/k8s'

export const router = new Router()

router.get('/describe', handler(() => k8sConfigurationService.describeConfiguration()))

router.get('/', handler(() => k8sConfigurationService.get()))

router.put('/', handler(({ body, query }) => k8sConfigurationService.saveConfigAndRestart({
    config: body,
    shouldRestart: query.restart === 'true'
})))