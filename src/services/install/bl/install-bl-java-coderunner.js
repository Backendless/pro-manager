import { k8sAppsV1Api } from '../../k8s/k8s'
import { installStatus } from '../install-status'
import { readFileContent } from '../../../utils/fs'
import path from 'path'
import { k8sConfig } from '../../../config/k8s-config'

export async function installBlJavaCoderunner({ mountPath, version }) {
    const blK8sConfig = JSON.parse(await readFileContent(path.resolve( __dirname, '../../k8s/config/java-coderunner.json')))
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

    installStatus.info('creating deployment for bl-coderunner-java')
    return await k8sAppsV1Api.createNamespacedDeployment(await k8sConfig.getNamespace(), workload)
}
