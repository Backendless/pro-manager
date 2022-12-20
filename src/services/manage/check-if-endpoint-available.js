import axios from 'axios'

export const checkIfEndpointAvailableForGet = async (endpoint, timeout, expectedHttpStatusCode) => {

    timeout = timeout || 1000

    let response
    try {
        response = await axios.get(endpoint, { timeout })
    } catch (e) {
        return false
    }

    if (expectedHttpStatusCode) {
        return expectedHttpStatusCode === response.status
    }

    return response.status > 199 && response.status < 400
}