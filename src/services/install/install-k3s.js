import { Logger } from '../../logger'
import { executeInShell } from '../../utils/shell'

const logger = Logger('install-k3s')
export const installK3s = async () => {
    logger.info('installing k3s')
    return executeInShell('curl -sfL https://get.k3s.io | sh - ' +
        '&& mkdir ~/.kube ' +
        '&& echo "export KUBECONFIG=~/.kube/config" >> ~/.bashrc ' +
        '&& source ~/.bashrc ' +
        '&& sudo k3s kubectl config view --raw > "$KUBECONFIG" ' +
        '&& kubectl get nodes')
}