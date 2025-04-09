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


  try {
    await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('post', '/user/login', ({ 'login': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'login')),'password': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'password')) }), null);
    (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('serverStatus', undefined);

  } catch (error) {
    (function (message) { alert(message) })((getObjectProperty(error, 'message')));

  }

  },
  /* handler:onClick */
  /* handler:onDisabledStateAssignment */
  ['onDisabledStateAssignment'](___arguments) {
    var disabled;

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


  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'login')) && (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'password'))) {
    disabled = false;
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4726032dbb9b39a30239907c90c2aac7'))['opacity'] = 1;
  } else {
    disabled = true;
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4726032dbb9b39a30239907c90c2aac7'))['opacity'] = 0.5;
  }

  return disabled

  },
  /* handler:onDisabledStateAssignment */
  /* content */
}))
