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
        let pods = await listPods(blContainers.dependencies.consul.name);

        while (pods.length < 1){
            await _wait(200)
            pods = await listPods(blContainers.dependencies.consul.name);
        }

        return pods[0].name
    }
}

const _wait = time => new Promise(resolve => setTimeout(resolve, time))

export const consul = new Consul()