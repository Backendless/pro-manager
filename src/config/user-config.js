import { BaseConfig } from './base-config'
import uuidv1 from 'uuid/v1'

const _configSalt = '/user/bcrypt/salt'
const _configAuthEnabled = '/user/authEnabled'
const _configJwtPass = '/user/jwt/pass'

class UserConfig {
    _baseConfig = new BaseConfig('config.json')
    _jwtPass = null

    async getAuthEnabled() {
        const authEnabled = await this._baseConfig.getNullable(_configAuthEnabled)
        return authEnabled == null ? true : authEnabled
    }

    async getSalt() {
        const salt = await this._baseConfig.getNullable(_configSalt)
        return salt == null ? 10 : salt
    }

    async getJwtPass() {
        if (this._jwtPass == null) {
            this._jwtPass = await this._baseConfig.getNullable(_configJwtPass)

            if (this._jwtPass == null) {
                this._jwtPass = uuidv1().substr(0, 5)
                await this._baseConfig.set(_configJwtPass, this._jwtPass)
            }
        }

        return this._jwtPass
    }
}

export const userConfig = new UserConfig()