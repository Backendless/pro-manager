define([], () => ({
  /* content */
  /* handler:onContentAssignment */
  async onContentAssignment(___arguments) {
      if ((___arguments.context.pageData['serviceName']) != (___arguments.context.pageData['oldServiceName'])) {
    if (___arguments.context.pageData['oldServiceName']) {
      console.log(String('старая строка') + String(___arguments.context.pageData['oldServiceName']));
    }
    ___arguments.context.pageData['oldServiceName'] = (___arguments.context.pageData['serviceName']);
    console.log('вызов');
    await (async function(serviceName) {
    	//console.log (serviceName);

    	const output = document.querySelector ('.block');

    	while (output.firstChild) {
    	    output.removeChild(output.firstChild);
    	}

    	const io = await BackendlessUI.requireModule('https://cdn.jsdelivr.net/npm/socket.io-client@4.4.0/dist/socket.io.min.js');

    	const socket = io.connect('http://localhost:5051', { transports : ['websocket'] });

    	console.log(socket.connected)


    	  socket.on (`${serviceName}-logs`, function (data) {
    	    let outputItem = document.createElement ('span');
    	    outputItem.innerHTML = data;
    	    output.append (outputItem);
    	    // console.log(data);
    	    // console.log(socket.connected);
    	  });

    	  socket.emit ('service-logs:subscribe', {
    	    "serviceName":`${serviceName}`,
    	    "channelName": `${serviceName}-logs`
    	  });

    	  setTimeout ( () => {
    	    console.log ('stop');

    	    socket.emit ('service-logs:unsubscribe', {
    	    "serviceName":`${serviceName}`,
    	    "channelName":`${serviceName}-logs`
    	  });

    	  },2000  )







    })((___arguments.context.pageData['serviceName']));
  }

  return 'Content'

  },
  /* handler:onContentAssignment */
  /* content */
}))
