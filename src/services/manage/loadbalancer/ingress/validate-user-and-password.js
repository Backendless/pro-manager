import { ApiError } from '../../../../error'

export function validateUserAndPassword({ user, password }){
    if( user ^ password ){
        throw new ApiError("Both 'user' and 'password' should be present or none of them")
    }
}