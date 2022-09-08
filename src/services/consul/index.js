import { listPods } from '../k8s/k8s-list-pods'
import { blContainers } from '../bl-containers'
import { executeInPod } from '../k8s/k8s-execute-pod'
import { Logger } from '../../logger'
import { repeatOnFail } from '../../utils/repeat-on-fail'

const logger = Logger('consul')

class Consul {
    async get(key) {
        const podName = await this._getPodName()
        return (await repeatOnFail( () => executeInPod(podName, ['consul', 'kv', 'get', key]), 10, 100)).replace(/\n$/, '')
    }

    async getOrNull(key) {
        let value = null
        try {
            value = await this.get(key)
        } catch (err) {
            if (err !== null && err.message != null && err.message.includes('No key exists at')) {
                logger.verbose(`Cannot get value by key ${key}. Error: ${err.message}`)
            } else {
                throw err
            }
        }

        return value
    }

    async put(key, value) {
        const podName = await this._getPodName()
        return repeatOnFail( () => executeInPod(podName, ['consul', 'kv', 'put', key, value]), 10, 100)
    }

    async _getPodName() {
        let pods = await listPods(blContainers.dependencies.consul.name)

        while (pods.length < 1) {
            await _wait(200)
            pods = await listPods(blContainers.dependencies.consul.name)
        }

        return pods[0].name
    }
}

const _wait = time => new Promise(resolve => setTimeout(resolve, time))

export const consul = new Consul()