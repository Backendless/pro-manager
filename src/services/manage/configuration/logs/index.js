import { mountPathConfig } from "../../../../config/mount-path-config"
import path from 'path'
import JSZip from 'jszip'
import { isDirectory, listDirectory, readFileContent } from "../../../../utils/fs"

class LogsConfigurationService {

    async getLogs() {
        const mountPath = await mountPathConfig.get()
        const logsPath = mountPath + '/logs'
        return await this._zipFolderToBuffer(logsPath)
    }

    async _zipFolderToBuffer(folderPath) {
        const zip = new JSZip()
        const _addFilesToZip = async (folder, relativePath) => {
            const files = await listDirectory(folder)
            for (const file of files) {
                const filePath = path.join(folder, file)
                const relativeFilePath = path.join(relativePath, file)

                if (await isDirectory(filePath)) {
                    await _addFilesToZip(filePath, relativeFilePath, zip)
                } else {
                    const fileContent = await readFileContent(filePath)
                    zip.file(relativeFilePath, fileContent)
                }
            }
        }

        await _addFilesToZip(folderPath, '')
        return zip.generateAsync({ type: 'nodebuffer' })
    }
}

export const logsConfigurationService = new LogsConfigurationService()