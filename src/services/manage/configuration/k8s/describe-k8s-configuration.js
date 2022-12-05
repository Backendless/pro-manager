export function describeK8sConfiguration() {
    return {
        configFile: {
            name: 'Config file path',
            description: '',
            regex: '.*',
            type: 'string',
            required: true
        },
        namespace: {
            name: 'Namespace',
            description: '',
            regex: '.*',
            type: 'string',
            required: true
        }
    }
}