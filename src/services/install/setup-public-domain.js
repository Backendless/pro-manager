import { checkIfEndpointAvailableForGet } from '../manage/check-if-endpoint-available'
import { getPublicIp } from '../manage/get-public-ip'
import { Logger } from '../../logger'
import Config from '../../../config/config.json'
import { domainConfigurationService } from '../manage/configuration/domain'

const localLogger = Logger('setup-public-domain')

export const setupPublicDomain = async statusLogger => {

    const logger = statusLogger || localLogger

    logger.info('start setup public domains')

    const publicIp = await getPublicIp()

    logger.info(`public ip is ${publicIp}`)

    const proManagerPort = Config.port
    const proManagerEndpoint = `http://${publicIp}:${proManagerPort}`
    const isProManagerAvailableWithPublicIp = await checkIfEndpointAvailableForGet(proManagerEndpoint)

    logger.info(`pro manager is ${isProManagerAvailableWithPublicIp ? '' : 'NOT '}available by the endpoint [${proManagerEndpoint}]`)

    const ip = isProManagerAvailableWithPublicIp ? publicIp : '127.0.0.1'
    logger.info(`will be used ip [${ip}]`)

    const domains = await domainConfigurationService.getAll()
    localLogger.info(`found domains ${JSON.stringify(domains)}`)

    domains.rt.Port = 32700
    domains.rt.Host = ip

    domains.api.Port = 32300
    domains.api.Host = ip

    const domainDescription = await domainConfigurationService.describeConfiguration()
    const consoleUrlName = domainDescription.console[0].name
    localLogger.info(`consoleUrlName is [${consoleUrlName}]`)
    domains.console[consoleUrlName] = `http://${ip}:32400`

    await domainConfigurationService.saveAll(domains)

    logger.info('finished setup public domains')
}