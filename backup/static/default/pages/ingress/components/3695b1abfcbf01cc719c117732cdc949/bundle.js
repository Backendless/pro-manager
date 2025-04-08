define([], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  ['onDisplayAssignment'](___arguments) {
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



  return ((getObjectProperty(___arguments.context.pageData, 'certificates')) ? (getObjectProperty(___arguments.context.pageData, 'certificates')).length <= 1 : false)

  },
  /* handler:onDisplayAssignment */
  /* content */
}))
