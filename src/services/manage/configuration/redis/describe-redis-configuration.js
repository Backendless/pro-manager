export function describeRedisConfiguration() {
    return [
        {
            name: 'host',
            description: 'Host for connection',
            regex: '.*',
            type: 'string',
            consulPath: type => `config/redis/${type}/host`,
            required: false
        },
        {
            name: 'port',
            description: 'Port for connection',
            regex: '[0-9]*$',
            type: 'number',
            consulPath: type => `config/redis/${type}/port`,
            required: false
        },
        {
            name: 'password',
            description: 'Redis password for connection',
            regex: '.*',
            type: 'password',
            consulPath: type => `config/redis/${type}/password`,
            required: false
        },
        {
            name: 'pool',
            description: 'Maximum connection to Redis server, that service creates',
            regex: '[0-9]*$',
            type: 'number',
            consulPath: type => `config/redis/${type}/pool/size`,
            required: false
        },
        {
            name: 'type',
            description: 'Redis section',
            regex: '.*',
            type: 'string',
            consulPath: type => null,
            required: true
        },
        {
            name: 'ssl',
            description: 'Show if ssl is enabled for the redis',
            regex: '.*',
            type: 'boolean',
            consulPath: type => `config/connection/${type}/ssl`,
            required: false
        }
    ]
}