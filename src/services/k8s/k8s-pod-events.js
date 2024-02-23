import { k8sConfig } from '../../config/k8s-config'
import { k8sCoreV1Api } from '../k8s/k8s'

export async function getPodEvents(podName) {
  try {
    const result = await k8sCoreV1Api.listNamespacedEvent(await k8sConfig.getNamespace())
    let podEvents = result.body.items.filter(event => event.involvedObject.kind === 'Pod' && event.involvedObject.name === podName)
    return getPodEventsLog(podEvents)
  } catch (error) {
    console.error('Error fetching pod events:', error)
    throw error
  }
}

function getPodEventsLog(podEvents) {
  if (podEvents.length > 0) {
    const header = 'LAST SEEN'.padEnd(16) + 'TYPE'.padEnd(16) + 'REASON'.padEnd(16) + 'OBJECT'.padEnd(40) + 'MESSAGE'
    return `<pre>${header}\n${podEvents.map(p => `${calculateLastSeenTime(p.lastTimestamp).padEnd(16)}${p.type.padEnd(16)}${p.reason.padEnd(16)}${getPodName(p).padEnd(40)}${p.message}`).join('\n')}</pre>`
  }

  function getPodName(podEvent) {
    return "pod/" + podEvent.involvedObject.name
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
}