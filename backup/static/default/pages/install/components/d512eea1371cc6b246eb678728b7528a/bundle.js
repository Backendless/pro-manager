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


  if ((getObjectProperty(___arguments.context.dataModel, 'name')) == 'Nothing found' || (getObjectProperty(___arguments.context.dataModel, 'name')) == 'Loading...') {
    return false;
  } else {
    ___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719')['version'] = (getObjectProperty(___arguments.context.dataModel, 'name'));
    ___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719')['invalidVersion'] = false;
  }

  },
  /* handler:onClick */
  /* content */
}))
