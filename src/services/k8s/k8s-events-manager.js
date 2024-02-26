import { k8sConfig } from '../../config/k8s-config'
import { k8sCoreV1Api } from './k8s'

export async function getPodEvents(podName) {
  try {
    const result = await k8sCoreV1Api.listNamespacedEvent(await k8sConfig.getNamespace())
    return result.body.items.filter(event => event.involvedObject.kind === 'Pod' && event.involvedObject.name === podName)
  } catch (error) {
    console.error('Error fetching pod events:', error)
    throw error
  }
}

export async function getDeploymentEvents(serviceName) {
  try {
    const result = await k8sCoreV1Api.listNamespacedEvent(await k8sConfig.getNamespace())
    return result.body.items.filter(event => event.involvedObject.kind === 'Deployment' && event.involvedObject.name === serviceName)   
  } catch (error) {
    console.error('Error fetching deployment events:', error)
    throw error
  }
}