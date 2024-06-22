import { deploymentStatus } from './k8s/k8s-status'

export async function getMountPathFromDeployment({
                                                     workloadName,
                                                     volumeName
                                                 }) {
    const k8sStatus = await deploymentStatus(workloadName, true)
    const mounts = k8sStatus.body.spec.template.spec.volumes

    for (const mount of mounts) {
        if (mount.name === volumeName) {
            return mount.hostPath.path
        }
    }

    return null
}