define([], () => ({
  /* content */
  /* handler:onChange */
  ['onChange'](___arguments) {
      if (!___arguments.value) {
    ___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756')['validationMessageName'] = 'This field is required';
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('4b695664b7e53de7f71eeca54673416a', true);
  } else {
    if ((new RegExp('^[a-z0-9.-]+$', '')).test(___arguments.value)) {
      ___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756')['validationMessageName'] = null;
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('4b695664b7e53de7f71eeca54673416a', false);
    } else {
      ___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756')['validationMessageName'] = 'Certificate name must consist of lowercase alphanumeric characters, \'-\' or \'.\'';
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('4b695664b7e53de7f71eeca54673416a', true);
    }
  }

  },
  /* handler:onChange */
  /* handler:onReadOnlyStateAssignment */
  ['onReadOnlyStateAssignment'](___arguments) {
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



  return (!((getObjectProperty(___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756'), 'btnLabel')) == 'Create'))

  },
  /* handler:onReadOnlyStateAssignment */
  /* content */
}))
