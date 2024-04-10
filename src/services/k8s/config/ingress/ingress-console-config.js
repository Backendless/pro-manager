import { getIngressLabel } from './index'

export class IngressConsoleConfig {
    config = {
        'apiVersion': 'networking.k8s.io/v1',
        'kind': 'Ingress',
        'metadata': {
            'name': 'bl-console-ingress',
            'labels':      { ...getIngressLabel() },
            'annotations': {
                'nginx.ingress.kubernetes.io/proxy-body-size':       '2000m',
                'nginx.ingress.kubernetes.io/proxy-read-timeout':    '600',
                'nginx.ingress.kubernetes.io/proxy-send-timeout':    '600',
                'nginx.ingress.kubernetes.io/proxy-connect-timeout': '600'
            }
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