import { consul } from '../../../consul'
import { Logger } from '../../../../logger'
import { manageService } from '../../manage-service'
import { getValueByDescription } from '../get-value-by-description'
import { describeMailConfiguration } from './describe-mail-configuration'

const logger = Logger('mail-configuration-service')

class MailConfigurationService {

  async get() {
    const descriptions = describeMailConfiguration()

    const result = {}

    for (const description of descriptions) {
      const consulValue = await consul.getOrNull(description.consulPath)
      logger.info(`consul value for '${description.name}' key is '${consulValue}'`)
      result[description.name] = getValueByDescription(description, consulValue)
    }

    return result
  }

  async saveAll(mailConfigurations) {
    const descriptions = describeMailConfiguration()
    logger.info(`saving mail configuration [${JSON.stringify(mailConfigurations)}] for description [${descriptions}]`)


    for (const description of descriptions) {
      const name = description.name
      const value = mailConfigurations[name]
      const consulPath = description.consulPath
      if (consulPath == null) {
        logger.info(`Consul path is null '${value}' value for '${name}' name will not be saved`)
      }

      logger.info(`Saving '${value}' value for '${name}' name by [${consulPath}] consul path`)
      await consul.put(consulPath, value)
    }
  }

  async saveConfigAndRestart({ config, shouldRestart }) {
    await this.saveAll(config)
    if (shouldRestart === true) {
      await manageService.restartService('bl-server')
      await manageService.restartService('bl-web-console')
      await manageService.restartService('bl-taskman')
      await manageService.restartService('bl-rt-server')
    }
  }

  async describeConfiguration() {
    return describeMailConfiguration()
  }
}

export const mailConfigurationService = new MailConfigurationService()
