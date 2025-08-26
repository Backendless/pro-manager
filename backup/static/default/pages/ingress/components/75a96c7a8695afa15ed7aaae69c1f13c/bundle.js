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


  if ((getObjectProperty(___arguments.event, 'target')) == (getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('75a96c7a8695afa15ed7aaae69c1f13c')), 'el'))) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d5c48d6dcb1275ad8832206bf277efe5'))['opacity'] = 0;
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d5c48d6dcb1275ad8832206bf277efe5'))['visibility'] = 'hidden';
  }

  },
  /* handler:onClick */
  /* content */
}))
