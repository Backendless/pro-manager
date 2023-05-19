import simpleGit from 'simple-git'

class VersionService {
    async getCurrent() {
        const tag = await simpleGit().raw(['describe', '--tags'])
        const tagParts = tag.split('_')
        return tagParts.length > 1 ? tagParts[1] : tagParts[0]
    }
}

export const versionService = new VersionService()