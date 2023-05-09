define([], () => ({
  /* content */
  /* handler:onDynamicItemsAssignment */
  async ['onDynamicItemsAssignment'](___arguments) {
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


  await (async function() {
  	const elemList = document.querySelector('.ServerLogs__content')

  	elemList.scrollTop = elemList.scrollHeight;
  })();

  return (getObjectProperty(___arguments.context.appData, 'logUpgradeData'))

  },
  /* handler:onDynamicItemsAssignment */
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


  if (getObjectProperty(___arguments.context.appData, 'previousServiceUpgrade')) {
    if (getObjectProperty((getObjectProperty(___arguments.context.appData, 'opensScketUpgrade')), 'connected')) {
      await (async function(serviceName) {

      	  socketUpgrade.emit ('service-logs:unsubscribe', {
      	    "serviceName":`${serviceName}`,
      	    "channelName":`${serviceName}-log`
      	  });

      	  socketUpgrade.disconnect();



      })((getObjectProperty(___arguments.context.appData, 'previousServiceUpgrade')));
    }
  }

  },
  /* handler:onBeforeUnmount */
  /* content */
}))
