define([], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      if (___arguments.context.appData['previousService']) {
    if ((___arguments.context.appData['openSocket'])['connected']) {
      await (async function(serviceName) {

      	  socket.emit ('service-logs:unsubscribe', {
      	    "serviceName":`${serviceName}`,
      	    "channelName":`${serviceName}-logs`
      	  });

      	  socket.disconnect();



      })((___arguments.context.appData['previousService']));
    }
  }
  ;await ( async function (pageName, pageData){ BackendlessUI.goToPage(pageName, pageData) })('serviceLogs', ({ 'serviceName': (___arguments.context.dataModel['name']) }));
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


  })((___arguments.context.dataModel['name']), (___arguments.context.appData['logData'])));
  ___arguments.context.appData['previousService'] = (___arguments.context.dataModel['name']);

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList;


  classList = ['aside__TabContentItem'];
  if ((___arguments.context.dataModel['name']) == (___arguments.context.pageData['serviceName'])) {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))
