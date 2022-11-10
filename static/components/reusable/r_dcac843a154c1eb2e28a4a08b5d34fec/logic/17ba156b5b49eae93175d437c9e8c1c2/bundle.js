define([], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
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
  (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('upgradeLogs', ({ 'pageUpgrade': 'upgradeLogs','jobName': (getObjectProperty(___arguments.context.dataModel, 'jobName')),'podName': (getObjectProperty(___arguments.context.dataModel, 'podName')) }));
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
  })((getObjectProperty(___arguments.context.appData, 'logUpgradeData')), (getObjectProperty(___arguments.context.dataModel, 'jobName')), (getObjectProperty(___arguments.context.dataModel, 'podName'))));
  ___arguments.context.appData['previousServiceUpgrade'] = (getObjectProperty(___arguments.context.dataModel, 'jobName'));

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList;

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


  classList = ['aside__TabContentItem'];
  if ((getObjectProperty(___arguments.context.dataModel, 'jobName')) == (getObjectProperty(___arguments.context.pageData, 'jobName'))) {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))
