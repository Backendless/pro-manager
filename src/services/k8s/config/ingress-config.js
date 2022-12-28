class IngressConfig {
    service = {
        'apiVersion': 'networking.k8s.io/v1',
        'kind': 'Ingress',
        'metadata': {
            'name': 'bl-ingress'
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
                },
                {
                    'host': 'develop.backendless.local',
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

export const ingressConfig = new IngressConfig()