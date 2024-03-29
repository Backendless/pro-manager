import { Logger } from '../../logger'
import { domainConfigurationService } from '../manage/configuration/domain'
import { getDefaultDomainAndPorts } from '../manage/get-default-domain-and-ports'

const localLogger = Logger('setup-public-domain')

export const setupPublicDomain = async (statusLogger) => {
    const logger = statusLogger || localLogger

    logger.info('start setup public domains')

    const { domain, ports } = await getDefaultDomainAndPorts()

    const domains = await domainConfigurationService.getAll()
    localLogger.info(`found domains ${JSON.stringify(domains)}`)

    domains.rt.Port = ports.rt
    domains.rt.Host = domain

    domains.api.Port = ports.api
    domains.api.Host = domain

    const domainDescription = await domainConfigurationService.describeConfiguration()
    const consoleUrlName = domainDescription.console[0].name
    localLogger.info(`consoleUrlName is [${consoleUrlName}]`)
    domains.console[consoleUrlName] = `http://${domain}:${ports.console}`

    await domainConfigurationService.saveAll(domains)

    logger.info('finished setup public domains')
}