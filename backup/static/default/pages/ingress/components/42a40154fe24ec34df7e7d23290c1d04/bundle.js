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



  return ((getObjectProperty(___arguments.context.pageData, 'prod')) && (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'prod')), 'email')))

  },
  /* handler:onDisplayAssignment */
  /* handler:onClick */
  ['onClick'](___arguments) {
      (function (componentUid, dataModel) { ___arguments.context.setComponentDataStoreByUid(componentUid, dataModel) })('75a96c7a8695afa15ed7aaae69c1f13c', ({ 'type': 'prod','btnLabel': 'Delete' }));
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('75a96c7a8695afa15ed7aaae69c1f13c'))['visibility'] = 'visible';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('75a96c7a8695afa15ed7aaae69c1f13c'))['opacity'] = 1;

  },
  /* handler:onClick */
  /* content */
}))
