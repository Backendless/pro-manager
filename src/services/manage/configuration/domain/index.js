import { consul } from '../../../consul'
import { describeDomainConfiguration } from './describe-domain-configuration'
import { Logger } from '../../../../logger'
import { manageService } from '../../manage-service'
import { blContainers } from '../../../bl-containers'
import { getValueByDescription } from '../get-value-by-description'
import { ApiError } from '../../../../error'
import { restartServicesForDomainConfiguration } from './restart-services-for-domain-configuration'
import { publicHostChanged } from './public-host-changed'

const logger = Logger('domain-connection-configuration-service')

class DomainConfigurationService {


  async getAll(){
    const descriptions = describeDomainConfiguration()
    const result = {}
    for (const section of Object.keys(descriptions)) {
      result[section] = await this.get(section)
    }

    return result
  }

  async get(section) {
    const descriptions = describeDomainConfiguration()[section]

    if ( descriptions == null ) {
      throw new ApiError.NotFoundError(`Section '${section}' is not found`)
    }

    const result = {}

    for (const description of descriptions){
      const consulValue = await consul.getOrNull(description.consulPath)
      logger.info(`consul value for '${description.name}' key is '${consulValue}'`)
      result[description.name] = getValueByDescription( description, consulValue )
    }

    return result
  }

  async saveAll(domains) {
    logger.info(`saving domains [${JSON.stringify(domains)}]`)
    const descriptions = describeDomainConfiguration()

    for (const section of Object.keys(domains)) {
      const description = descriptions[section]

      if ( description == null ) {
        throw new ApiError.NotFoundError(`Section '${section}' is not found`)
      }

      await this._saveToConsul(description, domains[section])
      await publicHostChanged({ type: section })
    }
  }

  async saveConfigAndRestart({ config, shouldRestart }){
    await this.saveAll(config)
    if( shouldRestart === true ) {
      await restartServicesForDomainConfiguration()
    }
  }

  async _saveToConsul(descriptions, domain )
  {
    logger.info(`Saving |${JSON.stringify(domain)}| domain for |${JSON.stringify(descriptions)}| descriptions`)
    for (const description of descriptions) {
      const name = description.name
      const value = domain[name]
      const consulPath = description.consulPath
      if(consulPath == null){
        logger.info(`Consul path is null '${value}' value for '${name}' name will not be saved`)
      }

      logger.info(`Saving '${value}' value for '${name}' name by [${consulPath}] consul path`)
      await consul.put(consulPath, value)
    }
  }

  async describeConfiguration() {
    return describeDomainConfiguration()
  }
}

export const domainConfigurationService = new DomainConfigurationService()
