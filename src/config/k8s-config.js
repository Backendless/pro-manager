import { BaseConfig } from './base-config'
import { K8sConfigError } from '../error/config/k8s-config-error'
import { isWin } from '../utils/os'
import { Logger } from '../logger'

const _namespaceKey = '/namespace'
const _configFileKey = '/configFile'
const logger = Logger('k8s-config')

class K8sConfig {
    _baseConfig = new BaseConfig('k8s.json')

    async getNamespace() {
        return await this._baseConfig.get(_namespaceKey)
    }

    async setNamespace(namespace) {
        await this._baseConfig.set(_namespaceKey, namespace)
    }

    getConfigFile(){
        const configPathFromENV = this._getConfigPathFromEnv()
        logger.verbose(`config file path from env is '${configPathFromENV}'`)
        if(configPathFromENV != null){
            return configPathFromENV
        }

        const configPathFromFile = this._baseConfig.getSync(_configFileKey)
        logger.verbose(`config file path from file is '${configPathFromFile}'`)

        if(configPathFromFile != null) {
            return configPathFromFile
        }

        const configPathFromOsHome = this._getConfigPathFromOsHome()
        logger.verbose(`config file path from OS home is '${configPathFromOsHome}'`)
        return configPathFromOsHome

    }

    async setConfigFile(path){
        if(this._getConfigPathFromEnv()){
            throw new K8sConfigError.ConfigFilePathInEnvError()
        }
        await this._baseConfig.set(_configFileKey, path)
    }

    _getConfigPathFromEnv(){
        return process.env.KUBECONFIG
    }

    _getConfigPathFromOsHome(){
        if(isWin()){
            return `${process.env.HOMEDRIVE}${process.env.HOMEPATH}\\.kube\\config`
        }else {
            return `${process.env.HOME}/.kube/config`
        }
    }
}

export const k8sConfig = new K8sConfig()