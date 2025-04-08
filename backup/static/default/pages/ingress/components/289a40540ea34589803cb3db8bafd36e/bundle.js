define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d5c48d6dcb1275ad8832206bf277efe5'))['opacity'] = 0;
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d5c48d6dcb1275ad8832206bf277efe5'))['visibility'] = 'hidden';
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('62210f1a74151d6da6b865d2250faaaa', false);

  },
  /* handler:onClick */
  /* content */
}))
