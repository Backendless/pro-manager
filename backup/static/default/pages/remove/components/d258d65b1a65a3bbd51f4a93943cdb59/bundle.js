define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error;

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


  ___arguments.context.pageData['btnUpgradeDisabled'] = true;
  try {
    await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/system/version/change', ({ [`newVersion`]: (getObjectProperty(___arguments.context.pageData, 'version')) }), null);

  } catch (error) {
    console.log(error);
    ___arguments.context.pageData['isError'] = true;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } finally {
    ___arguments.context.pageData['btnUpgradeDisabled'] = false;

  }

  },
  /* handler:onClick */
  /* handler:onDisabledStateAssignment */
  ['onDisabledStateAssignment'](___arguments) {
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


  if (getObjectProperty(___arguments.context.pageData, 'btnUpgradeDisabled')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d258d65b1a65a3bbd51f4a93943cdb59'))['opacity'] = '0.5';
    return true;
  } else {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d258d65b1a65a3bbd51f4a93943cdb59'))['opacity'] = '1';
    return false;
  }

  return false

  },
  /* handler:onDisabledStateAssignment */
  /* content */
}))
