import { readLicense } from './read-license'
import { consul } from '../../consul'
import { ApiError } from '../../../error'
import { Logger } from '../../../logger'

const logger = Logger('is-upgrade-available')

/**
 * Check if an upgrade is available for the current license.
 *
 * @return {Promise<boolean>} - A promise that resolves to true if an upgrade is available, false otherwise.
 * If options.upgradeAvailable is not defined then return true
 *
 * @throws {ApiError.BadRequestError} - If the license key is missing.
 */
export async function isUpgradeAvailable() {
    const licenseId = await consul.getOrNull('config/license/id')
    logger.info(`license id from consul id [${licenseId}]`)

    if (!licenseId) {
        throw new ApiError.BadRequestError('It appears that the license key is missing. If you\'re utilizing an older license, please reach out to us via https://support.backendless.com to procure an updated one. Thank you for your attention to this matter.')
    }

    const licenseInfo = await readLicense(licenseId)

    if (licenseInfo.options && licenseInfo.options.upgradeAvailable !== undefined) {
        return licenseInfo.options.upgradeAvailable === true
    }

    logger.info('license does not contain information about upgrade availability, so we allow upgrade')
    return true

}