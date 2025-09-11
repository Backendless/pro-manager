define([], () => ({
  /* content */
  /* handler:onClassListAssignment */
  ['onClassListAssignment'](___arguments) {
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


  if (!(getObjectProperty(___arguments.context.pageData, 'servicesCreated'))) {
    return ['install__ProgressStatus', 'install__ProgressStatus--error'];
  }

  return ['install__ProgressStatus']

  },
  /* handler:onClassListAssignment */
  /* content */
}))
