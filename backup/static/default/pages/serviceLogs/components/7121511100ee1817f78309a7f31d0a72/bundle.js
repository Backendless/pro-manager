define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
      ___arguments.context.pageData['followBtnLabel'] = ((await (async function() {
  	logStopFollow = !logStopFollow;
  	return logStopFollow
  })()) ? 'Resume Log Updates' : 'Pause Log Updates');

  },
  /* handler:onClick */
  /* content */
}))
