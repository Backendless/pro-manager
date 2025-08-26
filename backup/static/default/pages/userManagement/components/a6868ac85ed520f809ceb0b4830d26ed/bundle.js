define([], () => ({
  /* content */
  /* handler:onChange */
  ['onChange'](___arguments) {
    function getObjectProperty(object, propPath) {
  if (typeof propPath !== 'string' || object[propPath] !== undefined) {
    return object[propPath]
  }

  const propsNamesList = propPath.split('.')

  let result = object

  for (let i = 0; i < propsNamesList.length; i++) {
    if (!result || result[propsNamesList[i]] === undefined) {
      return
    }

    result = result[propsNamesList[i]]
  }

  return result
}


  if (!___arguments.value) {
    ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['validationMessagePass'] = true;
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d50a1aa5921ba06c583457a897f2a8f7', true);
  } else {
    ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['validationMessagePass'] = false;
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d50a1aa5921ba06c583457a897f2a8f7', false);
  }
  if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'confirmPassword')) {
    if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'password')) != (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'confirmPassword'))) {
      ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['validationMessagePass'] = true;
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('76b375976525da5784a688f366843054', true);
    } else {
      ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['validationMessagePass'] = false;
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('76b375976525da5784a688f366843054', false);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))
