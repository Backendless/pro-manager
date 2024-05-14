import crypto from 'crypto'
import { mysqlConnectionConfigurationService } from '../../../manage/configuration/mysql'
import { Logger } from '../../../../logger'

const logger = Logger('describe-mysql-configuration')

export async function generatePasswordAndSaveToConsul() {
    const password = generatePassword()
    logger.info(`generated password for mysql [${password}]`)
    const shards = await mysqlConnectionConfigurationService.getShards()
    for (const shard of shards) {
        logger.info(`saving password for shard [${JSON.stringify(shard)}]`)
        shard.password = password
        await mysqlConnectionConfigurationService.saveShard(shard)
        logger.info(`saved password for shard [${shard.shard}]`)
    }
    return password
}

function generatePassword() {
    const length = 10
    return crypto.randomBytes(length).toString('hex').slice(0, length)
}