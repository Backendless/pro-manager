import axios from 'axios'
import { Logger } from '../../logger'
import fse from 'fs-extra'
import { getReleasedVersions } from '../manage/get-released-versions'

const logger = Logger('install-default-arguments')

export async function defaultArguments() {

    const version = (await getReleasedVersions()).results.map(result => result.name)[0]

    const mountPath = `${process.cwd()}/k8s-mount`

    if (!(await fse.exists(mountPath))) {
        await fse.mkdirp(mountPath)
    }

    return { mountPath, version }
}