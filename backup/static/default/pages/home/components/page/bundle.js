define([], () => ({
  /* content */
  /* handler:onEnter */
  async ['onEnter'](___arguments) {
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


  localStorage.removeItem('originLoad');
  if (getObjectProperty((await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/install/status', null)), 'servicesCreated')) {
    (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('serverStatus', ({ 'pageServerStatus': 'ServerStatus' }));
  } else {
    (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('install', undefined);
  }

  },
  /* handler:onEnter */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* content */
}))
