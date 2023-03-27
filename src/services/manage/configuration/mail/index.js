import { consul } from '../../../consul'
import { Logger } from '../../../../logger'
import { manageService } from '../../manage-service'
import { getValueByDescription } from '../get-value-by-description'
import { describeMailConfiguration, describeMailConfigurationAsObject } from './describe-mail-configuration'
import { testEmailConfiguration } from './test-email-configuration'
import { Base64 } from 'js-base64'

const logger = Logger('mail-configuration-service')

class MailConfigurationService {

  async get() {
    const descriptions = describeMailConfigurationAsObject()

    const result = {}

    for (const descriptionKey in descriptions) {
      const description = descriptions[descriptionKey]
      const consulValue = await consul.getOrNull(description.consulPath)
      logger.info(`consul value for '${description.name}' key is '${consulValue}'`)
      result[description.name] = getValueByDescription(description, consulValue)


      if (description.name === descriptions.password.name) {
        result[description.name] = Base64.decode( result[description.name] )
      }
    }

    return result
  }

  async saveAll(mailConfigurations) {
    const descriptions = describeMailConfigurationAsObject()
    logger.info(`saving mail configuration [${JSON.stringify(mailConfigurations)}] for description [${descriptions}]`)


    for (const descriptionKey in descriptions) {
      const description = descriptions[descriptionKey]
      const name = description.name

      let value = mailConfigurations[name]
      if (name === descriptions.password.name) {
        value = Base64.encode( value )
      }

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

  async testConfiguration({ config, toEmail, body }) {
    await testEmailConfiguration({ config, toEmail, body })
  }
}

export const mailConfigurationService = new MailConfigurationService()
