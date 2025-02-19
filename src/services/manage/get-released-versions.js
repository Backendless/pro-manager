import axios from 'axios'
import config from '../../../config/config.json'

export const getReleasedVersions = async () => {
    const versionEndpoint = `https://api.backendless.com/${config.license.appId}/${config.license.apiKey}/services/KeysV1/versions/released`
    return (await axios.get(versionEndpoint)).data
}