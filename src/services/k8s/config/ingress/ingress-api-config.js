import { getIngressLabel } from './index'

export class IngressApiConfig {
    config = {
        'apiVersion': 'networking.k8s.io/v1',
        'kind': 'Ingress',
        'metadata': {
            'name': 'bl-api-ingress',
            'labels':      { ...getIngressLabel() },
            'annotations': {
                'nginx.ingress.kubernetes.io/proxy-body-size':       '10000m',
                'nginx.ingress.kubernetes.io/proxy-read-timeout':    '600',
                'nginx.ingress.kubernetes.io/proxy-send-timeout':    '600',
                'nginx.ingress.kubernetes.io/proxy-connect-timeout': '600'
            }
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
                            },
                            {
                                'path': '/.*/.*/automation/',
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
