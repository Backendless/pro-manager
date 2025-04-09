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


  ___arguments.context.pageData['removePro'] = ___arguments.value;
  if ((getObjectProperty(___arguments.context.pageData, 'removePro')) == 'DELETE Backendless Pro') {
    ___arguments.context.pageData['btnRemoveDisabled'] = false;
  } else {
    ___arguments.context.pageData['btnRemoveDisabled'] = true;
  }

  },
  /* handler:onChange */
  /* content */
}))
