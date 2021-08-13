import { listPods } from '../k8s/k8s-list-pods'
import { blContainers } from '../bl-containers'
import { executeInPod } from '../k8s/k8s-execute-pod'

class Consul {
    async get(key) {
        const podName = await this._getPodName()
        return executeInPod(podName, ['consul', 'kv', 'get', key])
    }

    async put(key, value) {
        const podName = await this._getPodName()
        return executeInPod(podName, ['consul', 'kv', 'put', key, value])
    }

    async _getPodName() {
        return (await listPods(blContainers.dependencies.consul.name))[0].name
    }
}

export const consul = new Consul()