import { getIngressLabel } from './index'

export class IngressRtConfig {
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
                    'name': 'bl-rt-server',
                    'port': {
                        'number': 5000
                    }
                }
            },
            'ingressClassName': 'nginx',
            'rules': [
                {
                    'host': 'rt.backendless.local',
                    'http': {
                        'paths': [
                            {
                                'path': '/',
                                'pathType': 'Prefix',
                                'backend': {
                                    'service': {
                                        'name': 'bl-rt-console',
                                        'port': {
                                            'number': 5000
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