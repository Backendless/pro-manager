import { createMysqlConfigMap } from './create-mysql-config-map'
import { installStatus } from '../../install-status'
import { k8sAppsV1Api, k8sCoreV1Api } from '../../../k8s/k8s'
import fileNames from './mysql-file-names.json'
import { k8sConfig } from '../../../../config/k8s-config'
import { MysqlConfig } from '../../../k8s/config/mysql-config'
import fse from 'fs-extra'
import { Logger } from '../../../../logger'
import fs from 'fs'

const logger = Logger('mysql-install')

export async function installMysql({ version, mountPath }) {
    const mysqlK8sConfig = new MysqlConfig()
    installStatus.info('installing mysql...')
    await createMysqlConfigMap(version, mysqlK8sConfig)
    installStatus.info('created config map')

    const workload = mysqlK8sConfig.workload
    const containerMounts = workload.spec.template.spec.containers[0].volumeMounts
    const configMapVolumes = []
    const volumes = workload.spec.template.spec.volumes
    volumes.push({
        configMap: {
            items: configMapVolumes,
            name: fileNames.mysqlConfigMapName,
            optional: false
        },
        name: fileNames.mysqlConfigMapName
    })

    containerMounts.push({
        name: fileNames.mysqlConfigMapName,
        mountPath: `/etc/mysql/${fileNames.conf}`,
        subPath: fileNames.conf
    })
    configMapVolumes.push({
        key: fileNames.conf,
        path: fileNames.conf
    })

    volumes.push({
        name:     'data',
        hostPath: {
            path: `${mountPath}/mysql/data`,
            type: 'DirectoryOrCreate'
        },
    })

    const pathToLogs = `${mountPath}/logs/bl-mysql`
    if (!(await fse.exists(pathToLogs))) {
        installStatus.info(`The path [${pathToLogs}] for mysql logs does not exists, will be created`)
        await fse.mkdirp(pathToLogs)
    }

    try {
        const pathToLogFile = `${pathToLogs}/mysqld.log`
        await fse.ensureFile(pathToLogFile)
        logger.info(`Ensure file for '${pathToLogs}/mysqld.log'`)
        fs.chmodSync(pathToLogFile, 0o666)
    } catch (err) {
        logger.error(`Error creating file '${pathToLogs}/mysqld.log': ${err.message}`)
    }

    volumes.push({
        name:     'logs',
        hostPath: {
            path: pathToLogs,
            type: 'DirectoryOrCreate'
        },
    })

    installStatus.info('creating statefulset for mysql')
    const createMysqlStateful = await k8sAppsV1Api.createNamespacedStatefulSet(await k8sConfig.getNamespace(), workload)
    installStatus.info('creating service for mysql')
    const createMysqlServiceResult = await k8sCoreV1Api.createNamespacedService(await k8sConfig.getNamespace(), mysqlK8sConfig.service)
    return { createMysqlStateful, createMysqlServiceResult }
}