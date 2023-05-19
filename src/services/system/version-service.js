import simpleGit from 'simple-git'
import { Logger } from '../../logger'

const logger = Logger('version-service')

function convertTagToVersion(tag) {
    const tagParts = tag.split('_')
    return tagParts.length > 1 ? tagParts[1] : tagParts[0]
}

class VersionService {
    async getCurrent() {
        const tag = await simpleGit().raw(['describe', '--tags'])
        logger.info(`current tag is [${tag}]`)
        return convertTagToVersion(tag)
    }

    async list() {
        const fetchResult = await simpleGit().fetch(['--tags'])
        logger.info(`fetch result is [${JSON.stringify(fetchResult)}]`)
        const tags = await simpleGit().tags(['-l', 'release_*'])
        logger.info(`available release tags is [${JSON.stringify(tags)}]`)
        tags.all = tags.all.map(tag => convertTagToVersion(tag))
        tags.latest = convertTagToVersion(tags.latest)
        return tags
    }
}

export const versionService = new VersionService()