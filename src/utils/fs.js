const fs = require('fs')
export async function checkReadWriteAccess(path)
{
    return new Promise((resolve, reject) => {
        fs.access(path, fs.constants.R_OK | fs.constants.W_OK, err => {
            if (err) {
                console.log("%s doesn't exist", path)
                resolve(false)
            } else {
                console.log('can read/write %s', path)
                resolve(true)
            }
        })
    })
}