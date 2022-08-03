import axios from 'axios'
import { Logger } from '../../logger'
import fs from 'fs'

const logger = Logger('install-default-arguments')

export async function defaultArguments() {

    const gitHubResponse = (await axios.get(
        'https://hub.docker.com/v2/repositories/backendless/bl-server/tags/?page_size=25&page=1&ordering=last_updated'))
        .data

    logger.verbose(`response from github: ${JSON.stringify(gitHubResponse)}`)
    const version = gitHubResponse.results
        .map(result => result.name)
        //get first version which ands with number. Because we should skip dev, stage and so on version
        .filter(name => /[0-9]+$/.test(name))[0]

    const mountPath = `${process.cwd()}/k8s-mount`

    if (!fs.existsSync(mountPath)) {
        fs.mkdirSync(mountPath)
    }
    return { mountPath, version }
}