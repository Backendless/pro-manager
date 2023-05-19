import simpleGit from 'simple-git'
import { Logger } from '../../logger'

import util from 'node:util'
import { ApiError } from '../../error'

const exec = util.promisify(require('node:child_process').exec)

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

    async changeVersion({ newVersion }) {
        logger.info(`changing to version [${JSON.stringify(newVersion)}]...`)
        const tagName = `release_${newVersion}`
        try {
            const checkoutResult = await simpleGit().checkout(tagName)
            logger.info(`checkout result is [${JSON.stringify(checkoutResult)}]`)
        } catch (e) {
            logger.error(`error during checkout to tag [${tagName}]: [${e}]`)
            throw new ApiError.BadRequestError(`The following error occurred during version ${newVersion} checkout:
            ${e} \nProbably you have some local change, commit or stash it and try again`)
        }

        const npmInstallResult = await exec('npm install')
        logger.info(`npm install result is [${JSON.stringify(npmInstallResult)}]`)

        process.exit(0)
    }
}

export const versionService = new VersionService()