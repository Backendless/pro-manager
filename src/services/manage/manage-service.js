

export class ManageService {

    constructor() {
        this.service = require('../k8s/manage-service').manageService
    }

    async changeState(state) {
        return this.service.changeState(state)
    }

    async status() {
        return this.service.status()
    }
}

export const manageService = new ManageService()