define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'hidden';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 0;
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d50a1aa5921ba06c583457a897f2a8f7', false);
  await (async function() {
  	const body = document.querySelector('body');
  	body.style.overflow = 'auto';
  })();

  },
  /* handler:onClick */
  /* content */
}))
