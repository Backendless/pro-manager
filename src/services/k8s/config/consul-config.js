export class ConsulConfig {
  workload = {
    'apiVersion': 'apps/v1',
    'kind':       'StatefulSet',
    'metadata':   {
      'annotations': {
        'name': 'bl-consul'
      },
      'name':        'bl-consul'
    },
    'spec':       {
      'progressDeadlineSeconds': 60,
      'replicas':                1,
      'selector':                {
        'matchLabels': {
          'app': 'bl-consul'
        }
      },
      'strategy':                {
        'rollingUpdate': {
          'maxSurge':       1,
          'maxUnavailable': 0
        },
        'type':          'RollingUpdate'
      },
      'template':                {
        'metadata': {
          'labels': {
            'app': 'bl-consul'
          }
        },
        'spec':     {
          'containers':    [
            {
              'args':            [
                'agent',
                '-server',
                '-bootstrap-expect',
                '1',
                '-ui',
                '-client',
                '0.0.0.0',
                '-data-dir=/consul/data',
                '-disable-host-node-id=true'
              ],
              'image':           'consul:1.1.0',
              'imagePullPolicy': 'IfNotPresent',
              'name':            'bl-consul',
              'ports':           [
                {
                  'containerPort': 8500,
                  'name':          'bl-consul',
                  'protocol':      'TCP'
                }
              ],
              'volumeMounts':    [
                {
                  'mountPath': '/consul/data',
                  'name':      'consul-data'
                }
              ]
            }
          ],
          'restartPolicy': 'Always',
          'volumes':       [

          ]
        }
      }
    }
  }

  service = {
    'apiVersion': 'v1',
    'kind':       'Service',
    'metadata':   {
      'name':   'bl-consul',
      'labels': {
        'app': 'bl-consul'
      }
    },
    'spec':       {
      'type':     'NodePort',
      'ports':    [
        {
          'port':       8500,
          'targetPort': 8500,
          'name':       'bl-consul',
          'nodePort':   32600
        }
      ],
      'selector': {
        'app': 'bl-consul'
      }
    }
  }
}