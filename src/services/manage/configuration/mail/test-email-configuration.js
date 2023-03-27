import nodemailer from 'nodemailer'
import { describeMailConfigurationAsObject } from './describe-mail-configuration'
import { Logger } from '../../../../logger'
import { ApiError } from '../../../../error'

const logger = Logger('test-mail-configuration-service')

export async function testEmailConfiguration({ config, toEmail, body }) {
    logger.info(`testing email config [${JSON.stringify(config)}]`)
    const description = describeMailConfigurationAsObject()
    const protocolValue = config[description.protocol.name]

    if( protocolValue !== 'TLS' && protocolValue !== 'SSL'){
        throw new ApiError.BadRequestError('Protocol should be SSL or TLS')
    }

    const isTLS = protocolValue === 'TLS'
    const transportConfig = {
        host: config[description.smtpHost.name],
        port: config[description.smtpPort.name],
        ignoreTLS: !isTLS,
        requireTLS: isTLS
    }

    if (config[description.password.name])
        transportConfig.auth = {
            user: config[description.userId.name],
            pass: config[description.password.name]
        }

    logger.info(`creating email transport with config [${JSON.stringify(transportConfig)}]`)
    const transport = nodemailer.createTransport(transportConfig)
    try {
        await transport.verify()

        logger.info('transport verified')

        if (!toEmail) {
            throw new ApiError.BadRequestError('toEmail field is required')
        }

        const mailOptions = {
            from: `"${config[description.sendFrom]}" <${config[description.fromEmail]}>`,
            to: toEmail,
            subject: 'This is a test email from PRO installation',
            text: body ?? 'Hey there, it’s our test message sent with backendless PRO',
        }

        logger.info(`sending email with options [${JSON.stringify(mailOptions)}]`)

        await transport.sendMail(mailOptions)

        logger.info('email sent')
    } finally {
        await transport.close()
    }
}
