define([], () => ({
  /* content */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* handler:onEnter */
  async ['onEnter'](___arguments) {
    var error;


  localStorage.removeItem('originLoad');
  try {
    ___arguments.context.pageData['authEnabled'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/user/auth/enabled', null, null));

  } catch (error) {
    console.log(error);

  }

  },
  /* handler:onEnter */
  /* content */
}))
