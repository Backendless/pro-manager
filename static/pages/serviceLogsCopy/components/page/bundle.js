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


  await (async function() {
  	logClear = false;
  	stopFollow = false;
  })();
  localStorage.removeItem('originLoad');
  if (!(getObjectProperty(___arguments.context.pageData, 'serviceName'))) {
    ___arguments.context.pageData['serviceName'] = 'bl-server';
  }
  if (!(getObjectProperty(___arguments.context.appData, 'logData'))) {
    ___arguments.context.appData['logData'] = [];
    ___arguments.context.appData['openSocket'] = (await (async function(serviceName, logsArray) {
    	const io = await BackendlessUI.requireModule('https://cdn.jsdelivr.net/npm/socket.io-client@4.4.0/dist/socket.io.min.js');

    	 socket = io.connect('http://localhost:5051', { transports : ['websocket'] });


    	  socket.on (`${serviceName}-logs`, function (data) {
    	    logsArray.push (data);
    	  });

    	  socket.emit ('service-logs:subscribe', {
    	    "serviceName":`${serviceName}`,
    	    "channelName": `${serviceName}-logs`
    	  });

    	  return socket








    })((getObjectProperty(___arguments.context.pageData, 'serviceName')), (getObjectProperty(___arguments.context.appData, 'logData'))));
    ___arguments.context.appData['previousService'] = (getObjectProperty(___arguments.context.pageData, 'serviceName'));
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
