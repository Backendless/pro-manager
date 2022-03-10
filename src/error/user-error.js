import { ApiError } from './error'

export class UserError {

}

UserError.DuplicateUserError = class DuplicateUserError extends ApiError.DuplicateEntryError {
    constructor(login) {
        super(`User with login'${login}' already exists`)
    }
}