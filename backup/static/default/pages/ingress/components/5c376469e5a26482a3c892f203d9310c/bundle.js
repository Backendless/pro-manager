define([], () => ({
  /* content */
  /* handler:onChange */
  ['onChange'](___arguments) {
      if (!___arguments.value) {
    ___arguments.context.getComponentDataStoreByUid('9d4b6753fe658a192d7a5cc853291a48')['validationMessage'] = 'This field is required';
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('62210f1a74151d6da6b865d2250faaaa', true);
  } else {
    if ((new RegExp('[a-zA-Z0-9.\\-_+]{1,}@[^\\W\\.][a-zA-Z0-9\\-]{0,}\\.[a-zA-Z]{1,}', 'g')).test(___arguments.value)) {
      ___arguments.context.getComponentDataStoreByUid('9d4b6753fe658a192d7a5cc853291a48')['email'] = ___arguments.value;
      ___arguments.context.getComponentDataStoreByUid('9d4b6753fe658a192d7a5cc853291a48')['validationMessage'] = null;
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('62210f1a74151d6da6b865d2250faaaa', false);
    } else {
      ___arguments.context.getComponentDataStoreByUid('9d4b6753fe658a192d7a5cc853291a48')['validationMessage'] = 'Email is not valid';
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('62210f1a74151d6da6b865d2250faaaa', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))
