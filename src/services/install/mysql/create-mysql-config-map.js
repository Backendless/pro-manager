import { installStatus } from '../install-status'
import { replaceConfigMap } from '../../k8s/k8s-config-map'

const axios = require('axios')
const fileNames = require('./mysql-file-names.json')

export async function createMysqlConfigMap(version) {
    installStatus.info(`initializing config map for mysql for backendless version ${version}`)
    const configMap = {}
    for (const [key, fileName] of Object.entries(fileNames.init)) {
        installStatus.info(`downloading file ${fileName}`)
        configMap[fileName] = await downloadFile(version, `init/${fileName}`)
    }

    installStatus.info(`downloading file ${fileNames.conf}`)
    configMap[fileNames.conf] = await downloadFile(version, `mysql.conf.d/${fileNames.conf}`)

    installStatus.info('creating map in k8s')
    await replaceConfigMap(fileNames.mysqlConfigMapName, configMap)
}

async function downloadFile(version, name) {
    return (await axios.get(`https://raw.githubusercontent.com/Backendless/BackendlessPro/release_${version}/scripts/mounts/mysql/${name}`)).data

}