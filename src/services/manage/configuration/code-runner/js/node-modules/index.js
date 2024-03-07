import { k8sConfig } from "../../../../../../config/k8s-config"
import { k8sAppsV1Api } from "../../../../../k8s/k8s"

class NodeModulesConfigurationService {

    async getNodeModules() {
        const nodeModules = []
        const deploymentName = 'bl-coderunner-js'
        const namespace = await k8sConfig.getNamespace()
        const deployment = await k8sAppsV1Api.readNamespacedDeployment(deploymentName, namespace)
        const containers = deployment.body.spec.template.spec.containers

        containers.forEach(container => {
            container.env
                .filter(envItem => envItem.name === 'BL_NODE_MODULES')
                .forEach(envItem => {
                    const envValue = envItem.value
                    if (envValue) {
                        envValue.split(/\s+/).forEach(envItemNodeModule => {
                            const [name, version] = envItemNodeModule.split('@^')
                            nodeModules.push({ name, version })
                        })
                    }
                })
        })

        return nodeModules
    }

    async updateNodeModules(newNodeModules) {
        const deploymentName = 'bl-coderunner-js'
        const namespace = await k8sConfig.getNamespace()
        const deployment = await k8sAppsV1Api.readNamespacedDeployment(deploymentName, namespace)
        const containers = deployment.body.spec.template.spec.containers

        if (newNodeModules && newNodeModules.length > 0) {
            containers.forEach((container) => {
                container.env.push({
                    name: 'BL_NODE_MODULES',
                    value: newNodeModules.map(({ name, version }) => `${name}@^${version}`).join(' ')
                })
            })
        } else {
            containers.forEach((container) => {
                container.env = container.env.filter(envItem => envItem.name !== 'BL_NODE_MODULES')
            })
        }

        await k8sAppsV1Api.replaceNamespacedDeployment(deploymentName, namespace, deployment.body)
    }
}

export const nodeModulesConfigurationService = new NodeModulesConfigurationService()