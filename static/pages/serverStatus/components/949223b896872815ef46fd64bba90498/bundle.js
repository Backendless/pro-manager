define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var origin;

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


  if (getObjectProperty(___arguments.context.appData, 'previousService')) {
    if (getObjectProperty((getObjectProperty(___arguments.context.appData, 'openSocket')), 'connected')) {
      await (async function(serviceName) {

      	  socket.emit ('service-logs:unsubscribe', {
      	    "serviceName":`${serviceName}`,
      	    "channelName":`${serviceName}-logs`
      	  });

      	  socket.disconnect();
      })((getObjectProperty(___arguments.context.appData, 'previousService')));
    }
  }
  (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('serviceLogs', ({ 'serviceName': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'name')),'pageServerStatus': 'ServerLogs','followBtnLabel': (getObjectProperty(___arguments.context.pageData, 'followBtnLabel')),'downloadBtnLabel': 'Download' }));
  origin = (await BackendlessUI.Functions.Custom['fn_1e23a48a29f82b3fc1f647fd98cb53f6']());
  ___arguments.context.appData['openSocket'] = (await (async function(serviceName, host) {
  	const io = await BackendlessUI.requireModule('https://cdn.jsdelivr.net/npm/socket.io-client@4.4.0/dist/socket.io.min.js');

  	  const output = document.querySelector('.ServerLogs__ContentLogs');

  	  output.innerHTML = '';

  	  logOriginalText = '';
  	  logFileText = ''

  	  socket = io.connect(`${host}`, { transports : ['websocket'] });

  	  socket.on (`${serviceName}-logs`, function (data) {
  	    logFileText = logFileText + data;
  	    let dataWithBr = insertBr(data);
  	    logOriginalText = logOriginalText + dataWithBr;

  	     output.innerHTML = `${output.innerHTML}${dataWithBr}`;

  	     if(!logStopFollow) {
  	       output.scrollTop = output.scrollHeight;
  	     }
  	  });

  	  socket.emit ('service-logs:subscribe', {
  	    "serviceName":`${serviceName}`,
  	    "channelName": `${serviceName}-logs`
  	  });


  	  return socket

  	  function insertBr (str) {
  	    const regex = /\n/g;
  	    return str.replace(regex, '<br>');
  	  }



  })((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'name')), origin));
  ___arguments.context.appData['previousService'] = (getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'name'));

  },
  /* handler:onClick */
  /* content */
}))
