import { handler, Router } from '../utils/router'
import { getReleasedVersions } from '../services/manage/get-released-versions'

export const router = new Router()

router.use('/docker-hub/v2/repositories/backendless/bl-server/tags/', handler(async () => getReleasedVersions()))