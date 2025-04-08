BackendlessUI.Functions.Custom['fn_9ee1a48ea72b90ad38188d610893128b'] = async function fn_9ee1a48ea72b90ad38188d610893128b(serviceName, podName) {
return (await (async function(serviceName, podName) {
	  const io = await BackendlessUI.requireModule('https://cdn.jsdelivr.net/npm/socket.io-client@4.4.0/dist/socket.io.min.js')
	  socketCurrentUpgrade = io.connect('http://localhost:5051', { transports : ['websocket'] })
	  const output = document.querySelector('.ServerLogs__ContentLogs')
	  const outputWrap = document.querySelector('.ServerLogs__ContentWrapper')

	  if(output) {
	    output.innerText = ''
	  }

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

	  if(output) {
	    const lazyMessageReceiver = throttle(() => {

	      output.innerText += `${ itemsBuffer.join('') }`
	      itemsBuffer.length = 0

	      if(!logStopFollow) {
	        outputWrap.scrollTop = outputWrap.scrollHeight
	      }

	    }, 100)

	    socketCurrentUpgrade.on(`${ serviceName }-log`, function (data) {

	      itemsBuffer.push(data)

	      lazyMessageReceiver()
	    })

	    socketCurrentUpgrade.emit ('service-logs:subscribe', {
	      "serviceName":`${serviceName}`,
	      "podName":`${podName}`,
	      "channelName": `${serviceName}-log`
	    });

	    return socketCurrentUpgrade
	  }
})(serviceName, podName))
}