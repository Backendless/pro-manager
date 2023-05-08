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

  return (getObjectProperty(___arguments.context.appData, 'logСurrentUpgradeData'))

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


  if (getObjectProperty(___arguments.context.appData, 'previousUpgrade')) {
    if (getObjectProperty((getObjectProperty(___arguments.context.appData, 'opensSoketCurrentUpgrade')), 'connected')) {
      await (async function(serviceName) {

      	  socketCurrentUpgrade.emit ('service-logs:unsubscribe', {
      	    "serviceName":`${serviceName}`,
      	    "channelName":`${serviceName}-log`
      	  });

      	  socketCurrentUpgrade.disconnect();



      })((getObjectProperty(___arguments.context.appData, 'previousUpgrade')));
    }
  }

  },
  /* handler:onBeforeUnmount */
  /* handler:onBeforeMount */
  onBeforeMount(___arguments) {
      ___arguments.context.appData['logСurrentUpgradeData'] = [];

  },
  /* handler:onBeforeMount */
  /* content */
}))
