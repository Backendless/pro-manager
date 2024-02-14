import { Logger } from '../../logger'
import { checkIfEndpointAvailableForGet } from './check-if-endpoint-available'
import { getPublicIp } from "./get-public-ip"
import config from '../../../config/config.json'

const logger = Logger('get-default-domain-and-ports')

export async function getDefaultDomainAndPorts() {
    const publicIp = await getPublicIp()
    logger.info(`public ip is ${publicIp}`)

    const proManagerPort = config.port

    const proManagerEndpoint = `http://${publicIp}:${proManagerPort}`
    const isProManagerAvailableWithPublicIp = await checkIfEndpointAvailableForGet(proManagerEndpoint)
    logger.info(`pro manager is ${isProManagerAvailableWithPublicIp ? '' : 'NOT '}available by the endpoint [${proManagerEndpoint}]`)

    const ip = isProManagerAvailableWithPublicIp ? publicIp : '127.0.0.1'
    logger.info(`will be used ip [${ip}]`)

    const ports = {
        rt: 32700,
        api: 32300,
        console: 32400
    }

    return { ip, ports }
}