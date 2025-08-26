define([], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  ['onTooltipTextAssignment'](___arguments) {
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


  if ((getObjectProperty(___arguments.context.pageData, 'prod')) && (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'prod')), 'server'))) {
    if ((getObjectProperty((getObjectProperty(___arguments.context.pageData, 'prod')), 'server')).length > 1) {
      return (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'prod')), 'server'));
    }
  }

  return ''

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))
