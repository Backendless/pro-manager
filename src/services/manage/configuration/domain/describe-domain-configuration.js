export function describeDomainConfiguration() {
    return {
        console: [
            {
                name: 'Console URL',
                description: '',
                regex: '.*',
                type: 'string',
                consulPath: 'config/console/rootUrl',
                required: true
            }
        ],
        api: [
            {
                name: 'Host',
                description: '',
                regex: '.*',
                type: 'string',
                consulPath: 'config/server/publicHost',
                required: true
            }
            ,
            {
                name: 'port',
                description: 'Port for connection',
                regex: '[0-9]',
                type: 'number',
                consulPath: 'config/server/publicPort',
                required: true
            },
            {
                name: 'protocol',
                description: 'Protocol can be http or https',
                regex: 'https|http',
                type: 'string',
                consulPath: 'config/server/publicProtocol',
                required: true
            }
        ],
        rt: [
            {
                name: 'Host',
                description: '',
                regex: '.*',
                type: 'string',
                consulPath: 'config/rt-server/socketServer/connection-host',
                required: true
            }
            ,
            {
                name: 'port',
                description: 'Port for connection',
                regex: '[0-9]',
                type: 'number',
                consulPath: 'config/rt-server/socketServer/connection-port',
                required: true
            },
            {
                name: 'protocol',
                description: 'Protocol can be http or https',
                regex: 'https|http',
                type: 'string',
                consulPath: 'config/rt-server/socketServer/connection-protocol',
                required: true
            }
        ],
        consul: [
            {
                name: 'Host',
                description: '',
                regex: '.*',
                type: 'string',
                consulPath: 'config/',
                required: true
            }
            ,
            {
                name: 'port',
                description: 'Port for connection',
                regex: '[0-9]',
                type: 'number',
                consulPath: 'config/',
                required: true
            },
            {
                name: 'protocol',
                description: 'Protocol can be http or https',
                regex: 'https|http',
                type: 'string',
                consulPath: 'config/',
                required: true
            }
        ]

    }
}