import { blStatefulsetStatus } from './k8s/bl-statefulset-status'
import { blJobStatus } from './k8s/bl-job-status'
import { installConsul } from './install/db/install-consul'
import { installMysql } from './install/db/mysql'
import { initConfigInConsul } from './install/init-config-in-consul'
import { installRedis } from './install/db/install-redis'
import { installMongo } from './install/db/install-mongo'
import { installBlServer } from './install/bl/install-bl-server'
import { installBlTaskman } from './install/bl/install-bl-taskman'
import { installBlHazelcast } from './install/bl/install-bl-hazelcast'

class BlContainers {
    bl = {
        server: {
            name: 'bl-server',
            serviceStatus: () => blStatefulsetStatus('bl-server'),
            installService: installArguments => installBlServer(installArguments),
        },
        rtServer: {
            name: 'bl-rt-server',
            serviceStatus: () => blStatefulsetStatus('bl-rt-server'),
            installService: installArguments => (installArguments)
        },
        taskman: {
            name: 'bl-taskman',
            serviceStatus: () => blStatefulsetStatus('bl-taskman'),
            installService: installArguments => installBlTaskman(installArguments)
        },
        hazelcast: {
            name: 'bl-hazelcast-3125',
            serviceStatus: () => blStatefulsetStatus('bl-hazelcast-3125'),
            installService: installArguments => installBlHazelcast(installArguments)
        },
        javaCoderunner: {
            name: 'bl-coderunner-java',
            serviceStatus: () => blStatefulsetStatus('bl-coderunner-java'),
            installService: installArguments => (installArguments)
        },
        jsCoderunner: {
            name: 'bl-coderunner-js',
            serviceStatus: () => blStatefulsetStatus('bl-coderunner-js'),
            installService: installArguments => (installArguments)
        },
        initConfigValues: {
            name: 'bl-init-config-values',
            serviceStatus: () => blJobStatus('bl-init-config-values'),
            installService: installArguments => initConfigInConsul(installArguments)
        }
    }

    dependencies = {
        consul: {
            name: 'bl-consul',
            serviceStatus: () => blStatefulsetStatus('bl-consul'),
            installService: installArguments => installConsul(installArguments),
            order: 0
        },
        mysql: {
            name: 'bl-mysql',
            serviceStatus: () => blStatefulsetStatus('bl-mysql'),
            installService: installArguments => installMysql(installArguments),
            order: 1
        },
        redis: {
            name: 'bl-redis',
            serviceStatus: () => blStatefulsetStatus('bl-redis'),
            installService: installArguments => installRedis({
                fullMountPath: `${installArguments.mountPath}/bl-redis/data`,
                internalPort: 6379,
                externalPort: 32379,
                name: 'bl-redis'
            }),
            order: 2
        },
        debugRedis: {
            name: 'bl-redis-debug',
            serviceStatus: () => blStatefulsetStatus('bl-redis-debug'),
            installService: installArguments => installRedis({
                fullMountPath: `${installArguments.mountPath}/bl-redis-debug/data`,
                internalPort: 6380,
                externalPort: 32380,
                name: 'bl-redis-debug'
            }),
            order: 3
        },
        mongo: {
            name: 'bl-mongo',
            serviceStatus: () => blStatefulsetStatus('bl-mongo'),
            installService: installArguments => installMongo(installArguments),
            order: 4
        },

    }

    getSortedDependencies() {
        return Object.entries(this.dependencies)
            .sort(([key1, dependency1], [key2, dependency2]) => dependency1.order - dependency2.order)
            .map(([key, dependency]) => dependency)
    }
}

export const blContainers = new BlContainers()