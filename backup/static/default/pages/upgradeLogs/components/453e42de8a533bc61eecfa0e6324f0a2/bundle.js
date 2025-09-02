define([], () => ({
  /* content */
  /* handler:onScroll */
  async ['onScroll'](___arguments) {
      if (___arguments.scrollBottom > 10) {
    await (async function() {
    	logStopFollow = true
    	return logStopFollow
    })();
  }

  },
  /* handler:onScroll */
  /* content */
}))
