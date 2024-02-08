import { mountPathConfig } from "../../../../config/mount-path-config"
import fs from 'fs'
import path from 'path'
import JSZip from 'jszip'
import util from 'util'

class LogsConfigurationService {

    async getLogs() {
        const mountPath = await mountPathConfig.get()
        const logsPath = mountPath + '/logs'
        return await this._zipFolderToBuffer(logsPath)
    }

    async _zipFolderToBuffer(folderPath) {
        const zip = new JSZip()
        const readdir = util.promisify(fs.readdir)
        const stat = util.promisify(fs.stat)
        const readFile = util.promisify(fs.readFile)

        const _addFilesToZip = async (folder, relativePath) => {
            const files = await readdir(folder)
            for (const file of files) {
                const filePath = path.join(folder, file)
                const relativeFilePath = path.join(relativePath, file)

                const fileStat = await stat(filePath)
                if (fileStat.isDirectory()) {
                    await _addFilesToZip(filePath, relativeFilePath)
                } else {
                    const fileContent = await readFile(filePath)
                    zip.file(relativeFilePath, fileContent)
                }
            }
        }

        await _addFilesToZip(folderPath, '')
        return zip.generateAsync({ type: 'nodebuffer' })
    }
}

export const logsConfigurationService = new LogsConfigurationService()