define([], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      await ( async function (pageName, pageData) { BackendlessUI.goToPage(pageName, pageData) })('serverStatus', ({ 'pageServerStatus': 'ServerStatus' }));

  },
  /* handler:onClick */
  /* content */
}))
