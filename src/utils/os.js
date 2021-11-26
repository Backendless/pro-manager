import os from 'os'

export function isWin(){
    console.log(os.platform())
    return os.platform() === 'win32'
}
