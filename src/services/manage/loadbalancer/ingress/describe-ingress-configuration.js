export function describeIngressConfiguration() {
    return [
        {
            name: 'type',
            description: 'The type of domain',
            regex: 'api|console|rt',
            type: 'string'
        },
        {
            name: 'domain',
            description: 'The domain which will be used for the specific service type. For example \'backendless-api.my-company.com\' or \'backendless-console.my-company.com\'',
            regex: '.*',
            type: 'string'
        },
        {
            name: 'certName',
            description: 'The name of certificate that was uploaded on certificate management page',
            regex: '.*',
            type: 'string'
        }
    ]
}