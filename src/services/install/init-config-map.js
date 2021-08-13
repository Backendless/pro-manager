import {installStatus} from "./install-status";
import initConfigMap from "../k8s/config/config-map.json";
import {createConfigMap} from "../k8s/k8s-config-map";
import {HttpError} from "@kubernetes/client-node"

export async function initConfigMap() {
    installStatus.info('initializing k8s config map...')
    try {
        await createConfigMap(initConfigMap.metadata.name, initConfigMap)
    } catch (error) {
        if (error instanceof HttpError && error.statusCode === 404) {
            installStatus.info(`k8s config map already initialized`)
            return
        }
        throw error
    }
}
