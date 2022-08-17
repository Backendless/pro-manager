export function describeDomainConfiguration() {
    return {
        console: [
            {
                name: 'Console URL',
                description: '',
                regex: '.*',
                type: 'string',
                consulPath: 'config/console/rootUrl',
                required: true,
                convertFromIngressObject: ({ domain, certName }) => {
                    return { 'Console URL': `${certName ? 'https' : 'http'}://${domain}` }
                }
            }
        ],
        api: [
            {
                name: 'Host',
                description: '',
                regex: '.*',
                type: 'string',
                consulPath: 'config/server/publicHost',
                required: true,
                convertFromIngressObject: ({ domain }) => { return { Host: domain } }
            }
            ,
            {
                name: 'Port',
                description: 'Port for connection',
                regex: '[0-9]',
                type: 'number',
                consulPath: 'config/server/publicPort',
                required: true,
                convertFromIngressObject: ({ certName }) => { return { Port: certName ? '443' : '80' }}

            },
            {
                name: 'Protocol',
                description: 'Protocol can be http or https',
                regex: 'https|http',
                type: 'string',
                consulPath: 'config/server/publicProtocol',
                required: true,
                convertFromIngressObject: ({ certName }) => { return { Protocol: certName ? 'https' : 'http' }}

            }
        ],
        rt: [
            {
                name: 'Host',
                description: '',
                regex: '.*',
                type: 'string',
                consulPath: 'config/rt-server/socketServer/connection-host',
                required: true,
                convertFromIngressObject: ({ domain }) => { return { Host: domain } }
            }
            ,
            {
                name: 'Port',
                description: 'Port for connection',
                regex: '[0-9]',
                type: 'number',
                consulPath: 'config/rt-server/socketServer/connection-port',
                required: true,
                convertFromIngressObject: ({ certName }) => { return { Port: certName ? '443' : '80' }}
            },
            {
                name: 'Protocol',
                description: 'Protocol can be http or https',
                regex: 'https|http',
                type: 'string',
                consulPath: 'config/rt-server/socketServer/connection-protocol',
                required: true,
                convertFromIngressObject: ({ certName }) => { return { Protocol: certName ? 'https' : 'http' }}
            }
        ],
        // consul: [
        //     {
        //         name: 'Host',
        //         description: '',
        //         regex: '.*',
        //         type: 'string',
        //         consulPath: 'config/',
        //         required: true
        //     }
        //     ,
        //     {
        //         name: 'port',
        //         description: 'Port for connection',
        //         regex: '[0-9]',
        //         type: 'number',
        //         consulPath: 'config/',
        //         required: true
        //     },
        //     {
        //         name: 'protocol',
        //         description: 'Protocol can be http or https',
        //         regex: 'https|http',
        //         type: 'string',
        //         consulPath: 'config/',
        //         required: true
        //     }
        // ]

    }
}