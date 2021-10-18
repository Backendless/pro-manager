import { createMysqlConfigMap } from './create-mysql-config-map'
import { installStatus } from '../../install-status'
import { k8sAppsV1Api, k8sCoreV1Api } from '../../../k8s/k8s'
import config from '../../../../../config/config.json'
import fileNames from './mysql-file-names.json'
import { readFileContent } from '../../../../utils/fs'
import path from 'path'

export async function installMysql({ version, mountPath }) {
    const mysqlK8sConfig = JSON.parse(await readFileContent(path.resolve( __dirname, '../../../k8s/config/mysql.json')))
    installStatus.info('installing mysql...')
    await createMysqlConfigMap(version)
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

    for (const [key, fileName] of Object.entries(fileNames.init)) {
        containerMounts.push({
            name: fileNames.mysqlConfigMapName,
            mountPath: `/docker-entrypoint-initdb.d/${fileName}`,
            subPath: fileName
        })
        configMapVolumes.push({
            key: fileName,
            path: fileName
        })
    }

    containerMounts.push({
        name: fileNames.mysqlConfigMapName,
        mountPath: `/etc/mysql/mysql.conf.d/${fileNames.conf}`,
        subPath: fileNames.conf
    })
    configMapVolumes.push({
        key: fileNames.conf,
        path: fileNames.conf
    })

    volumes.push({
        name: 'data', hostPath: {
            path: `${mountPath}/mysql/data`,
            type: 'DirectoryOrCreate'
        },
    })
    // volumes.push({
    //     name: 'log', hostPath: {
    //         path: `${mountPath}/mysql/log`,
    //         type: 'DirectoryOrCreate'
    //     },
    // })

    installStatus.info('creating statefulset for mysql')
    const createMysqlStateful = await k8sAppsV1Api.createNamespacedStatefulSet(config.k8s.namespace, workload)
    installStatus.info('creating service for mysql')
    const createMysqlServiceResult = await k8sCoreV1Api.createNamespacedService(config.k8s.namespace, mysqlK8sConfig.service)
    return { createMysqlStateful, createMysqlServiceResult }
}