define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('169ca04218c3102f67d1f8aef66f25f5'))['visibility'] = 'hidden';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('169ca04218c3102f67d1f8aef66f25f5'))['opacity'] = 0;
  ___arguments.context.pageData['btnRemoveDisabled'] = true;
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('169ca04218c3102f67d1f8aef66f25f5', false);
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('ae42dd3544d537160fb2c47fb5a4f00e', false);

  },
  /* handler:onClick */
  /* content */
}))
