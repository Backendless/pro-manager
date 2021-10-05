import {consul} from "../../../consul"
import {describeDataConfiguration} from "./describe-data-configuration";
import {Logger} from "../../../../logger";
import {manageService} from "../../manage-service";
import {blContainers} from "../../../bl-containers";

const logger = Logger('data-configuration-service')

class DataConfigurationService {

  async getDataConfigs() {
    logger.verbose(`getting config from consul`)
    const config = {}
    for (const description of describeDataConfiguration()) {
      const key = description.consulPath()
      logger.verbose(`getting config by key ${key}`)

      if (key == null) {
        continue
      }

      const value = await consul.getOrNull(key)

      if (value == null) {
        logger.verbose(`not found found value for key ${key} `)
        continue
      }

      logger.verbose(`found value ${value} for key ${key}`)
      config[description.name] = value
    }

    return config
  }

  async saveConfig(config) {

    for (const description of describeDataConfiguration()) {
      const value = config[description.name]
      const key = description.consulPath()

      if (value == null || key == null) {
        continue
      }

      await consul.put(description.consulPath(), value)
    }
  }

  async saveConfigAndRestart({config, shouldRestart}) {
    await this.saveConfig(config)
    if (shouldRestart) {
      manageService.restartService(blContainers.bl.server.name)
      manageService.restartService(blContainers.bl.console.name)
      manageService.restartService(blContainers.bl.rtServer.name)
      manageService.restartService(blContainers.bl.taskman.name)
    }
  }

  async describeConfiguration() {
    return describeDataConfiguration()
  }
}

export const dataConfigurationService = new DataConfigurationService()
