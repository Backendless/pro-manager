import {consul} from "../../../consul"
import {describeRedisConfiguration} from "./describe-redis-configuration";
import {Logger} from "../../../../logger";
import {manageService} from "../../manage-service";
import States from "../../../service-states.json"
import {getRedisTypes} from "./get-redis-types";
import {blContainers} from "../../../bl-containers";

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
        logger.verbose(`found value for key ${key} not found`)
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

  async saveConfigAndRestart({config, shouldRestart}) {
    await this.saveConfig(config)
    if (shouldRestart) {
      this.restartService(blContainers.bl.server.name)
      this.restartService(blContainers.bl.console.name)
      this.restartService(blContainers.bl.rtServer.name)
      this.restartService(blContainers.bl.taskman.name)
      this.restartService(blContainers.bl.javaCoderunner.name)
      this.restartService(blContainers.bl.jsCoderunner.name)
    }
  }

  restartService(name){
    manageService.changeState({serviceName: name, state: States.restart})
        .then(result => logger.verbose(`restart for ${name} sent`))
        .catch(error => logger.error(`Error during restarting ${name}: ${error}`))
  }

  async describeConfiguration() {
    return describeRedisConfiguration()
  }
}

export const redisConfigurationService = new RedisConfigurationService()
