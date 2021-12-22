import {BaseConfig} from '../../src/config/base-config'
import {k8sConfig} from '../../src/config/k8s-config'
import {isWin} from "../../src/utils/os";
import {K8sConfigError} from "../../src/error/config/k8s-config-error";

jest.mock('../../src/utils/os')
jest.mock('../../src/config/base-config')

describe('Config file test', () => {
    let oldEnv = null

    beforeEach(() => {
        BaseConfig.mockClear()
    })

    afterEach(() => {
        process.env = {...oldEnv}
    })

    test('get path to k8s config file if env KUBECONFIG is set', async () => {
        const expectedResult = `/some-path/.kube/config`
        process.env.KUBECONFIG = expectedResult

        expect(await k8sConfig.getConfigFile()).toBe(expectedResult)
    })

    test('set path to k8s config file if env KUBECONFIG is set', async () => {
        process.env.KUBECONFIG = `/some-path/.kube/config`

        await expect( k8sConfig.setConfigFile('/some/test'))
            .rejects
            .toThrowError(K8sConfigError.ConfigFilePathInEnvError)
    })

    describe('mock BaseConfig', () => {
        let oldBaseConfig = k8sConfig._baseConfig
        beforeEach(() => {
            BaseConfig.mockClear()
            k8sConfig._baseConfig = new BaseConfig()
        })

        afterEach(() => {
            k8sConfig._baseConfig = oldBaseConfig
        })

        test('get path to k8s config file if env KUBECONFIG not set and path provided in file', async () => {
            const expectedResult = `/some-path-in-file/.kube/config`

            k8sConfig._baseConfig.get = jest.fn(any => 'not expectedResult')
            k8sConfig._baseConfig.getSync = jest.fn(any => expectedResult)

            expect(await k8sConfig.getConfigFile()).toBe(expectedResult)
        })

        test('get namespace', async () => {
            k8sConfig._baseConfig.get = jest.fn(any => 'default')
            expect(await k8sConfig.getNamespace()).toBe('default')
        })
    })

    test('NOT windows get path to k8s config file if no env KUBECONFIG and null in file', async () => {
        delete process.env.KUBECONFIG
        const expectedResult = `${process.env.HOME}/.kube/config`


        isWin.mockReturnValue(false)

        expect(await k8sConfig.getConfigFile()).toBe(expectedResult)

    })

    test('WINDOWS get path to k8s config file if no env KUBECONFIG and null in file', async () => {
        delete process.env.KUBECONFIG
        const expectedResult = `${process.env.HOMEDRIVE}${process.env.HOMEPATH}\\.kube\\config`

        isWin.mockReturnValue(true)

        expect(await k8sConfig.getConfigFile()).toBe(expectedResult)

    })
})