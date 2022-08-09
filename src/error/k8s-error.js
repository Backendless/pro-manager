import { ApiError } from './error'

export class K8sError extends ApiError{
    constructor(k8sResponse, message, code, details) {
        super(`${message}. Message from kubernetes: ${k8sResponse.response.body.message}`,
            k8sResponse.response.statusCode, code, details)
    }
}