define([], () => ({
  /* content */
  /* handler:onChange */
  ['onChange'](___arguments) {
      if (!___arguments.value) {
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('42fc2f835fa3bf01cbaf06e27b5b5e3b', true);
  } else {
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('42fc2f835fa3bf01cbaf06e27b5b5e3b', false);
  }

  },
  /* handler:onChange */
  /* content */
}))
