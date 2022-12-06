import { describeK8sConfiguration } from './describe-k8s-configuration'
import { k8sConfig } from '../../../../config/k8s-config'

class K8sConfigurationService {

    async get() {
        const namespace = await k8sConfig.getNamespace()
        const configFile = await k8sConfig.getConfigFile()

        const configDescription = describeK8sConfiguration()

        const config = {}
        config[configDescription.configFile.name] = configFile
        config[configDescription.namespace.name] = namespace

        return config
    }

    async saveConfigAndRestart({ config, shouldRestart }) {
        const configDescription = describeK8sConfiguration()
        const configFile = config[configDescription.configFile.name]
        const namespace = config[configDescription.namespace.name]

        await k8sConfig.setConfigFile(configFile)
        await k8sConfig.setNamespace(namespace)
    }


    async describeConfiguration() {
        return Object.entries(describeK8sConfiguration()).map(([key, value]) => value)
    }
}

export const k8sConfigurationService = new K8sConfigurationService()