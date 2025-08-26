define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
      delete ___arguments.context.pageData['isError'];
  delete ___arguments.context.pageData['ingressWrong'];
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))['top'] = (String(-((function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))))) + String('px'));
  (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('ingress', ({ [`pageConfiguration`]: 'ingress' }));

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



  return ((getObjectProperty(___arguments.context.pageData, 'ingressWrong')) ? true : false)

  },
  /* handler:onDisplayAssignment */
  /* content */
}))
