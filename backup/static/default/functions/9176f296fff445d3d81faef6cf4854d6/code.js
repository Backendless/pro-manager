BackendlessUI.Functions.Custom['fn_9176f296fff445d3d81faef6cf4854d6'] = async function fn_9176f296fff445d3d81faef6cf4854d6(serviceName, podName, host) {
return (await (async function(serviceName, podName, host) {
	  const io = await BackendlessUI.requireModule('https://cdn.jsdelivr.net/npm/socket.io-client@4.4.0/dist/socket.io.min.js')
	  socket = io.connect(`${host}`, { transports : ['websocket'] })
	  const output = document.querySelector('.ServerLogs__ContentLogs')
	  const outputWrap = document.querySelector('.ServerLogs__ContentWrapper')


	  if(output) {
	    output.innerText = ''
	  }

	  logOriginalText = '';
	  logFileText = ''

	  const itemsBuffer = []

	  function throttle(cb, delay) {
	    let wait = false
	    let storedArgs = null

	    function checkStoredArgs() {
	      if (storedArgs == null) {
	        wait = false
	      } else {
	        cb(...storedArgs)
	        storedArgs = null
	        setTimeout(checkStoredArgs, delay)
	      }
	    }

	    return (...args) => {
	      if (wait) {
	        storedArgs = args
	        return
	      }

	      cb(...args)
	      wait = true
	      setTimeout(checkStoredArgs, delay)
	    }
	  }

	  function insertBr (str) {
	    const regex = /\n/g;
	    return str.replace(regex, '<br>');
	  }

	  if(output) {
	    const lazyMessageReceiver = throttle(() => {

	      output.innerText += `${ itemsBuffer.join('') }`
	      itemsBuffer.length = 0
	      if(!logStopFollow) {
	        outputWrap.scrollTop = outputWrap.scrollHeight
	      }
	    }, 100)

	    socket.on(`${ serviceName }-log`, function (data) {

	      logFileText = logFileText + data;
	      let dataWithBr = insertBr(data);
	      logOriginalText = logOriginalText + dataWithBr;

	      itemsBuffer.push(data)

	      lazyMessageReceiver()

	    })

	    socket.emit ('service-logs:subscribe', {
	      "serviceName":`${serviceName}`,
	      "podName":`${podName}`,
	      "channelName": `${serviceName}-log`
	    });

	    return socket
	  }

})(serviceName, podName, host))
}