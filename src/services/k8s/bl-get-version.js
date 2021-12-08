export function getVersionFromStatus(status) {
    return status.body.spec.template.spec.containers[0].image.split(':')[1]
}