define([], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      ;await ( async function (pageName, pageData){ BackendlessUI.goToPage(pageName, pageData) })('serviceLogs', ({ 'serviceName': (___arguments.context.dataModel['name']) }));

  },
  /* handler:onClick */
  /* content */
}))
