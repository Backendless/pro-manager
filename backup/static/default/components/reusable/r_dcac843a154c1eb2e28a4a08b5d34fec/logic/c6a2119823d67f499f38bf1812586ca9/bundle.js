define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
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


  if ((getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) != 'mySql') {
    (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('mySql', ({ [`pageConfiguration`]: 'mySql' }));
  }

  },
  /* handler:onClick */
  /* content */
}))
