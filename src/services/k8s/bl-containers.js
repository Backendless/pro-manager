import { blStatefulsetStatus } from './bl-statefulset-status'
import { blJobStatus } from './bl-job-status'

class BlContainers {
    bl = {
        server: {name: 'bl-server', serviceStatus: () => blStatefulsetStatus('bl-server')},
        rtServer: {name: 'bl-rt-server', serviceStatus: () => blStatefulsetStatus('bl-rt-server')},
        taskman: {name: 'bl-taskman', serviceStatus: () => blStatefulsetStatus('bl-taskman')},
        javaCoderunner: {name: 'bl-coderunner-java', serviceStatus: () => blStatefulsetStatus('bl-coderunner-java')},
        jsCoderunner: {name: 'bl-coderunner-js', serviceStatus: () => blStatefulsetStatus('bl-coderunner-js')},
        initConfigValues: {name: 'bl-init-config-values', serviceStatus: () => blJobStatus('bl-init-config-values')}
    }

    dependencies = {
        consul: {name: 'bl-consul', serviceStatus: () => blStatefulsetStatus('bl-consul')},
        mysql: {name: 'bl-mysql', serviceStatus: () => blStatefulsetStatus('bl-mysql')},
        redis: {name: 'bl-redis', serviceStatus: () => blStatefulsetStatus('bl-redis')},
        mongo: {name: 'bl-mongo', serviceStatus: () => blStatefulsetStatus('bl-mongo')},

    }
}

export const blContainers = new BlContainers()