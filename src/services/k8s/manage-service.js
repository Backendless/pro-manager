import {blContainers} from './bl-containers'

export class ManageService {
    async changeState(state) {
    }

    async status() {
        const status = []

        for (const container of blContainers.bl) {
            status.push(await container.serviceStatus())
        }
        for (const container of blContainers.dependencies) {
            status.push(await container.serviceStatus())
        }

        return status
    }


}

export const manageService = new ManageService()