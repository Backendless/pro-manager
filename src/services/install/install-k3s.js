import { Logger } from '../../logger'
import { executeInShell } from '../../utils/shell'

const logger = Logger('install-k3s')
export const installK3s = async () => {
    logger.info('installing k3s')
    await executeInShell('curl -sfL https://get.k3s.io | sh - ')
    await executeInShell('mkdir /root/.kube ')
    await executeInShell('echo "export KUBECONFIG=/root/.kube/config" >> /root/.bashrc ')
    await executeInShell('k3s kubectl config view --raw > "$KUBECONFIG" ')
}