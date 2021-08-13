import { Logger } from '../../logger'

const logger = Logger('install-status')

class InstallStatus {

    messages = []

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
}

export const installStatus = new InstallStatus()