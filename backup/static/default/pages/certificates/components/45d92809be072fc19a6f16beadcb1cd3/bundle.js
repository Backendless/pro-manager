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
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('400fba0802880a93bb759cb7cbb9123f', true);
  } else {
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('400fba0802880a93bb759cb7cbb9123f', false);
  }
  if (___arguments.value) {
    if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'password')) != (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'confirmPassword'))) {
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('76b375976525da5784a688f366843054', true);
    } else {
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('76b375976525da5784a688f366843054', false);
    }
  } else {
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('76b375976525da5784a688f366843054', false);
  }

  },
  /* handler:onChange */
  /* content */
}))
