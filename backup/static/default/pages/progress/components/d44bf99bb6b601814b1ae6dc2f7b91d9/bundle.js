define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
      (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('install', undefined);

  },
  /* handler:onClick */
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



  return ((getObjectProperty(___arguments.context.pageData, 'servicesCreated')) == false)

  },
  /* handler:onDisplayAssignment */
  /* content */
}))
