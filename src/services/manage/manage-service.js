import {blContainers} from "../bl-containers";
import States from "../service-states.json";
import {statefulsetRestart} from "../k8s/k8s-statefulset-restart";
import {statefulsetScale} from "../k8s/k8s-statefulset-scale";


export class ManageService {

    async changeState({serviceName, state}) {
        switch (state) {
            case States.restart:
                await statefulsetRestart(serviceName)
                break
            case States.stop:
                await statefulsetScale(serviceName, 0)
                break
            case States.start:
                await statefulsetScale(serviceName, 1)
                break
        }
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