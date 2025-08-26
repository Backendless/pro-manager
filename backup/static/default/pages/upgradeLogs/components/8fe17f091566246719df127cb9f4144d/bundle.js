define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
      await (async function() {
  	const output = document.querySelector('.ServerLogs__ContentLogs')

  	  if(output) {
  	    output.innerText = ''
  	  }
  })();

  },
  /* handler:onClick */
  /* content */
}))
