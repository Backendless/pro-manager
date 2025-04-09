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



  return (String(((new Date((getObjectProperty(___arguments.context.getComponentDataStoreByUid('03073a71a2e45a6ea6e56abe95424e75'), 'time')))).toTimeString()).slice(0, 8)) + String(' '))

  },
  /* handler:onContentAssignment */
  /* content */
}))
