import {handler, Router} from '../utils/router'
import {installService} from '../services/install'
import {installStatus} from "../services/install/install-status";

export const router = new Router()

router.post('/', handler(async ({body}) => {
    //install process should be async
    installService.install(body)
        .then(result => {
            installStatus.setServiceCreated(true)
            installStatus.info("All services are created, you can see status of each service on Manage page")
        })
        .catch(error => {
            installStatus.error(`Error during install process ${JSON.stringify(error)}`)
        })
}))

router.get('/default-arguments', handler(async () => {
    return installService.defaults()
}))

router.get('/delete', handler(async () => {
    return installService.delete()
}))

router.get('/status', handler(() => {
    return installService.status()
}))