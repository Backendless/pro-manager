import { ApiError } from './error'

export class UserError {

}

UserError.DuplicateUserError = class DuplicateUserError extends ApiError.DuplicateEntryError {
    constructor(login) {
        super(`User with login'${login}' already exists`)
    }
}

UserError.UserOrPasswordDoesNotMatchError = class UserOrPasswordDoesNotMatchError extends ApiError.NotAuthorizedError {
    constructor() {
        super('User or password is not correct')
    }
}

UserError.AuthReqiredError = class AuthReqiredError extends ApiError.ForbiddenError {
    constructor() {
        super('Request is forbidden. Authorization is required')
    }
}

UserError.InlaidTokenError = class InlaidTokenError extends ApiError.ForbiddenError {
    constructor() {
        super('The authentication token is invalid. Please re-login the user')
    }
}