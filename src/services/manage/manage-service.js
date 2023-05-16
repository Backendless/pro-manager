import { blContainers } from '../bl-containers'
import States from '../service-states.json'
import { Logger } from '../../logger'
import { listPods } from '../k8s/k8s-list-pods'

const logger = Logger('manage-service')

export class ManageService {

    async changeState({ serviceName, state }) {
        const container = blContainers.findByName(serviceName)
        switch (state) {
            case States.restart:
                await container.restart()
                break
            case States.stop:
                await container.scale(0)
                break
            case States.start:
                await container.scale(1)
                break
        }
    }

    restartService(name) {
        return manageService.changeState({ serviceName: name, state: States.restart })
            .then(result => logger.verbose(`restart for ${name} sent`))
            .catch(error => logger.error(`Error during restarting ${name}: ${error}`))
    }

    async listPods({ serviceName }) {
        logger.info(`listing pods for service with name [${serviceName}]`)
        return listPods(serviceName)
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