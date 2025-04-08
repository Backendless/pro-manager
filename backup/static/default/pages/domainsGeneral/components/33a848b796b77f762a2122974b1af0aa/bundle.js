define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, dataToSave, isValid, field, dataItem;

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
  var dataItem_list = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var dataItem_index in dataItem_list) {
    dataItem = dataItem_list[dataItem_index];
    dataToSave[(getObjectProperty(dataItem, 'itemName'))] = (await (async function() {
    	return {}
    })());
    var field_list = (getObjectProperty(dataItem, 'dataItemList'));
    for (var field_index in field_list) {
      field = field_list[field_index];
      if ((getObjectProperty(field, 'required')) && !(getObjectProperty(field, 'data')) && (getObjectProperty(field, 'data')) != 0) {
        field['validationMsgContent'] = 'This field is required';
        field['validationMsgVisible'] = true;
        isValid = false;
      }
      if (!(getObjectProperty(field, 'isValid'))) {
        isValid = false;
      }
      (getObjectProperty(dataToSave, (getObjectProperty(dataItem, 'itemName'))))[(getObjectProperty(field, 'name'))] = ((getObjectProperty(field, 'data')) >= 0 ? (getObjectProperty(field, 'data')) : (getObjectProperty(field, 'data')).trim());
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveRestartDisabled'] = true;
  ___arguments.context.pageData['btnSaveRestart'] = 'Saving...';
  try {
    await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/domain?restart=true', dataToSave, null);
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
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


  var dataItem_list = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var dataItem_index in dataItem_list) {
    dataItem = dataItem_list[dataItem_index];
    var field_list = (getObjectProperty(dataItem, 'dataItemList'));
    for (var field_index in field_list) {
      field = field_list[field_index];
      if (getObjectProperty(field, 'validationMsgVisible')) {
        return true;
      }
    }
  }

  return (getObjectProperty(___arguments.context.pageData, 'btnSaveRestartDisabled'))

  },
  /* handler:onDisabledStateAssignment */
  /* content */
}))
