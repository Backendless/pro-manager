define([], () => ({
  /* content */
  /* handler:onEnter */
  async ['onEnter'](___arguments) {
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


  localStorage.removeItem('originLoad');
  if (!(getObjectProperty(___arguments.context.appData, 'logUpgradeData')) && (getObjectProperty(___arguments.context.pageData, 'jobName'))) {
    ___arguments.context.appData['logUpgradeData'] = [];
    ___arguments.context.appData['opensScketUpgrade'] = (await (async function(logsArray, serviceName, podName) {
    	const io = await BackendlessUI.requireModule('https://cdn.jsdelivr.net/npm/socket.io-client@4.4.0/dist/socket.io.min.js');

    	  socketUpgrade = io.connect('http://localhost:5051', { transports : ['websocket'] });

    	  socketUpgrade.on (`${serviceName}-log`, function (data) {
    	    logsArray.push (data);
    	  });

    	  socketUpgrade.emit ('service-logs:subscribe', {
    	    "serviceName":`${serviceName}`,
    	    "podName":`${podName}`,
    	    "channelName": `${serviceName}-log`
    	  });


    	  return socketUpgrade
    })((getObjectProperty(___arguments.context.appData, 'logUpgradeData')), (getObjectProperty(___arguments.context.pageData, 'jobName')), (getObjectProperty(___arguments.context.pageData, 'podName'))));
    ___arguments.context.appData['previousServiceUpgrade'] = (getObjectProperty(___arguments.context.pageData, 'jobName'));
  }

  },
  /* handler:onEnter */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* content */
}))
