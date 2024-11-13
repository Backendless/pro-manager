import { manageService } from '../../manage-service'
import { Logger } from '../../../../logger'

const logger = Logger('restart-services-for-domain-configuration')

export async function restartServicesForDomainConfiguration() {
    logger.info('restarting services for-domain configuration')
    await manageService.restartService('bl-server')
    await manageService.restartService('bl-web-console')
    await manageService.restartService('bl-taskman')
    await manageService.restartService('bl-rt-server')
    await manageService.restartService('bl-node-server')
    await manageService.restartService('bl-automation')
}