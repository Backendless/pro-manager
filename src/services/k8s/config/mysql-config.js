export class MysqlConfig {
    workload = {
        'apiVersion': 'apps/v1',
        'kind':       'StatefulSet',
        'metadata':   {
            'annotations': {
                'name': 'bl-mysql'
            },
            'name':        'bl-mysql'
        },
        'spec':       {
            'progressDeadlineSeconds': 60,
            'replicas':                1,
            'selector':                {
                'matchLabels': {
                    'app': 'bl-mysql'
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
                        'app': 'bl-mysql'
                    }
                },
                'spec':     {
                    'containers':    [
                        {
                            'args':            [],
                            'env':             [
                                {
                                    'name':  'MYSQL_ROOT_PASSWORD',
                                    'value': 'rootpassword'
                                }, {
                                    'name':  'MYSQL_ROOT_HOST',
                                    'value': '%'
                                }
                            ],
                            'image':           'mysql/mysql-server:8.0',
                            'imagePullPolicy': 'IfNotPresent',
                            'name':            'bl-mysql',
                            'ports':           [
                                {
                                    'containerPort': 3306,
                                    'name':          'bl-mysql',
                                    'protocol':      'TCP'
                                }
                            ],
                            'volumeMounts':    [
                                {
                                    'mountPath': '/var/lib/mysql',
                                    'name':      'data'
                                },
                                {
                                    'mountPath': '/var/log/mysql',
                                    'name':      'logs'
                                }
                            ]
                        }
                    ],
                    'restartPolicy': 'Always',
                    'volumes':       []
                }
            }
        }
    }

    service = {
        'apiVersion': 'v1',
        'kind':       'Service',
        'metadata':   {
            'name':   'bl-mysql',
            'labels': {
                'app': 'bl-mysql'
            }
        },
        'spec':       {
            'type':     'NodePort',
            'ports':    [
                {
                    'port':       3306,
                    'targetPort': 3306,
                    'name':       'bl-mysql',
                    'nodePort':   32006
                }
            ],
            'selector': {
                'app': 'bl-mysql'
            }
        }
    }

    mysqldConf = `[mysqld]
pid-file        = /var/run/mysqld/mysqld.pid
socket          = /var/run/mysqld/mysqld.sock
datadir         = /var/lib/mysql
log-error       = /var/log/mysql/mysqld.log

# By default we only accept connections from localhost
bind-address    = 0.0.0.0
# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0

#sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
sql-mode=""

collation-server = utf8mb4_unicode_520_ci
character-set-server = utf8mb4
init-connect='SET NAMES utf8mb4'
    `
}