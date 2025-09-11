define([], () => ({
  /* content */
  /* handler:onContentAssignment */
  async ['onContentAssignment'](___arguments) {
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



  return ((getObjectProperty(___arguments.context.pageData, 'prod')) && (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'prod')), 'created')) ? (await (async function(text) {
	let newText = text.replace('T', ' ').replace('Z', ' UTC')

	return newText
})((getObjectProperty((getObjectProperty(___arguments.context.pageData, 'prod')), 'created')))) : '')

  },
  /* handler:onContentAssignment */
  /* content */
}))
