import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

const publicKey = fs.readFileSync(path.resolve(__dirname, '../../../../config/rsa-key/public.pem'))

export async function decodeToken(token) {
    return jwt.verify(token, publicKey, { algorithms: ['RS256'] })
}

