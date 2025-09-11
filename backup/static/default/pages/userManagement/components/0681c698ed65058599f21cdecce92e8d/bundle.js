define([], () => ({
  /* content */
  /* handler:onChange */
  ['onChange'](___arguments) {
      if (!___arguments.value) {
    ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['validationMessageName'] = true;
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('42fc2f835fa3bf01cbaf06e27b5b5e3b', true);
  } else {
    ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['validationMessageName'] = false;
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('42fc2f835fa3bf01cbaf06e27b5b5e3b', false);
  }

  },
  /* handler:onChange */
  /* content */
}))
