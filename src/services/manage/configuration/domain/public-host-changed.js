import { consul } from '../../../consul'
import { Logger } from '../../../../logger'

const logger = Logger('ingress-load-balancer')

export async function publicHostChanged({ type }) {
    logger.info(`public host changed for ${type}`)
    if (type === 'api') {
        const host = await consul.get('config/server/publicHost')
        const port = await consul.get('config/server/publicPort')
        const protocol = await consul.get('config/server/publicProtocol')

        const portSubstitution = port === '80' || port === 443 ? '' : ':' + port

        const oauthRedirectURL = `${protocol}://${host}${portSubstitution}/integration/oauth/callback`
        logger.info(`changing redirect url for integrations to ${oauthRedirectURL}`)
        await consul.put('config/integration/redirectURI', oauthRedirectURL)
    }
}