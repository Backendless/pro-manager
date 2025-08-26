define([], () => ({
  /* content */
  /* handler:onContentAssignment */
  ['onContentAssignment'](___arguments) {
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



  return ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919'), 'repeaterItem')) ? String(getObjectProperty((getObjectProperty(___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919'), 'repeaterItem')), 'domain')) + String('?') : '')

  },
  /* handler:onContentAssignment */
  /* content */
}))
