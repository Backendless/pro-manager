import { getIngressLabel } from './index'

export class IngressApiConfig {
    config = {
        'apiVersion': 'networking.k8s.io/v1',
        'kind': 'Ingress',
        'metadata': {
            'name': 'bl-api-ingress',
            'labels': { ...getIngressLabel() }
        },
        'spec': {
            'defaultBackend': {
                'service': {
                    'name': 'bl-server',
                    'port': {
                        'number': 9000
                    }
                }
            },
            'ingressClassName': 'nginx',
            'rules': [
                {
                    'host': 'api.backendless.local',
                    'http': {
                        'paths': [
                            {
                                'path': '/',
                                'pathType': 'Prefix',
                                'backend': {
                                    'service': {
                                        'name': 'bl-server',
                                        'port': {
                                            'number': 9000
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
}