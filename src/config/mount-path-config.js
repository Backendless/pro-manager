import { consul } from '../services/consul'

const _mountPathKey = 'install/mountPath'

class MountPathConfig {
    async save(mountPath) {
        await consul.put(_mountPathKey, mountPath)
    }

    async get() {
        return await consul.getOrNull(_mountPathKey)
    }
}

export const mountPathConfig = new MountPathConfig()