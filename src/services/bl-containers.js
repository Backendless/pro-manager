import {blStatefulsetStatus} from './k8s/bl-statefulset-status'
import {blJobStatus} from './k8s/bl-job-status'
import {installConsul} from './install/db/install-consul'
import {installMysql} from './install/db/mysql'
import {initConfigInConsul} from './install/init-config-in-consul'
import {installRedis} from "./install/db/install-redis";

class BlContainers {
    bl = {
        server: {
            name: 'bl-server',
            serviceStatus: () => blStatefulsetStatus('bl-server'),
            installService: installArguments => (installArguments)
        },
        rtServer: {
            name: 'bl-rt-server',
            serviceStatus: () => blStatefulsetStatus('bl-rt-server'),
            installService: installArguments => (installArguments)
        },
        taskman: {
            name: 'bl-taskman',
            serviceStatus: () => blStatefulsetStatus('bl-taskman'),
            installService: installArguments => (installArguments)
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
            installService: installArguments => installConsul(installArguments)
        },
        mysql: {
            name: 'bl-mysql',
            serviceStatus: () => blStatefulsetStatus('bl-mysql'),
            installService: installArguments => installMysql(installArguments)
        },
        redis: {
            name: 'bl-redis',
            serviceStatus: () => blStatefulsetStatus('bl-redis'),
            installService: installArguments => installRedis({
                fullMountPath: `${installArguments.mountPath}/bl-redis/data`,
                internalPort: 6379,
                externalPort: 32379,
                name: 'bl-redis'
            })
        },
        debugRedis: {
            name: 'bl-redis-debug',
            serviceStatus: () => blStatefulsetStatus('bl-redis'),
            installService: installArguments => installRedis({
                fullMountPath: `${installArguments.mountPath}/bl-redis-debug/data`,
                internalPort: 6380,
                externalPort: 32380,
                name: 'bl-redis-debug'
            })
        },
        mongo: {
            name: 'bl-mongo',
            serviceStatus: () => blStatefulsetStatus('bl-mongo'),
            installService: installArguments => (installArguments)
        },

    }
}

export const blContainers = new BlContainers()