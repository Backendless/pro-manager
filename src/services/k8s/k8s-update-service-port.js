import { k8sAppsV1Api, k8sCoreV1Api } from './k8s'
import * as k8s from '@kubernetes/client-node'
import { k8sConfig } from '../../config/k8s-config'
import { readFileContent } from '../../utils/fs'
import path from 'path'

export async function k8sUpdateServicePort(configName, newPort ){
    const k8sConfig = JSON.parse(await readFileContent(path.resolve( __dirname, `../k8s/config/${configName}`)))

    const body = k8sConfig.service
    body.spec.ports[0].nodePort = newPort
    await k8sCoreV1Api.patchNamespacedService( body.name, await k8sConfig.getNamespace(), body )
}