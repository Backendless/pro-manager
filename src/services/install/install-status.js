import { Logger } from '../../logger'
import { consul } from '../consul'
import { blContainers } from '../bl-containers'
import Status from '../service-status.json'

const logger = Logger('install-status')

const _servicesCreatedConsulKey = 'install/servicesCreated'

class InstallStatus {

    messages = []

    _servicesCreated = null

    info(message) {
        this.add('info', message)
    }

    warn(message) {
        this.add('warn', message)
    }

    error(message) {
        this.add('error', message)
    }

    add(level, message) {
        logger.log(level, message)
        this.messages.push({ level, message, time: new Date().getTime() })
    }

    get(offset) {
        return this.messages.slice(offset ?? 0)
    }

    async isServicesCreated() {
        if (this._servicesCreated === null) {
            try {
                if (await blContainers.dependencies.consul.serviceStatus().status === Status.notInstalled) {
                    this._servicesCreated = false
                } else {
                    this._servicesCreated = Boolean(await consul.get(_servicesCreatedConsulKey))
                }
            } catch (error) {
                logger.error(`Error during retrieve status from consul: ${error}`)
                return false
            }
        }

        return this._servicesCreated
    }

    setServiceCreated(serviceCreated) {
        this._servicesCreated = serviceCreated
        consul.put(_servicesCreatedConsulKey, serviceCreated)
            .catch(error => {
                logger.error(`Failed to safe status ${serviceCreated} of service created: ${error}`)
            })
    }

}

export const installStatus = new InstallStatus()