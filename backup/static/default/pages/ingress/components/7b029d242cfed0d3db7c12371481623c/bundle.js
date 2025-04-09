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


  ___arguments.context.getComponentDataStoreByUid('75a96c7a8695afa15ed7aaae69c1f13c')['btnDeleteDisabled'] = true;
  ___arguments.context.getComponentDataStoreByUid('75a96c7a8695afa15ed7aaae69c1f13c')['btnLabel'] = 'Deleting...';
  try {
    await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('delete', (String('/manage/cert-manager/') + String(getObjectProperty(___arguments.context.getComponentDataStoreByUid('75a96c7a8695afa15ed7aaae69c1f13c'), 'type'))), null, null);
    if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('75a96c7a8695afa15ed7aaae69c1f13c'), 'type')) == 'prod') {
      ___arguments.context.pageData['prod'] = [];
    } else {
      ___arguments.context.pageData['stage'] = [];
    }
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('75a96c7a8695afa15ed7aaae69c1f13c'))['visibility'] = 'hidden';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('75a96c7a8695afa15ed7aaae69c1f13c'))['opacity'] = 0;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'Letsencrypt has been removed successfully', 'rgba(39, 174, 96, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } catch (error) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('75a96c7a8695afa15ed7aaae69c1f13c'))['visibility'] = 'hidden';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('75a96c7a8695afa15ed7aaae69c1f13c'))['opacity'] = 0;
    ___arguments.context.pageData['isError'] = true;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  }

  },
  /* handler:onClick */
  /* content */
}))
