import { readLicense } from './read-license'
import { consul } from '../../consul'
import { ApiError } from '../../../error'
import { Logger } from '../../../logger'

const logger = Logger('has-flowrunner-license')

const LICENSE_FEATURE_FR_NAME = 'flowrunner'

export async function hasFlowRunnerLicense() {
  try {
    const licenseId = await consul.getOrNull('config/license/id')
    logger.info(`license id from consul id [${ licenseId }]`)

    if (!licenseId) {
      throw new ApiError.BadRequestError('It appears that the license key is missing. If you\'re utilizing an older license, please reach out to us via https://support.backendless.com to procure an updated one. Thank you for your attention to this matter.')
    }

    const licenseInfo = await readLicense(licenseId)

    return licenseInfo?.options?.features
      && licenseInfo.options.features.find(feature => feature.name === LICENSE_FEATURE_FR_NAME)
  } catch (error) {
    logger.error(`Error checking FlowRunner license: ${ error }`)
    return false
  }
}
