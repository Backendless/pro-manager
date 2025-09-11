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

/**
 * Describe this function...
 */
async function getServerNodeModules() {
  try {
    ___arguments.context.pageData['serverNodeModules'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/code-runner/js/node-modules', null, null));

  } catch (error) {
    ___arguments.context.pageData['isError'] = true;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));
    if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
    }
    return ;

  }
}


  ___arguments.context.pageData['btnSaveRestartDisabled'] = true;
  ___arguments.context.pageData['btnSaveRestart'] = 'Saving...';
  try {
    await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/code-runner/js/node-modules?restart=true', (getObjectProperty(___arguments.context.pageData, 'nodeModules')), null);
    await getServerNodeModules();
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('9f186f89932cdfe880554e43f4f916a1'))['backgroundColor'] = 'transparent';
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data has been saved successfully', 'rgba(39, 174, 96, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } catch (error) {
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    ___arguments.context.pageData['isError'] = true;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  }

  },
  /* handler:onClick */
  /* handler:onDisabledStateAssignment */
  ['onDisabledStateAssignment'](___arguments) {
    var field, dataItem;

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



  return (getObjectProperty(___arguments.context.pageData, 'btnSaveRestartDisabled'))

  },
  /* handler:onDisabledStateAssignment */
  /* content */
}))
