define([], () => ({
  /* content */
  /* handler:onStyleAssignment */
  async ['onStyleAssignment'](___arguments) {
      await (async function() {
  	const elemList = document.querySelector('.install__ProgressContainer')

  	elemList.scrollTop = elemList.scrollHeight;
  })();

  },
  /* handler:onStyleAssignment */
  /* content */
}))
