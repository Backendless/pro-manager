export function getValueByDescription({ type }, value) {
    switch (type.toLowerCase()) {
        case 'boolean':
            return value.toLowerCase() === 'true'
        case 'number':
            return Number(value)
        default:
            return value
    }
}