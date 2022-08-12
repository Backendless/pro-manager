import { getIngressLabel } from './index'

export class IngressConsoleConfig {
    config = {
        'apiVersion': 'networking.k8s.io/v1',
        'kind': 'Ingress',
        'metadata': {
            'name': 'bl-console-ingress',
            'labels': { ...getIngressLabel() }
        },
        'spec': {
            'defaultBackend': {
                'service': {
                    'name': 'bl-web-console',
                    'port': {
                        'number': 80
                    }
                }
            },
            'ingressClassName': 'nginx',
            'rules': [
                {
                    'host': 'dev.backendless.local',
                    'http': {
                        'paths': [
                            {
                                'path': '/',
                                'pathType': 'Prefix',
                                'backend': {
                                    'service': {
                                        'name': 'bl-web-console',
                                        'port': {
                                            'number': 80
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