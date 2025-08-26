define([], () => ({
  /* content */
  /* handler:onTargetPathAssignment */
  ['onTargetPathAssignment'](___arguments) {
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



  return (String(getObjectProperty(___arguments.context.pageData, 'currentOrigin')) + String('/services/manage/configuration/logs/all'))

  },
  /* handler:onTargetPathAssignment */
  /* content */
}))
