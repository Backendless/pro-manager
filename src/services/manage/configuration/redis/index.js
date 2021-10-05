import { consul } from '../../../consul'
import { describeRedisConfiguration } from './describe-redis-configuration'
import { Logger } from '../../../../logger'
import { manageService } from '../../manage-service'
import { getRedisTypes } from './get-redis-types'
import { blContainers } from '../../../bl-containers'

const logger = Logger('redis-configuration-service')

class RedisConfigurationService {


  async _getRedisConfigFromConsul(redisType) {
    logger.verbose(`getting redis for ${redisType}`)
    const config = {}
    for (const description of describeRedisConfiguration()) {
      const key = description.consulPath(redisType)
      logger.verbose(`getting redis by key ${key}`)
      if (key == null) {
        continue
      }

      const value = await consul.getOrNull(key)

      if (value == null) {
        logger.verbose(`not found value for key ${key}`)
        continue
      }

      logger.verbose(`found value ${value} for key ${key}`)
      config[description.name] = value
    }

    config.type = redisType

    return config
  }

  async getRedisConfigs() {
    const configs = []
    const redisTypes = getRedisTypes()
    for (const redisType of redisTypes) {
      const config = await this._getRedisConfigFromConsul(redisType)
      configs.push(config)
    }

    return configs
  }

  async saveConfig(config) {
    const type = config.type

    if (type == null) {
      throw new Error("Field 'type' is required")
    }

    for (const description of describeRedisConfiguration()) {
      const value = config[description.name]
      const key = description.consulPath(type)

      if (value == null || key == null) {
        continue
      }

      await consul.put(description.consulPath(type), value)
    }
  }

  async saveConfigAndRestart({ config, shouldRestart }) {
    await this.saveConfig(config)
    if (shouldRestart) {
      manageService.restartService(blContainers.bl.server.name)
      manageService.restartService(blContainers.bl.console.name)
      manageService.restartService(blContainers.bl.rtServer.name)
      manageService.restartService(blContainers.bl.taskman.name)
      manageService.restartService(blContainers.bl.javaCoderunner.name)
      manageService.restartService(blContainers.bl.jsCoderunner.name)
    }
  }

  async describeConfiguration() {
    return describeRedisConfiguration()
  }
}

export const redisConfigurationService = new RedisConfigurationService()
