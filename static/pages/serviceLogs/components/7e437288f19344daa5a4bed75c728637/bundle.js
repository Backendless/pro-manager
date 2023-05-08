define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
    function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  ___arguments.context.appData['logsTab'] = false;
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('b2b16f278a0d4d44db4cc3ac8be37377'))['display'] = 'none';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('232827adb9a5f36d5621ab56e377cca9'))['display'] = 'none';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('983986cbcdcc689ff2fa7b44739c6eaa'))['display'] = 'none';
  if (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('7e437288f19344daa5a4bed75c728637')).length == 1) {
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('7e437288f19344daa5a4bed75c728637')), 'ServerLogs__TabsLabel--active');
    if (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('184ed6e69bd6d8f1e8fc35c7403c36e5')).length > 1) {
      ((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('184ed6e69bd6d8f1e8fc35c7403c36e5')).pop();
    }
    if (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('64b6f006eead4076cacfac687291d9c6')).length > 1) {
      ((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('64b6f006eead4076cacfac687291d9c6')).pop();
    }
  }

  },
  /* handler:onClick */
  /* content */
}))
