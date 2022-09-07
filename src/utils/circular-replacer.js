export const circularReplacer = () => {
    const seen = new WeakSet()
    return (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return '[circular]'
            }
            seen.add(value)
        }
        return value
    }
}