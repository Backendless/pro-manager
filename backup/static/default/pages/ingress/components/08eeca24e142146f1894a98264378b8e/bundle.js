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


  if ((getObjectProperty(___arguments.event, 'target')) == (getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('08eeca24e142146f1894a98264378b8e')), 'el'))) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('08eeca24e142146f1894a98264378b8e'))['visibility'] = 'hidden';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('08eeca24e142146f1894a98264378b8e'))['opacity'] = 0;
  }

  },
  /* handler:onClick */
  /* content */
}))
