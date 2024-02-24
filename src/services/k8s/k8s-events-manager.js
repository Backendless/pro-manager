import { k8sConfig } from '../../config/k8s-config'
import { k8sCoreV1Api } from './k8s'

export async function getPodEvents(podName) {
  try {
    const result = await k8sCoreV1Api.listNamespacedEvent(await k8sConfig.getNamespace())
    let podEvents = result.body.items.filter(event => event.involvedObject.kind === 'Pod' && event.involvedObject.name === podName)

    if (podEvents.length > 0) {
      const header = 'LAST SEEN'.padEnd(16) + 'TYPE'.padEnd(16) + 'REASON'.padEnd(16) + 'OBJECT'.padEnd(40) + 'MESSAGE'
      return `<pre>${header}\n${podEvents.map(e => `${calculateLastSeenTime(e.lastTimestamp).padEnd(16)}${e.type.padEnd(16)}${e.reason.padEnd(16)}${("pod/" + e.involvedObject.name).padEnd(40)}${e.message}`).join('\n')}</pre>`
    }

  } catch (error) {
    console.error('Error fetching pod events:', error)
    throw error
  }
}

export async function getDeploymentEvents(serviceName) {
  try {
    const result = await k8sCoreV1Api.listNamespacedEvent(await k8sConfig.getNamespace())
    let deploymentEvents = result.body.items.filter(event => event.involvedObject.kind === 'Deployment' && event.involvedObject.name === serviceName)

    if (deploymentEvents.length > 0) {
      const header = 'LAST SEEN'.padEnd(16) + 'TYPE'.padEnd(16) + 'REASON'.padEnd(20) + 'OBJECT'.padEnd(30) + 'MESSAGE'
      return `<pre>${header}\n${deploymentEvents.map(e => `${calculateLastSeenTime(e.lastTimestamp).padEnd(16)}${e.type.padEnd(16)}${e.reason.padEnd(20)}${("deployment/" + e.involvedObject.name).padEnd(30)}${e.message}`).join('\n')}</pre>`
    }
    
  } catch (error) {
    console.error('Error fetching deployment events:', error)
    throw error
  }
}

function calculateLastSeenTime(time) {
  const lastTimestamp = new Date(time)
  const currentTime = new Date()
  const timeDifference = currentTime - lastTimestamp

  const hours = Math.floor(timeDifference / (1000 * 60 * 60))
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

  let result = ''

  if (hours > 0) {
    result += hours + 'h'
  }
  if (minutes > 0) {
    result += minutes + 'm'
  }
  if (seconds > 0) {
    result += seconds + 's'
  }
  return result
}