define([], () => ({
  /* content */
  /* handler:onBeforeMount */
  async ['onBeforeMount'](___arguments) {
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


  if (((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df')) && !(getObjectProperty(___arguments.context.pageData, 'pageServerStatus'))) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = 0;
  }
  try {
    if (!(getObjectProperty(___arguments.context.appData, 'statusData'))) {
      ___arguments.context.appData['statusData'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/status', null, null));
      await new Promise(r => setTimeout(r, 20 || 0));
    }

  } catch (error) {
    if ((getObjectProperty(error, 'message')) == 'The authentication token is invalid. Please re-login the user') {
      (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('login', undefined);
      return ;
    } else {
      (function (message) { alert(message) })((getObjectProperty(error, 'message')));
    }

  }

  },
  /* handler:onBeforeMount */
  /* handler:onMounted */
  ['onMounted'](___arguments) {
    var getHeight;

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


  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = 0;
  if (getObjectProperty(___arguments.context.pageData, 'pageServerStatus')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = undefined;
  }

  },
  /* handler:onMounted */
  /* content */
}))
