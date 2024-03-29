export function describeMailConfiguration() {
    const description = []
    const descriptionAsObject = describeMailConfigurationAsObject()

    for (const key in descriptionAsObject) {
        description.push(descriptionAsObject[key])
    }
    return description
}

export function describeMailConfigurationAsObject() {
    return {
        timeout: {
            name: 'Timeout',
            description: 'Connection timeout in seconds',
            regex: '[0-9]*$',
            type: 'number',
            consulPath: 'config/mail/settings/connection/timeout'
        },
        password: {
            name: 'Password',
            description: 'User password for email account',
            regex: '.*',
            type: 'string',
            consulPath: 'config/mail/settings/password'
        },
        protocol: {
            name: 'Protocol',
            description: 'Type of secure connection, possible value is TLS or SSL',
            regex: 'TLS|SSL',
            type: 'select',
            options: ['TLS', 'SSL'],
            consulPath: 'config/mail/settings/protocol'
        },
        sendFrom: {
            name: 'Send From',
            description: 'The name of the person or entity sending the email. ' +
                'The name is used to identify the sender\'s name, ' +
                'while the email address is required and identifies the sender\'s email address',
            regex: '.*',
            type: 'string',
            consulPath: 'config/mail/settings/send/from'
        },
        fromEmail: {
            name: 'From Email',
            description: 'Email address of the person or entity sending the email',
            regex: '.*',
            type: 'string',
            consulPath: 'config/mail/settings/send/from-email'
        },
        sendTimeout: {
            name: 'Send Timeout',
            description: 'Timeout in seconds to send the letter',
            regex: '[0-9]*$',
            type: 'number',
            consulPath: 'config/mail/settings/send/timeout'
        },
        smtpPort: {
            name: 'SMTP Port',
            description: 'SMTP port, for example 25',
            regex: '[0-9]*$',
            type: 'number',
            consulPath: 'config/mail/settings/smtp/port'
        },
        smtpHost: {
            name: 'SMTP Host',
            description: 'SMTP Hots, for example my.smtp.com',
            regex: '.*',
            type: 'string',
            consulPath: 'config/mail/settings/smtp/server'
        },
        userId: {
            name: 'User ID',
            description: 'User id for SMTP server, in most cases it should be the same as From Email',
            regex: '.*',
            type: 'string',
            consulPath: 'config/mail/settings/userid'
        }
    }
}