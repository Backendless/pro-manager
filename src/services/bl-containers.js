import { blStatefulsetStatus } from './k8s/bl-statefulset-status'
import { deleteService } from './k8s/k8s-delete-service'
import { blJobStatus } from './k8s/bl-job-status'
import { installConsul } from './install/db/install-consul'
import { installMysql } from './install/db/mysql'
import { initConfigInConsul } from './install/init-config-in-consul'
import { installRedis } from './install/db/install-redis'
import { installMongo } from './install/db/install-mongo'
import { installBlServer } from './install/bl/install-bl-server'
import { installBlTaskman } from './install/bl/install-bl-taskman'
import { installBlHazelcast } from './install/bl/install-bl-hazelcast'
import { installBlJavaCoderunner } from './install/bl/install-bl-java-coderunner'
import { installBlJsCoderunner } from './install/bl/install-bl-js-coderunner'
import { installBlWebConsole } from './install/bl/install-bl-web-console'
import { installBlRtServer } from './install/bl/install-bl-rt-server'
import { deleteJob } from './k8s/k8s-delete-job'

class BlContainers {
    bl = {
        server: {
            name: 'bl-server',
            serviceStatus: () => blStatefulsetStatus('bl-server'),
            installService: installArguments => installBlServer(installArguments),
            deleteService: () => deleteService('bl-server')
        },
        rtServer: {
            name: 'bl-rt-server',
            serviceStatus: () => blStatefulsetStatus('bl-rt-server'),
            installService: installArguments => installBlRtServer(installArguments),
            deleteService: () => deleteService('bl-rt-server')
        },
        taskman: {
            name: 'bl-taskman',
            serviceStatus: () => blStatefulsetStatus('bl-taskman'),
            installService: installArguments => installBlTaskman(installArguments),
            deleteService: () => deleteService('bl-taskman')
        },
        hazelcast: {
            name: 'bl-hazelcast-3125',
            serviceStatus: () => blStatefulsetStatus('bl-hazelcast-3125'),
            installService: installArguments => installBlHazelcast(installArguments),
            deleteService: () => deleteService('bl-hazelcast-3125')
        },
        javaCoderunner: {
            name: 'bl-coderunner-java',
            serviceStatus: () => blStatefulsetStatus('bl-coderunner-java'),
            installService: installArguments => installBlJavaCoderunner(installArguments),
            deleteService: () => deleteService('bl-coderunner-java')
        },
        jsCoderunner: {
            name: 'bl-coderunner-js',
            serviceStatus: () => blStatefulsetStatus('bl-coderunner-js'),
            installService: installArguments => installBlJsCoderunner(installArguments),
            deleteService: () => deleteService('bl-coderunner-js')
        },
        console: {
            name: 'bl-web-console',
            serviceStatus: () => blStatefulsetStatus('bl-web-console'),
            installService: installArguments => installBlWebConsole(installArguments),
            deleteService: () => deleteService('bl-web-console')
        },
        initConfigValues: {
            name: 'bl-init-config-values',
            serviceStatus: () => blJobStatus('bl-init-config-values'),
            installService: installArguments => initConfigInConsul(installArguments),
            deleteService: () => deleteJob('bl-init-config-values')
        }
    }

    dependencies = {
        consul: {
            name: 'bl-consul',
            serviceStatus: () => blStatefulsetStatus('bl-consul'),
            installService: installArguments => installConsul(installArguments),
            order: 0,
            deleteService: () => deleteService('bl-consul')
        },
        mysql: {
            name: 'bl-mysql',
            serviceStatus: () => blStatefulsetStatus('bl-mysql'),
            installService: installArguments => installMysql(installArguments),
            order: 1,
            deleteService: () => deleteService('bl-mysql')
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
            order: 2,
            deleteService: () => deleteService('bl-redis')
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
            order: 3,
            deleteService: () => deleteService('bl-redis-debug')
        },
        mongo: {
            name: 'bl-mongo',
            serviceStatus: () => blStatefulsetStatus('bl-mongo'),
            installService: installArguments => installMongo(installArguments),
            order: 4,
            deleteService: () => deleteService('bl-mongo')
        },

    }

    getSortedDependencies() {
        return Object.entries(this.dependencies)
            .sort(([key1, dependency1], [key2, dependency2]) => dependency1.order - dependency2.order)
            .map(([key, dependency]) => dependency)
    }
}

export const blContainers = new BlContainers()