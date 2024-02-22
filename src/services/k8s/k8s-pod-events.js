import util from 'node:util'

const exec = util.promisify(require('node:child_process').exec)

export async function getPodEvents(podName) {
  const command = `kubectl get events --field-selector involvedObject.kind=Pod,involvedObject.name=${podName}`
  try {
    const { stdout, stderr } = await exec(command)
    if (stderr) {
      console.error(`Error executing command: ${stderr}`)
      return
    }
    return stdout
  } catch (error) {
    console.error(`Error executing command: ${error.message}`)
    return
  }
}