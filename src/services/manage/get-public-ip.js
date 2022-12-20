import axios from 'axios'
import { Logger } from '../../logger'

const logger = Logger('public-ip-util')

export const getPublicIp = async () => {
    const publicIp = (await axios.get('http://checkip.amazonaws.com')).data.trim()
    logger.info(`Public ip is [${publicIp}]`)
    return publicIp
}