define([], () => ({
  /* content */
  /* handler:onEnter */
  onEnter(___arguments) {
      localStorage.removeItem('originLoad');
  ___arguments.context.pageData['btnUpgradeLabel'] = 'Upgrade';
  ___arguments.context.pageData['btnUpgradeDisabled'] = true;
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '0.5';

  },
  /* handler:onEnter */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* content */
}))
