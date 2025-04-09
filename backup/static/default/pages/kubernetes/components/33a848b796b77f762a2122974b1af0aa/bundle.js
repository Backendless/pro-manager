define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, dataToSave, isValid, item;

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


  isValid = true;
  dataToSave = (await (async function() {
  	return {}
  })());
  var item_list = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('8df5e86e263721a17d2eb9a2f1451d2c'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    if (getObjectProperty(item, 'required')) {
      if (!(getObjectProperty(item, 'data'))) {
        item['validationMsgVisible'] = true;
        isValid = false;
      }
    }
    dataToSave[(getObjectProperty(item, 'name'))] = (getObjectProperty(item, 'data'));
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveDisabled'] = true;
  ___arguments.context.pageData['btnSave'] = 'Saving...';
  try {
    await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/k8s?restart=true', dataToSave, null);
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data has been saved successfully', 'rgba(39, 174, 96, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } catch (error) {
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    ___arguments.context.pageData['isError'] = true;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  }

  },
  /* handler:onClick */
  /* handler:onDisabledStateAssignment */
  async ['onDisabledStateAssignment'](___arguments) {
    var item;

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


  if ((await Promise.all(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('8df5e86e263721a17d2eb9a2f1451d2c')).map(async item => {; return (getObjectProperty(item, 'validationMsgVisible'));}))).indexOf(true) + 1 > 0) {
    return true;
  }

  return (getObjectProperty(___arguments.context.pageData, 'btnSaveRestartDisabled'))

  },
  /* handler:onDisabledStateAssignment */
  /* content */
}))
