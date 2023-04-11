export const initContext = () => (req, res, next ) => {
    req.context = {}
    return next()
}
