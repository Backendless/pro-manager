import { ApiError } from './error'

export class InstallError {

}

InstallError.UserExistButPasswordDoesNotMatch = class UserExistButPasswordDoesNotMatch extends ApiError.BadRequestError{
    constructor(login) {
        super(`There was an error during creating first user. 
        The user with login'${login}' already exists, but password does not match`)
    }
}

InstallError.UserIsRequiredError = class UserIsRequiredError extends ApiError.BadRequestError {
    constructor() {
        super(`The login and password is required for installation. 
        To disable authentication open config.json file and set the following parameter 'user.authEnabled' to false`)
    }
}

InstallError.UserExistButLoginNotMatchError = class UserExistButLoginNotMatchError extends ApiError.BadRequestError {
    constructor() {
        super(`Some user(s) exists, but provided user does not that match one. 
        Remove file 'db/users.json' or use existed user`)
    }
}

