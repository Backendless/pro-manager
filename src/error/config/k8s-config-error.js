import { ApiError } from '../error'

export class K8sConfigError extends ApiError.BadRequestError {

}

K8sConfigError.ConfigFilePathInEnvError = class ConfigFilePathInEnvError extends K8sConfigError {
    constructor() {
        super("The path to the kubernetes file could not be saved. System use ENV variable 'KUBECONFIG', " +
            'change the path in variable or remove the ENV variable')
    }
}