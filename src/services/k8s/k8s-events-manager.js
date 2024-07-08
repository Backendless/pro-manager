import { k8sConfig } from '../../config/k8s-config'
import { k8sCoreV1Api } from './k8s'
import { Logger } from '../../logger'

const logger = Logger('k8s-events-manager')

export async function getPodEvents(podName) {
  try {
    const result = await k8sCoreV1Api.listNamespacedEvent(await k8sConfig.getNamespace())
    const podEvents = result.body.items.filter(event => event.involvedObject.kind === 'Pod' && event.involvedObject.name === podName)
    const resultPodEvents = []

    podEvents.forEach((podEvent) => {
      resultPodEvents.push({
        lastSeen: calculateLastSeenTime(podEvent.lastTimestamp),
        type:     podEvent.type,
        reason:   podEvent.reason,
        name:     'pod/' + podEvent.involvedObject.name,
        message:  podEvent.message
      })
    })

    checkIfThereIsNoEventsAndAddMessage( resultPodEvents )

    return resultPodEvents
  } catch (err) {
    logger.error(`Error fetching pod events: ${err}`)
    throw err
  }
}

export async function getDeploymentEvents(serviceName) {
  try {
    const result = await k8sCoreV1Api.listNamespacedEvent(await k8sConfig.getNamespace())
    const deploymentEvents = result.body.items.filter(event => event.involvedObject.kind === 'Deployment' && event.involvedObject.name === serviceName)
    const resultDeploymentEvents = []

    deploymentEvents.forEach((deploymentEvent) => {
      resultDeploymentEvents.push({
        lastSeen: calculateLastSeenTime(deploymentEvent.lastTimestamp),
        type:     deploymentEvent.type,
        reason:   deploymentEvent.reason,
        name:     'deployment/' + deploymentEvent.involvedObject.name,
        message:  deploymentEvent.message
      })
    })

    checkIfThereIsNoEventsAndAddMessage( resultDeploymentEvents )

    return resultDeploymentEvents
  } catch (err) {
    logger.error(`Error fetching deployment events: ${err}`)
    throw err
  }
}

function checkIfThereIsNoEventsAndAddMessage( events ) {
  if (events.length < 1) {
    events.push({
      lastSeen: '0m0s',
      type:     'Empty',
      reason:   'Empty',
      name:     'Empty',
      message:  'There is no events during last hour'
    })
  }
}

function calculateLastSeenTime(time) {
  const lastTimestamp = new Date(time)
  const currentTime = new Date()
  const timeDifference = currentTime - lastTimestamp

  const hours = Math.floor(timeDifference / (1000 * 60 * 60))
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

  let lastSeen = ''

  if (hours > 0) {
    lastSeen += hours + 'h'
  }
  if (minutes > 0) {
    lastSeen += minutes + 'm'
  }
  if (seconds > 0) {
    lastSeen += seconds + 's'
  }
  return lastSeen
}