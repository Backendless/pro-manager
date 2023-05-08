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


  (function (componentUid, dataModel) { ___arguments.context.setComponentDataStoreByUid(componentUid, dataModel) })('08eeca24e142146f1894a98264378b8e', ({ 'certName': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('cbcd2b9a94586ade25e3f3d98cd44ee8'), 'name')),'btnLabel': 'Delete' }));
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('08eeca24e142146f1894a98264378b8e'))['visibility'] = 'visible';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('08eeca24e142146f1894a98264378b8e'))['opacity'] = 1;

  },
  /* handler:onClick */
  /* content */
}))
