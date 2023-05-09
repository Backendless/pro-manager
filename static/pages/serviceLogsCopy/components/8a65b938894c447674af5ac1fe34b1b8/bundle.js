define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
      await (async function() {
  	const output = document.querySelector('#logOutput');
  	output.value = '';
  	logClear = true;
  })();

  },
  /* handler:onClick */
  /* content */
}))
