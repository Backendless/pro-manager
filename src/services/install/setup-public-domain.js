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

    if (isProManagerAvailableWithPublicIp) {
        logger.info(`domains will be changed to public ip ${publicIp}`)
        const consoleDomainDescription = (await domainConfigurationService.describeConfiguration()).console
        const domains = await domainConfigurationService.getAll()
        localLogger.info(`found domains ${domains}`)

        domains.rt.Host = publicIp
        domains.api.Host = publicIp
        const consoleUrl = domains.console[consoleDomainDescription[0].name]
        domains.console[consoleDomainDescription[0].name] = consoleUrl.replaceAll('127.0.0.1', publicIp)
        await domainConfigurationService.saveAll(domains)
        logger.info(`domains CHANGED to public ip ${publicIp}`)
    } else {
        logger.info('127.0.0.1 will be used as domain')
    }

    logger.info('finished setup public domains')
}