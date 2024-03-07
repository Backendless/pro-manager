import { nodeModulesConfigurationService } from '../../services/manage/configuration/code-runner/js/node-modules'
import { handler, Router } from '../../utils/router'

export const router = new Router()

router.get('/', handler(() => nodeModulesConfigurationService.getNodeModules()))

router.put('/', handler(({ body }) => {
    return nodeModulesConfigurationService.updateNodeModules(body)
}))