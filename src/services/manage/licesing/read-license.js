import axios from 'axios'
import config from '../../../../config/config.json'
import { decodeToken } from './decode-token'
import { Logger } from '../../../logger'

const logger = Logger('read-license')

export async function readLicense(licenseId) {
    const licenseEndpoint = `https://api.backendless.com/${config.license.appId}/${config.license.apiKey}/services/${config.license.serviceName}/token/${licenseId}`
    logger.info(`read license by the following URL [${licenseEndpoint}]`)
    const licenseToken = (await axios.get(licenseEndpoint)).data
    logger.info(`got token from cloud [${licenseToken}]`)
    const licenseInfo = await decodeToken(licenseToken)
    logger.info(`licence info is [${JSON.stringify(licenseInfo)}]`)
    return licenseInfo
}