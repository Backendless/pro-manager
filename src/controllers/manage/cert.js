import { handler, Router } from '../../utils/router'
import { localCertManager } from '../../services/manage/cert/local-cert-manager'
import { ApiError } from '../../error'
import fileUpload from 'express-fileupload'

export const router = new Router()

const uploadRouter = router.use(fileUpload())
uploadRouter.post('/', handler(({ body, query, files }) => {
    const crtFile = files.crtFile
    const keyFile = files.keyFile

    if (!crtFile || !keyFile) {
        throw new ApiError.BadRequestError('crtFile and keyFile is required to create TLS certificate')
    }

    if (!body.certName) {
        throw new ApiError.BadRequestError('certName field is required to create TLS certificate')
    }

    return localCertManager.upload({ crtBytes: crtFile.data, keyBytes: keyFile.data, certName: body.certName })
}))

uploadRouter.put('/', handler(({ body, query, files }) => {
    const crtFile = files.crtFile
    const keyFile = files.keyFile

    if (!crtFile && !keyFile) {
        throw new ApiError.BadRequestError('crtFile or keyFile is required to update TLS certificate')
    }

    if (!body.certName) {
        throw new ApiError.BadRequestError('certName field is required to update TLS certificate')
    }

    return localCertManager.update({
        crtBytes: crtFile ? crtFile.data : null,
        keyBytes: keyFile ? keyFile.data : null,
        certName: body.certName
    })
}))

router.get('/', handler(({ body, query }) => {
    return localCertManager.list()
}))

router.get('/describe', handler(() => {
    return localCertManager.describe()
}))

router.delete('/', handler(async ({ body, query }) => {
    const certName = body.certName

    if (!certName) {
        throw new ApiError.BadRequestError('certName field is required to delete TLS certificate')
    }

    return localCertManager.delete(certName)
}))