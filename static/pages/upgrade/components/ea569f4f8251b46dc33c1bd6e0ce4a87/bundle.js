define([], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
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


  if ((getObjectProperty(___arguments.context.dataModel, 'name')) != 'Loading...' && (getObjectProperty(___arguments.context.dataModel, 'name')) != 'Nothing found') {
    ___arguments.context.pageData['version'] = (getObjectProperty(___arguments.context.dataModel, 'name'));
    ___arguments.context.pageData['btnUpgradeDisabled'] = false;
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '1';
  } else {
    ___arguments.context.pageData['btnUpgradeDisabled'] = true;
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '0.5';
  }

  },
  /* handler:onClick */
  /* content */
}))
