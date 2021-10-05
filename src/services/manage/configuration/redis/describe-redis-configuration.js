export function describeRedisConfiguration() {
    return [
        {
            name: 'host',
            description: 'Host for connection',
            regex: '.*',
            type: 'string',
            consulPath: type => `config/redis/${type}/host`
        },
        {
            name: 'port',
            description: 'Port for connection',
            regex: '[0-9]',
            type: 'number',
            consulPath: type => `config/redis/${type}/port`
        },
        {
            name: 'password',
            description: 'Redis password for connection',
            regex: '.*',
            type: 'password',
            consulPath: type => `config/redis/${type}/password`
        },
        {
            name: 'pool',
            description: 'Maximum connection to Redis server, that service creates',
            regex: '[0-9]',
            type: 'number',
            consulPath: type => `config/redis/${type}/pool/size`
        },
        {
            name: 'type',
            description: 'Redis section',
            regex: '.*',
            type: 'string',
            consulPath: type => null
        },
        {
            name: 'ssl',
            description: 'Show if ssl is enabled for the redis',
            regex: '.*',
            type: 'boolean',
            consulPath: type => `config/connection/${type}/ssl`
        }
    ]
}