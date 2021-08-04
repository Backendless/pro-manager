import { docker } from './docker'
import { Logger } from '../../logger'


export async function createService(service) {
    return docker.createService({}, {
        name: service.name,
        TaskTemplate: {
            ContainerSpec: {
                Image: 'nginx:alpine',

            }
        },
        Labels: {
            'bl-service': 'bl-services'
        },
        EndpointSpec: {
            Ports: [
                {
                    Protocol: 'tcp',
                    PublishedPort: 80,
                    TargetPort: 8181
                }
            ]
        }
    }).then(result => Logger.Docker.info(`creation result - ${JSON.stringify(result)}`))
}