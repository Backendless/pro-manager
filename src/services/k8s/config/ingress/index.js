import { IngressApiConfig } from './ingress-api-config'
import { IngressConsoleConfig } from './ingress-console-config'
import { IngressRtConfig } from './ingress-rt-config'

const configs = {
    'api': () => _populateTypeLabel( 'api', new IngressApiConfig().config ),
    'console': () => _populateTypeLabel('console', new IngressConsoleConfig().config),
    'rt': () => _populateTypeLabel('rt', new IngressRtConfig().config ),
}

export function getIngressConfig(type) {
    const config = configs[type]
    return config ? config() : null
}

export function getIngressTypes() {
    return Object.keys(configs)
}

export function getIngressLabel() {
    return {
        'bl-ingress': 'domain'
    }
}

export function getIngressLabelToSelect() {
    return 'bl-ingress=domain'
}

export function getTypeFromLabels(labels){
    return labels['bl-ingress-type']
}

function _populateTypeLabel(type, config) {
    config.metadata.labels['bl-ingress-type'] = type
    return config
}