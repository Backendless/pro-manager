define([], () => ({
  /* content */
  /* handler:onChange */
  ['onChange'](___arguments) {
      if (!___arguments.value) {
    ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['validationMessage'] = 'This field is required';
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d50a1aa5921ba06c583457a897f2a8f7', true);
  } else {
    if ((new RegExp('^[a-z0-9.-]+$', '')).test(___arguments.value)) {
      ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['domain'] = ___arguments.value;
      ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['validationMessage'] = null;
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d50a1aa5921ba06c583457a897f2a8f7', false);
    } else {
      ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['validationMessage'] = 'Domain must consist of lowercase alphanumeric characters, \'-\' or \'.\'';
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d50a1aa5921ba06c583457a897f2a8f7', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))
