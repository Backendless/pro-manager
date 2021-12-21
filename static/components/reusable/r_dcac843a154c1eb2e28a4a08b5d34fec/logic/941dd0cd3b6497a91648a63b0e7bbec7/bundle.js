define([], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      ;await ( async function (pageName, pageData){ BackendlessUI.goToPage(pageName, pageData) })('serviceLogs', ({ 'serviceName': (___arguments.context.dataModel['name']) }));
  ___arguments.context.appData['logData'] = [];
  await (async function(serviceName, logsArray) {
  	const io = await BackendlessUI.requireModule('https://cdn.jsdelivr.net/npm/socket.io-client@4.4.0/dist/socket.io.min.js');

  	const socket = io.connect('http://localhost:5051', { transports : ['websocket'] });

  	  socket.on (`${serviceName}-logs`, function (data) {
  	    logsArray.push (data);
  	  });

  	  socket.emit ('service-logs:subscribe', {
  	    "serviceName":`${serviceName}`,
  	    "channelName": `${serviceName}-logs`
  	  });

  	  setTimeout ( () => {

  	    socket.emit ('service-logs:unsubscribe', {
  	    "serviceName":`${serviceName}`,
  	    "channelName":`${serviceName}-logs`
  	    });
  	    socket.disconnect();

  	  },250 )







  })((___arguments.context.dataModel['name']), (___arguments.context.appData['logData']));

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
