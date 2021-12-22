import { BaseConfig } from '../../src/config/base-config'

test('test base config', async () => {
    const configName = 'test-config.json';
    const config = new BaseConfig(configName)
    const value = `myValue${Math.random()}`
    const path = '/some/path'
    expect(await config.set(path, value))
    expect(await config.get(path)).toBe(value)

    const json = require( `${BaseConfig.CONFIG_DIR}${configName}`)
    expect(json.some.path).toBe(value)
})