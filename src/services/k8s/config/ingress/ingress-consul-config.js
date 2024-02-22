import { getIngressLabel } from './index'

export class IngressApiConfig {
    config = {
        'apiVersion': 'networking.k8s.io/v1',
        'kind': 'Ingress',
        'metadata': {
            'name': 'bl-consul-ingress',
            'labels': { ...getIngressLabel() }
        },
        'spec': {
            'defaultBackend': {
                'service': {
                    'name': 'bl-consul',
                    'port': {
                        'number': 8500
                    }
                }
            },
            'ingressClassName': 'nginx',
            'rules': [
                {
                    'host': 'consul.backendless.local',
                    'http': {
                        'paths': [
                            {
                                'path': '/',
                                'pathType': 'Prefix',
                                'backend': {
                                    'service': {
                                        'name': 'bl-consul',
                                        'port': {
                                            'number': 8500
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