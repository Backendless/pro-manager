export class ServerConfig {
  workload = {
    'apiVersion': 'apps/v1',
    'kind': 'Deployment',
    'metadata': {
      'annotations': {
        'name': 'bl-server'
      },
      'name': 'bl-server'
    },
    'spec': {
      'progressDeadlineSeconds': 60,
      'replicas': 1,
      'selector': {
        'matchLabels': {
          'app': 'bl-server'
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
            'app': 'bl-server'
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
                  'name': 'JAVA_OPTS',
                  'value': '-XX:MetaspaceSize=512m -Xms4096m -Xmx8192m -XX:+UseG1GC -XX:+UseStringDeduplication -XX:StringDeduplicationAgeThreshold=3'
                },
                {
                  'name': 'LANG',
                  'value': 'en_US.UTF-8'
                },
                {
                  'name': 'LC_ALL',
                  'value': 'en_US.UTF-8'
                },
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
                  'name': 'BL_MANAGEMENT_HTTP_PORT',
                  'valueFrom': {
                    'configMapKeyRef': {
                      'key': 'BL_MANAGEMENT_HTTP_PORT',
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
              'image': 'backendless/bl-server',
              'imagePullPolicy': 'IfNotPresent',
              'name': 'bl-server',
              'startupProbe': {
                'failureThreshold': 80,
                'periodSeconds': 10,
                'httpGet': {
                  'path': '/',
                  'port': 9000,
                  'scheme': 'HTTP'
                }
              },
              'livenessProbe': {
                'failureThreshold': 6,
                'httpGet': {
                  'path': '/',
                  'port': 9000,
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
                  'path': '/',
                  'port': 9000,
                  'scheme': 'HTTP'
                },
                'initialDelaySeconds': 10,
                'periodSeconds': 1,
                'successThreshold': 2,
                'timeoutSeconds': 1
              },
              'ports': [
                {
                  'containerPort': 9000,
                  'name': 'bl-server',
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
      'name': 'bl-server',
      'labels': {
        'app': 'bl-server'
      }
    },
    'spec': {
      'type': 'NodePort',
      'ports': [
        {
          'port': 9000,
          'targetPort': 9000,
          'name': 'bl-server',
          'nodePort': 32300
        }
      ],
      'selector': {
        'app': 'bl-server'
      }
    }
  }
}
