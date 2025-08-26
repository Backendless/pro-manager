define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
      ___arguments.context.pageData['followBtnLabel'] = ((await (async function() {
  	logStopFollow = !logStopFollow;

  	return logStopFollow
  })()) ? 'Resume Log Updates' : 'Pause Log Updates');

  },
  /* handler:onClick */
  /* handler:onLabelAssignment */
  ['onLabelAssignment'](___arguments) {
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


  if (!(getObjectProperty(___arguments.context.pageData, 'followBtnLabel'))) {
    ___arguments.context.pageData['followBtnLabel'] = 'Pause Log Updates';
  }

  return (getObjectProperty(___arguments.context.pageData, 'followBtnLabel'))

  },
  /* handler:onLabelAssignment */
  /* content */
}))
