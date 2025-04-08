define([], () => ({
  /* content */
  /* handler:onContentAssignment */
  async ['onContentAssignment'](___arguments) {
    function getObjectProperty(object, propPath) {
  if (typeof propPath !== 'string' || object[propPath] !== undefined) {
    return object[propPath]
  }

  const propsNamesList = propPath.split('.')

  let result = object

  for (let i = 0; i < propsNamesList.length; i++) {
    if (!result || result[propsNamesList[i]] === undefined) {
      return
    }

    result = result[propsNamesList[i]]
  }

  return result
}



  return ((getObjectProperty(___arguments.context.pageData, 'deploymentEvents')) ? (await (async function(deploymentEvents) {
	if (deploymentEvents.length > 0) {
	  const header = 'LAST SEEN'.padEnd(16) + 'TYPE'.padEnd(16) + 'REASON'.padEnd(18) + 'OBJECT'.padEnd(36) + 'MESSAGE'
	  return `<pre>${header}\n${deploymentEvents.map(e => `${e.lastSeen.padEnd(16)}${e.type.padEnd(16)}${e.reason.padEnd(18)}${e.name.padEnd(36)}${e.message}`).join('\n')}</pre>`
	}
})((getObjectProperty(___arguments.context.pageData, 'deploymentEvents')))) : null)

  },
  /* handler:onContentAssignment */
  /* content */
}))
