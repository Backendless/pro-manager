define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d5c48d6dcb1275ad8832206bf277efe5'))['opacity'] = 1;
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d5c48d6dcb1275ad8832206bf277efe5'))['visibility'] = 'visible';
  (function (componentUid, dataModel) { ___arguments.context.setComponentDataStoreByUid(componentUid, dataModel) })('9d4b6753fe658a192d7a5cc853291a48', ({ 'btnLabel': 'Create','email': null,'isProd': false }));

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



  return ((getObjectProperty(___arguments.context.pageData, 'stage')) && !(getObjectProperty((getObjectProperty(___arguments.context.pageData, 'stage')), 'email')))

  },
  /* handler:onDisplayAssignment */
  /* content */
}))
