export class IngressHazelcastClusterRole {
    clusterRole = {
        'apiVersion': 'rbac.authorization.k8s.io/v1',
        'kind':       'ClusterRole',
        'metadata':   {
            'name':   'bl-ingress-hazelcast-cluster-role',
            'labels': {
                'app.kubernetes.io/instance': 'ingress-nginx',
                'app.kubernetes.io/name':     'ingress-nginx',
                'app.kubernetes.io/part-of':  'ingress-nginx',
                'app.kubernetes.io/version':  '1.5.1'
            }
        },

        'rules': [
            {
                'apiGroups': [
                    ''
                ],
                'resources': [
                    'endpoints',
                    'pods',
                    'nodes',
                    'services'
                ],
                'verbs':     [
                    'get',
                    'list'
                ]
            },
            {
                'verbs':     [
                    'get',
                    'list',
                    'watch',
                    'create',
                    'patch',
                    'update'
                ],
                'apiGroups': [
                    'networking.k8s.io'
                ],
                'resources': [
                    'ingresses'
                ]
            },
            {
                'verbs':     [
                    'update'
                ],
                'apiGroups': [
                    'networking.k8s.io'
                ],
                'resources': [
                    'ingresses/status'
                ]
            },
            {
                'verbs':     [
                    'get',
                    'list',
                    'watch'
                ],
                'apiGroups': [
                    'networking.k8s.io'
                ],
                'resources': [
                    'ingressclasses'
                ]
            }
        ]
    }
    clusterRoleBinding = {
        'apiVersion': 'rbac.authorization.k8s.io/v1',
        'kind':       'ClusterRoleBinding',
        'metadata':   {
            'name': 'bl-ingress-hazelcast-cluster-role-binding'
        },
        'subjects':   [
            {
                'kind':      'ServiceAccount',
                'name':      'bl-ingress-hazelcast-service-account',
                'namespace': 'default'
            }
        ],
        'roleRef':    {
            'kind':     'ClusterRole',
            'name':     'bl-ingress-hazelcast-cluster-role',
            'apiGroup': 'rbac.authorization.k8s.io'
        }
    }
    serviceAccount = {
        'apiVersion': 'v1',
        'kind':       'ServiceAccount',
        'metadata':   {
            'name': 'bl-ingress-hazelcast-service-account'
        }
    }
}