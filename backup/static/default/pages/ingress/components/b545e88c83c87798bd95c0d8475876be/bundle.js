define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
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


  if (getObjectProperty(___arguments.context.pageData, 'consulData')) {
    (function (componentUid, dataModel) { ___arguments.context.setComponentDataStoreByUid(componentUid, dataModel) })('bff4d8ac579f78a648132998464e4919', ({ [`repeaterItem`]: ({ [`type`]: (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'consulData')), 'type')),[`domain`]: (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'consulData')), 'domain')) }),[`btnLabel`]: 'Delete' }));
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bff4d8ac579f78a648132998464e4919'))['visibility'] = 'visible';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bff4d8ac579f78a648132998464e4919'))['opacity'] = 1;
  }

  },
  /* handler:onClick */
  /* handler:onDisabledStateAssignment */
  ['onDisabledStateAssignment'](___arguments) {
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



  return ((getObjectProperty(___arguments.context.pageData, 'consulData')) == null || (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'consulData')), 'domain')) == null)

  },
  /* handler:onDisabledStateAssignment */
  /* content */
}))
