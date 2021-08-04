import {blContainers} from './bl-containers'

export class ManageService {
    async changeState(state) {
    }

    async status() {
        const status = []

        for (const [key, container] of Object.entries(blContainers.bl)) {
            status.push(await container.serviceStatus())
        }
        for (const [key, container] of Object.entries(blContainers.dependencies)) {
            status.push(await container.serviceStatus())
        }

        return status
    }
}

export const manageService = new ManageService()