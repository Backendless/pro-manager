import simpleGit from 'simple-git'

class VersionService {
    async getCurrent() {
        return simpleGit().raw(['describe', '--tags'])
    }
}

export const versionService = new VersionService()