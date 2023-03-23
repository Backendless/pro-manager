export function describeMysqlConfiguration() {
    return [
        {
            name: 'shard',
            description: 'Name of the shard',
            regex: '.*',
            type: 'string',
            consulPath: shardName => null,
            required: true
        },
        {
            name: 'enabled',
            description: 'Show if shard is enabled or not, at least one shard should be enabled',
            regex: '.*',
            type: 'string',
            consulPath: shardName => null,
            required: false
        },
        {
            name: 'pattern',
            description: 'Used to determinate what connection use for particular application id',
            regex: '.*',
            type: 'string',
            consulPath: shardName => `config/connection/${shardName}/pattern`,
            required: false
        },
        {
            name: 'endpoints',
            description: 'Host and port value for connection',
            regex: '.*',
            type: 'string',
            consulPath: shardName => `config/connection/${shardName}/endpoints`,
            required: false
        },
        {
            name: 'user',
            description: 'Mysql user for connection',
            regex: '.*',
            type: 'string',
            consulPath: shardName => `config/connection/${shardName}/user`,
            required: false
        },
        {
            name: 'password',
            description: 'Mysql password for connection',
            regex: '.*',
            type: 'password',
            consulPath: shardName => `config/connection/${shardName}/password`,
            required: false
        },
        {
            name: 'maxActive',
            description: 'Maximum connection to Mysql server, that bl-server creates',
            regex: '[0-9]*$',
            type: 'number',
            consulPath: shardName => `config/connection/${shardName}/maxActive`,
            required: false
        },
        {
            name: 'maxIdle',
            description: 'Maximum connection to Mysql server that will be opened even if they are not used',
            regex: '[0-9]*$',
            type: 'number',
            consulPath: shardName => `config/connection/${shardName}/maxIdle`,
            required: false
        },
        {
            name: 'minIdle',
            description: 'Minimum connection to Mysql server that always will be opened regardless of whether they are used or not',
            regex: '[0-9]*$',
            type: 'number',
            consulPath: shardName => `config/connection/${shardName}/minIdle`,
            required: false
        },
        {
            name: 'urlTemplate',
            description: 'JDBC pattern that will be used to create connection',
            regex: 'jdbc:mysql://.*',
            type: 'string',
            consulPath: shardName => `config/connection/${shardName}/urlTemplate`,
            required: false
        }
    ]
}