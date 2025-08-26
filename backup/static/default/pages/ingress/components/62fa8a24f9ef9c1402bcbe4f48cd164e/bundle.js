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


  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('2296afff5b9ced6febcee034fa4def5b'))['opacity'] = 1;
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('2296afff5b9ced6febcee034fa4def5b'))['visibility'] = 'visible';
  (function (componentUid, dataModel) { ___arguments.context.setComponentDataStoreByUid(componentUid, dataModel) })('c285fdb7425cfedb989a67dd73e1e756', ({ 'name': null,'btnLabel': 'Create','nameDescription': (getObjectProperty(___arguments.context.pageData, 'nameDescription')),'crtFileDescription': (getObjectProperty(___arguments.context.pageData, 'crtFileDescription')),'keyFileDescription': (getObjectProperty(___arguments.context.pageData, 'keyFileDescription')) }));

  },
  /* handler:onClick */
  /* content */
}))
