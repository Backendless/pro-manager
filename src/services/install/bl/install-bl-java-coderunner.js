import {k8sAppsV1Api} from '../../k8s/k8s'
import config from '../../../../config/config.json'
import blK8sConfig from '../../k8s/config/java-coderunner.json'
import {installStatus} from '../install-status'

export async function installBlJavaCoderunner({ mountPath, version }) {
    installStatus.info('installing bl-coderunner-java...')
    const workload = blK8sConfig.workload
    workload.spec.template.spec.containers[0].image=`backendless/bl-coderunner-java:${version}`
    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/repo`,
            type: 'DirectoryOrCreate'
        },
        name: 'repo'
    })

    workload.spec.template.spec.volumes.push({
        hostPath: {
            path: `${mountPath}/logs/bl-coderunner-java/`,
            type: 'DirectoryOrCreate'
        },
        name: 'logs'
    })

    installStatus.info('creating statefulset for bl-coderunner-java')
    return await k8sAppsV1Api.createNamespacedStatefulSet(config.k8s.namespace, workload)
}
