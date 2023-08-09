import { installStatus } from '../../install-status'
import { replaceConfigMap } from '../../../k8s/k8s-config-map'

const fileNames = require('./mysql-file-names.json')

export async function createMysqlConfigMap(version, mysqlConfig) {
    installStatus.info(`initializing config map for mysql for backendless version ${version}`)
    const configMap = {}

    installStatus.info(`downloading file ${fileNames.conf}`)
    configMap[fileNames.conf] = mysqlConfig.mysqldConf

    installStatus.info('creating map in k8s')
    await replaceConfigMap(fileNames.mysqlConfigMapName, configMap)
}