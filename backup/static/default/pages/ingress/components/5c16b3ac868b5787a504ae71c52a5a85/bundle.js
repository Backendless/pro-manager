define([], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async ['onTooltipTextAssignment'](___arguments) {
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


  if ((getObjectProperty(___arguments.context.pageData, 'prod')) && (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'prod')), 'created'))) {
    if ((getObjectProperty((getObjectProperty(___arguments.context.pageData, 'prod')), 'created')).length > 1) {
      return (await (async function(text) {
      	let newText = text.replace('T', ' ').replace('Z', ' UTC')

      	return newText
      })((getObjectProperty((getObjectProperty(___arguments.context.pageData, 'prod')), 'created'))));
    }
  }

  return ''

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))
