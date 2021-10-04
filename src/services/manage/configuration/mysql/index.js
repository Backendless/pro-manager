import {consul} from "../../../consul"
import {describeMysqlConfiguration} from "./describe-mysql-configuration";
import {Logger} from "../../../../logger";
import {manageService} from "../../manage-service";
import States from "../../../service-states.json"
import {blContainers} from "../../../bl-containers";

const logger = Logger('mysql-connection-configuration-service')

class MysqlConnectionConfigurationService {
  _enabledShardsNamesKey = 'config/sharding/shards'
  _disabledShardsNamesKey = 'config/sharding/disabledShards'

  async _getShardFromConsul(shardName) {
    logger.verbose(`getting shard for ${shardName}`)
    const shard = {}
    for (const description of describeMysqlConfiguration()) {
      const key = description.consulPath(shardName)
      logger.verbose(`getting shard by key ${key}`)
      if (key == null) {
        continue
      }

      const value = await consul.getOrNull(key)

      if (value == null) {
        continue
      }

      logger.verbose(`found value ${value} for key ${key}`)
      shard[description.name] = value
    }

    shard.shard = shardName

    return shard
  }

  async getShards() {
    const shards = []
    const enabledShardNamesStr = await consul.get(this._enabledShardsNamesKey)
    const enabledShardNames = enabledShardNamesStr.trim().split(';')
    for (const shardName of enabledShardNames) {
      const shard = await this._getShardFromConsul(shardName)
      shard.enabled = true
      shards.push(shard)
    }

    let disabledShardsStr = null
    try {
      disabledShardsStr = await consul.get(this._disabledShardsNamesKey);
    } catch (err) {
      if (err !== null && err.message != null && err.message.includes('No key exists at')) {
        logger.warn(`Error during getting disabled shards by key ${this._disabledShardsNamesKey}. Message: ${err}`)
      } else {
        throw err
      }
    }

    const disabledShardNames = disabledShardsStr === null ? [] : disabledShardsStr.split(';')
    for (const shardName of disabledShardNames) {
      const shard = await this._getShardFromConsul(shardName)
      shard.enabled = false
      shards.push(shard)
    }

    return shards
  }

  async saveShard(shard) {
    const shardName = shard.shard

    if (shardName == null) {
      throw new Error("Field 'shard' is required")
    }

    for (const description of describeMysqlConfiguration()) {
      const value = shard[description.name]
      const key = description.consulPath(shardName)

      if (value == null || key == null) {
        continue
      }

      await consul.put(description.consulPath(shardName), value)
    }

    const enabled = shard.enabled

    if (enabled === true) {
      const enabledShardNames = (await consul.get(this._enabledShardsNamesKey)).split(';')
      if (!enabledShardNames.includes(shardName)) {
        enabledShardNames.push(shardName)
        await consul.put(this._enabledShardsNamesKey, enabledShardNames)
      }
    } else {
      const disabledShardNames = (await consul.get(this._disabledShardsNamesKey)).split(';')
      if (!disabledShardNames.includes(shardName)) {
        disabledShardNames.push(shardName)
        await consul.put(this._disabledShardsNamesKey, disabledShardNames)
      }
    }
  }

  async saveShardAndRestart({shard, shouldRestart}) {
    await this.saveShard(shard)
    if (shouldRestart) {
      manageService.changeState({serviceName: blContainers.bl.server.name, state: States.restart})
          .then(result => logger.verbose(`restart for bl-server sent`))
          .catch(error => logger.error(`Error during restarting bl-server: ${error}`))
      manageService.changeState({serviceName: blContainers.bl.taskman.name, state: States.restart})
          .then(result => logger.verbose(`restart for bl-taskman sent`))
          .catch(error => logger.error(`Error during restarting bl-taskman: ${error}`))
    }
  }

  async describeConfiguration() {
    return describeMysqlConfiguration()
  }
}

export const mysqlConnectionConfigurationService = new MysqlConnectionConfigurationService()
