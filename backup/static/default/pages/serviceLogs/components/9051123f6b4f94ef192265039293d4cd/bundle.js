define([], () => ({
  /* content */
  /* handler:onBeforeUnmount */
  async ['onBeforeUnmount'](___arguments) {
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


  if ((getObjectProperty(___arguments.context.appData, 'previousService')) && (getObjectProperty(___arguments.context.appData, 'previousPodService'))) {
    if (getObjectProperty((getObjectProperty(___arguments.context.appData, 'openSocket')), 'connected')) {
      await (async function(serviceName, podName) {

      	  socket.emit ('service-logs:unsubscribe', {
      	    "serviceName":`${serviceName}`,
      	    "podName":`${podName}`,
      	    "channelName":`${serviceName}-logs`
      	  });

      	  socket.disconnect();


      })((getObjectProperty(___arguments.context.appData, 'previousService')), (getObjectProperty(___arguments.context.appData, 'previousPodService')));
    }
  }

  },
  /* handler:onBeforeUnmount */
  /* content */
}))
