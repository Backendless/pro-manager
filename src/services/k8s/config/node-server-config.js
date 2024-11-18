export class NodeServerConfig {
  workload = {
    'apiVersion': 'apps/v1',
    'kind': 'Deployment',
    'metadata': {
      'annotations': {
        'name': 'bl-node-server'
      },
      'name': 'bl-node-server'
    },
    'spec': {
      'progressDeadlineSeconds': 60,
      'replicas': 1,
      'selector': {
        'matchLabels': {
          'app': 'bl-node-server'
        }
      },
      'strategy': {
        'rollingUpdate': {
          'maxSurge': 1,
          'maxUnavailable': 0
        },
        'type': 'RollingUpdate'
      },
      'template': {
        'metadata': {
          'labels': {
            'app': 'bl-node-server'
          }
        },
        'spec': {
          'containers': [
            {
              'args': [
                'play'
              ],
              'env': [
                {
                  'name': 'BL_CONSUL_PORT',
                  'valueFrom': {
                    'configMapKeyRef': {
                      'key': 'BL_CONSUL_PORT',
                      'name': 'bl-env',
                      'optional': false
                    }
                  }
                },
                {
                  'name': 'BL_HOST_IP',
                  'valueFrom': {
                    'fieldRef': {
                      'fieldPath': 'status.hostIP'
                    }
                  }
                },
                {
                  'name': 'BL_CONSUL_HOST',
                  'valueFrom': {
                    'configMapKeyRef': {
                      'key': 'BL_CONSUL_HOST',
                      'name': 'bl-env',
                      'optional': false
                    }
                  }
                },
                {
                  'name': 'BL_CONFIG_PROVIDER',
                  'valueFrom': {
                    'configMapKeyRef': {
                      'key': 'BL_CONFIG_PROVIDER',
                      'name': 'bl-env',
                      'optional': false
                    }
                  }
                },
                {
                  'name': 'BL_CONTAINER_IP',
                  'valueFrom': {
                    'fieldRef': {
                      'apiVersion': 'v1',
                      'fieldPath': 'status.podIP'
                    }
                  }
                }
              ],
              'image': 'backendless/bl-node-server',
              'imagePullPolicy': 'IfNotPresent',
              'name': 'bl-node-server',
              'startupProbe': {
                'failureThreshold': 80,
                'periodSeconds': 10,
                'httpGet': {
                  'path': '/health',
                  'port': 4000,
                  'scheme': 'HTTP'
                }
              },
              'livenessProbe': {
                'failureThreshold': 6,
                'httpGet': {
                  'path': '/health',
                  'port': 4000,
                  'scheme': 'HTTP'
                },
                'initialDelaySeconds': 60,
                'periodSeconds': 2,
                'successThreshold': 1,
                'timeoutSeconds': 10
              },
              'readinessProbe': {
                'failureThreshold': 60,
                'httpGet': {
                  'path': '/health',
                  'port': 4000,
                  'scheme': 'HTTP'
                },
                'initialDelaySeconds': 10,
                'periodSeconds': 1,
                'successThreshold': 2,
                'timeoutSeconds': 1
              },
              'ports': [
                {
                  'containerPort': 4000,
                  'name': 'bl-node-server',
                  'protocol': 'TCP'
                }
              ],
              'volumeMounts': [
                {
                  'mountPath': '/opt/backendless/repo',
                  'name': 'repo'
                },
                {
                  'mountPath': '/opt/backendless/logs',
                  'name': 'logs'
                }
              ]
            }
          ],
          'restartPolicy': 'Always',
          'volumes': [

          ]
        }
      }
    }
  }
  service = {
    'apiVersion': 'v1',
    'kind': 'Service',
    'metadata': {
      'name': 'bl-node-server',
      'labels': {
        'app': 'bl-node-server'
      }
    },
    'spec': {
      'type': 'ClusterIP',
      'ports': [
        {
          'port': 4000,
          'targetPort': 4000,
          'name': 'bl-node-server',
        }
      ],
      'selector': {
        'app': 'bl-node-server'
      }
    }
  }
}
