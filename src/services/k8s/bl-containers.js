import { blStatefulsetStatus } from './bl-statefulset-status'
import { blJobStatus } from './bl-job-status'

class BlContainers {
    bl = [
        { name: 'bl-server', serviceStatus: () => blStatefulsetStatus('bl-server') },
        { name: 'bl-rt-server', serviceStatus: () => blStatefulsetStatus('bl-rt-server') },
        { name: 'bl-taskman', serviceStatus: () => blStatefulsetStatus('bl-taskman') },
        { name: 'bl-coderunner-java', serviceStatus: () => blStatefulsetStatus('bl-coderunner-java') },
        { name: 'bl-coderunner-js', serviceStatus: () => blStatefulsetStatus('bl-coderunner-js') },
        { name: 'bl-init-config-values', serviceStatus: () => blJobStatus('bl-init-config-values') }
    ]

    dependencies = [
        { name: 'bl-consul', serviceStatus: () => blStatefulsetStatus('bl-consul') },
        { name: 'bl-mysql', serviceStatus: () => blStatefulsetStatus('bl-mysql') },
        { name: 'bl-redis', serviceStatus: () => blStatefulsetStatus('bl-redis') },
        { name: 'bl-mongo', serviceStatus: () => blStatefulsetStatus('bl-mongo') },
    ]
    // }
}

export const blContainers = new BlContainers()