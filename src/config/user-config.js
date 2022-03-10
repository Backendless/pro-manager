import { BaseConfig } from './base-config'

const _configSalt = '/user/bcrypt/salt'

class UserConfig {
    _baseConfig = new BaseConfig('config.json')

    async getSalt() {
        const salt = await this._baseConfig.getNullable(_configSalt)
        return salt == null ? 10 : salt
    }
}

export const userConfig = new UserConfig()