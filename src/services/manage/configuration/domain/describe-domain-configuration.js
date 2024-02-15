import { getDefaultDomainAndPorts } from "../../get-default-domain-and-ports"

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
                },
                getDefaultConfiguration: async () => {
                    const defaultValues = await getDefaultDomainAndPorts()
                    return { 'Console URL': `http://${defaultValues.domain}:${defaultValues.ports.console}` } 
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
                convertFromIngressObject: ({ domain }) => { 
                    return { Host: domain }
                },
                getDefaultConfiguration: async () => {
                    const defaultValues = await getDefaultDomainAndPorts()
                    return { Host: defaultValues.domain }
                }
            },
            {
                name: 'Port',
                description: 'Port for connection',
                regex: '[0-9]*$',
                type: 'number',
                consulPath: 'config/server/publicPort',
                required: true,
                convertFromIngressObject: ({ certName }) => { 
                    return { Port: certName ? '443' : '80' }
                },
                getDefaultConfiguration: async () => {
                    const defaultValues = await getDefaultDomainAndPorts()
                    return { Port: defaultValues.ports.api }
                }
            },
            {
                name: 'Protocol',
                description: 'Protocol can be http or https',
                regex: 'https|http',
                type: 'string',
                consulPath: 'config/server/publicProtocol',
                required: true,
                convertFromIngressObject: ({ certName }) => { 
                    return { Protocol: certName ? 'https' : 'http' }
                },
                getDefaultConfiguration: () => {
                    return 'http'
                }
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
                convertFromIngressObject: ({ domain }) => { 
                    return { Host: domain }
                },
                getDefaultConfiguration: async () => {
                    const defaultValues = await getDefaultDomainAndPorts()
                    return { Host: defaultValues.domain }
                }
            },
            {
                name: 'Port',
                description: 'Port for connection',
                regex: '[0-9]*$',
                type: 'number',
                consulPath: 'config/rt-server/socketServer/connection-port',
                required: true,
                convertFromIngressObject: ({ certName }) => { 
                    return { Port: certName ? '443' : '80' }
                },
                getDefaultConfiguration: async () => {
                    const defaultValues = await getDefaultDomainAndPorts()
                    return { Port: defaultValues.ports.rt }
                }
            },
            {
                name: 'Protocol',
                description: 'Protocol can be http or https',
                regex: 'https|http',
                type: 'string',
                consulPath: 'config/rt-server/socketServer/connection-protocol',
                required: true,
                convertFromIngressObject: ({ certName }) => { 
                    return { Protocol: certName ? 'https' : 'http' }
                },
                getDefaultConfiguration: () => {
                    return 'http'
                }
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
        //         regex: '[0-9]*$',
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