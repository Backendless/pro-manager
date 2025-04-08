define([], () => ({
  /* content */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* handler:onEnter */
  async ['onEnter'](___arguments) {
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


  localStorage.removeItem('originLoad');
  try {
    ___arguments.context.pageData['serverNodeModules'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/code-runner/js/node-modules', null, null));

  } catch (error) {
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));
    if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
    }
    return ;

  }

  },
  /* handler:onEnter */
  /* content */
}))
