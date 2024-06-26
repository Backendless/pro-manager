export class UpgradeConfig {
  job = {
    'apiVersion': 'batch/v1',
    'kind':       'Job',
    'metadata':   {
      'name': ''
    },
    'spec':       {
      'backoffLimit': 1,
      'completions':  1,
      'parallelism':  1,
      'template':     {
        'spec': {
          'containers':    [
            {
              'env':             [
                {
                  'name':  'SKIP_VERSION_CHECK',
                  'value': 'false'
                },
                {
                  'name':  'applicationsToBeUpdatedFirst',
                  'value': 'main_application'
                },
                {
                  'name':  'dbRepeatedUpgrade',
                  'value': 'false'
                },
                {
                  'name':  'forceUpgrade',
                  'value': 'false'
                },
                {
                  'name':  'updateDBThreadNumber',
                  'value': '2'
                },
                {
                  'name':      'BL_CONFIG_PROVIDER',
                  'valueFrom': {
                    'configMapKeyRef': {
                      'key':      'BL_CONFIG_PROVIDER',
                      'name':     'bl-env',
                      'optional': false
                    }
                  }
                },
                {
                  'name':      'BL_CONSUL_HOST',
                  'valueFrom': {
                    'configMapKeyRef': {
                      'key':      'BL_CONSUL_HOST',
                      'name':     'bl-env',
                      'optional': false
                    }
                  }
                },
                {
                  'name':      'BL_CONSUL_PORT',
                  'valueFrom': {
                    'configMapKeyRef': {
                      'key':      'BL_CONSUL_PORT',
                      'name':     'bl-env',
                      'optional': false
                    }
                  }
                },
                {
                  'name':      'BL_HOST_IP',
                  'valueFrom': {
                    'fieldRef': {
                      'fieldPath': 'status.hostIP'
                    }
                  }
                }
              ],
              'image':           '',
              'imagePullPolicy': 'IfNotPresent',
              'name':            'bl-upgrade',
              'resources':       {},
              'securityContext': {
                'allowPrivilegeEscalation': false,
                'capabilities':             {},
                'privileged':               false,
                'readOnlyRootFilesystem':   false,
                'runAsNonRoot':             false
              },
              'volumeMounts':    [
                {
                  'mountPath': '/opt/backendless/logs',
                  'name':      'logs'
                }
              ]
            }
          ],
          'restartPolicy': 'Never',
          'volumes':       [

          ]
        }
      }
    }
  }
}
