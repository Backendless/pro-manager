export class HazelcastConfig {
  workload = {
    'apiVersion': 'apps/v1',
    'kind':       'Deployment',
    'metadata':   {
      'name': 'bl-hazelcast-3125'
    },
    'spec':       {
      'replicas': 1,
      'selector': {
        'matchLabels': {
          'app': 'bl-hazelcast-3125'
        }
      },
      'template': {
        'metadata': {
          'labels': {
            'app': 'bl-hazelcast-3125'
          }
        },
        'spec':     {
          'containers': [
            {
              'name':            'bl-hazelcast-3125',
              'image':           'backendless/bl-hazelcast:',
              'imagePullPolicy': 'IfNotPresent',
              'ports':           [
                {
                  'containerPort': 5701
                },
                {
                  'containerPort': 8080
                }
              ],
              'env':             [
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
                },
                {
                  'name':      'BL_MANAGEMENT_HTTP_PORT',
                  'valueFrom': {
                    'configMapKeyRef': {
                      'key':      'BL_MANAGEMENT_HTTP_PORT',
                      'name':     'bl-env',
                      'optional': false
                    }
                  }
                }
              ]
            }
          ]
        }
      }
    }
  }
  service = {
    'apiVersion': 'v1',
    'kind':       'Service',
    'metadata':   {
      'name': 'bl-hazelcast-3125'
    },
    'spec':       {
      'type':     'LoadBalancer',
      'selector': {
        'app': 'bl-hazelcast-3125'
      },
      'ports':    [
        {
          'name': 'hazelcast',
          'port': 5701
        },
        {
          'name': 'app',
          'port': 8080
        }
      ]
    }
  }
  permissions = {
    'clusterRole':        {
      'apiVersion': 'rbac.authorization.k8s.io/v1',
      'kind':       'ClusterRole',
      'metadata':   {
        'name': 'hazelcast-cluster-role'
      },
      'rules':      [
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
        }
      ]
    },
    'clusterRoleBinding': {
      'apiVersion': 'rbac.authorization.k8s.io/v1',
      'kind':       'ClusterRoleBinding',
      'metadata':   {
        'name': 'hazelcast-cluster-role-binding'
      },
      'roleRef':    {
        'apiGroup': 'rbac.authorization.k8s.io',
        'kind':     'ClusterRole',
        'name':     'hazelcast-cluster-role'
      },
      'subjects':   [
        {
          'kind':      'ServiceAccount',
          'name':      'default',
          'namespace': 'default'
        }
      ]
    }
  }

  hazelcastXml(k8sNamespace) {
    return `<?xml version="1.0" encoding="UTF-8"?>

<hazelcast xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:schemaLocation="http://www.hazelcast.com/schema/config
                               http://www.hazelcast.com/schema/config/hazelcast-config-5.3.xsd"
           xmlns="http://www.hazelcast.com/schema/config">

    <properties>
        <property name="hazelcast.logging.type">slf4j</property>
        <property name="hazelcast.http.healthcheck.enabled">true</property>
        <property name="hazelcast.rest.enabled">true</property>
        <property name="hazelcast.diagnostics.enabled">true</property>
    </properties>

    <cluster-name>backendless</cluster-name>

    <instance-name>hz-backendless</instance-name>

    <management-center scripting-enabled="false"/>
    <network>
        <join>
            <multicast enabled="false"/>
            <kubernetes enabled="true">
                <namespace>${k8sNamespace}</namespace>
                <service-name>bl-hazelcast-3125</service-name>
<!--                <service-label-name>bl-hazelcast-LABEL-NAME</service-label-name>-->
<!--                <service-label-value>bl-hazelcast-LABEL-VALUE</service-label-value>-->
            </kubernetes>
        </join>
    </network>

    <partition-group enabled="false"/>

    <executor-service name="default">
        <pool-size>16</pool-size>
        <queue-capacity>0</queue-capacity>
    </executor-service>

    <queue name="default">
        <max-size>0</max-size>
        <backup-count>1</backup-count>
        <async-backup-count>0</async-backup-count>
        <empty-queue-ttl>-1</empty-queue-ttl>
    </queue>

    <map name="default">
        <in-memory-format>OBJECT</in-memory-format>
        <backup-count>1</backup-count>
        <read-backup-data>false</read-backup-data>
        <async-backup-count>0</async-backup-count>
        <time-to-live-seconds>0</time-to-live-seconds>
        <max-idle-seconds>0</max-idle-seconds>
        <eviction eviction-policy="NONE" max-size-policy="FREE_HEAP_PERCENTAGE" size="25"/>
        <merge-policy>com.hazelcast.spi.merge.PassThroughMergePolicy</merge-policy>
    </map>

    <multimap name="default">
        <backup-count>1</backup-count>
        <value-collection-type>SET</value-collection-type>
    </multimap>

    <list name="default">
        <backup-count>1</backup-count>
    </list>

    <set name="default">
        <backup-count>1</backup-count>
    </set>

    <cp-subsystem>
        <semaphores>
            <semaphore>
                <name>default</name>
                <initial-permits>0</initial-permits>
                <jdk-compatible>true</jdk-compatible>
            </semaphore>
        </semaphores>
        <cp-member-count>0</cp-member-count> <!--to enable set minimum 3 nodes-->
    </cp-subsystem>

    <serialization>
        <portable-version>0</portable-version>
    </serialization>

<!--    <services enable-defaults="true"/>-->
</hazelcast>`
  }

  hazelcastClientXml(k8sNamespace) {
    return `<?xml version="1.0" encoding="UTF-8"?>

<hazelcast-client xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xsi:schemaLocation="http://www.hazelcast.com/schema/client-config
                               http://www.hazelcast.com/schema/client-config/hazelcast-client-config-5.3.xsd"
                  xmlns="http://www.hazelcast.com/schema/client-config">

    <properties>
        <property name="hazelcast.logging.type">slf4j</property>
        <property name="hazelcast.client.statistics.enabled">false</property>
    </properties>

    <cluster-name>backendless</cluster-name>

    <instance-name>hz-client</instance-name>

    <connection-strategy reconnect-mode="ASYNC">
        <connection-retry>
            <initial-backoff-millis>3000</initial-backoff-millis>
            <max-backoff-millis>60000</max-backoff-millis>
            <multiplier>1.2</multiplier>
            <!-- 60*60*1000 = 3600000 = one hour -->
            <cluster-connect-timeout-millis>3600000</cluster-connect-timeout-millis>
        </connection-retry>
    </connection-strategy>

    <network>
        <icmp-ping enabled="false"/>
        <kubernetes enabled="true">
            <namespace>${k8sNamespace}</namespace>
            <service-name>bl-hazelcast-3125</service-name>
<!--            <service-label-name>bl-hazelcast-LABEL-NAME</service-label-name>-->
<!--            <service-label-value>bl-hazelcast-LABEL-VALUE</service-label-value>-->
        </kubernetes>
    </network>

    <near-cache name="*">
        <in-memory-format>OBJECT</in-memory-format>
    </near-cache>
</hazelcast-client>`
  }
}
