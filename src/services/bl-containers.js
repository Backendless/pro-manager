import { blDeploymentStatus, blStatefulsetStatus } from './k8s/bl-status'
import { deleteDeploymentAndService, deleteStatefulsetAndService } from './k8s/k8s-delete-service'
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
import { deploymentScale, statefulsetScale } from './k8s/k8s-scale'
import { deploymentRestart, statefulsetRestart } from './k8s/k8s-restart'

class BlContainers {
    bl = {
        server: {
            name: 'bl-server',
            imageName: 'bl-server',
            serviceStatus: () => blDeploymentStatus('bl-server'),
            installService: installArguments => installBlServer(installArguments),
            deleteService: () => deleteDeploymentAndService('bl-server'),
            scale: replicas => deploymentScale('bl-server', replicas),
            restart: () => deploymentRestart('bl-server')
        },
        rtServer: {
            name: 'bl-rt-server',
            imageName: 'bl-rt-server',
            serviceStatus: () => blStatefulsetStatus('bl-rt-server'),
            installService: installArguments => installBlRtServer(installArguments),
            deleteService: () => deleteStatefulsetAndService('bl-rt-server'),
            scale: replicas => statefulsetScale('bl-rt-server', replicas),
            restart: () => statefulsetRestart('bl-rt-server')
        },
        taskman: {
            name: 'bl-taskman',
            imageName: 'bl-server',
            serviceStatus: () => blStatefulsetStatus('bl-taskman'),
            installService: installArguments => installBlTaskman(installArguments),
            deleteService: () => deleteStatefulsetAndService('bl-taskman'),
            scale: replicas => statefulsetScale('bl-taskman', replicas),
            restart: () => statefulsetRestart('bl-taskman')
        },
        hazelcast: {
            name: 'bl-hazelcast-3125',
            imageName: 'bl-hazelcast',
            serviceStatus: () => blStatefulsetStatus('bl-hazelcast-3125'),
            installService: installArguments => installBlHazelcast(installArguments),
            deleteService: () => deleteStatefulsetAndService('bl-hazelcast-3125'),
            scale: replicas => statefulsetScale('bl-hazelcast-3125', replicas),
            restart: () => statefulsetRestart('bl-hazelcast-3125')
        },
        javaCoderunner: {
            name: 'bl-coderunner-java',
            imageName: 'bl-coderunner-java',
            serviceStatus: () => blStatefulsetStatus('bl-coderunner-java'),
            installService: installArguments => installBlJavaCoderunner(installArguments),
            deleteService: () => deleteStatefulsetAndService('bl-coderunner-java'),
            scale: replicas => statefulsetScale('bl-coderunner-java', replicas),
            restart: () => statefulsetRestart('bl-coderunner-java')
        },
        jsCoderunner: {
            name: 'bl-coderunner-js',
            imageName: 'bl-coderunner-js',
            serviceStatus: () => blStatefulsetStatus('bl-coderunner-js'),
            installService: installArguments => installBlJsCoderunner(installArguments),
            deleteService: () => deleteStatefulsetAndService('bl-coderunner-js'),
            scale: replicas => statefulsetScale('bl-coderunner-js', replicas),
            restart: () => statefulsetRestart('bl-coderunner-js')
        },
        console: {
            name: 'bl-web-console',
            imageName: 'bl-web-console',
            serviceStatus: () => blStatefulsetStatus('bl-web-console'),
            installService: installArguments => installBlWebConsole(installArguments),
            deleteService: () => deleteStatefulsetAndService('bl-web-console'),
            scale: replicas => statefulsetScale('bl-web-console', replicas),
            restart: () => statefulsetRestart('bl-web-console')
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
            scale: replicas => statefulsetScale('bl-consul', replicas),
            restart: () => statefulsetRestart('bl-consul'),
            order: 0,
            deleteService: () => deleteStatefulsetAndService('bl-consul')
        },
        mysql: {
            name: 'bl-mysql',
            serviceStatus: () => blStatefulsetStatus('bl-mysql'),
            installService: installArguments => installMysql(installArguments),
            scale: replicas => statefulsetScale('bl-mysql', replicas),
            restart: () => statefulsetRestart('bl-mysql'),
            order: 1,
            deleteService: () => deleteStatefulsetAndService('bl-mysql')
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
            scale: replicas => statefulsetScale('bl-redis', replicas),
            restart: () => statefulsetRestart('bl-redis'),
            order: 2,
            deleteService: () => deleteStatefulsetAndService('bl-redis')
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
            scale: replicas => statefulsetScale('bl-redis-debug', replicas),
            restart: () => statefulsetRestart('bl-redis-debug'),
            order: 3,
            deleteService: () => deleteStatefulsetAndService('bl-redis-debug')
        },
        mongo: {
            name: 'bl-mongo',
            serviceStatus: () => blStatefulsetStatus('bl-mongo'),
            installService: installArguments => installMongo(installArguments),
            scale: replicas => statefulsetScale('bl-mongo', replicas),
            restart: () => statefulsetRestart('bl-mongo'),
            order: 4,
            deleteService: () => deleteStatefulsetAndService('bl-mongo')
        },

    }

    getSortedDependencies() {
        return Object.entries(this.dependencies)
            .sort(([key1, dependency1], [key2, dependency2]) => dependency1.order - dependency2.order)
            .map(([key, dependency]) => dependency)
    }

    findByName(name) {
        for (const containerKey in this.bl) {
            const container = this.bl[containerKey]
            if (container.name === name) {
                return container
            }
        }

        for (const containerKey in this.dependencies) {
            const container = this.dependencies[containerKey]
            if (container.name === name) {
                return container
            }
        }
    }
}

export const blContainers = new BlContainers()