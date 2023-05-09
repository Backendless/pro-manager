define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, isValid, item, descriptionItem, dataContainer;

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


  ___arguments.context.pageData['restartBtnIsClicked'] = true;
  isValid = true;
  dataContainer = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'))[0];
  if (!(getObjectProperty(dataContainer, 'Timeout'))) {
    dataContainer['validationMessageTimeout'] = true;
  }
  if (!(getObjectProperty(dataContainer, 'Password'))) {
    dataContainer['validationMessagePassword'] = true;
  }
  if (!(getObjectProperty(dataContainer, 'Protocol'))) {
    dataContainer['validationMessageProtocol'] = true;
  }
  if (!(getObjectProperty(dataContainer, 'Send From'))) {
    dataContainer['validationMessageSendFrom'] = true;
  }
  if (!(getObjectProperty(dataContainer, 'From Email'))) {
    dataContainer['validationMessageFromEmail'] = true;
  }
  if (!(getObjectProperty(dataContainer, 'Send Timeout'))) {
    dataContainer['validationMessageSendTimeout'] = true;
  }
  if (!(getObjectProperty(dataContainer, 'SMTP Port'))) {
    dataContainer['validationMessageSMTPPort'] = true;
  }
  if (!(getObjectProperty(dataContainer, 'SMTP Host'))) {
    dataContainer['validationMessageSMTPHost'] = true;
  }
  if (!(getObjectProperty(dataContainer, 'User ID'))) {
    dataContainer['validationMessageUserID'] = true;
  }
  var item_list = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    var descriptionItem_list = (getObjectProperty(___arguments.context.pageData, 'description'));
    for (var descriptionItem_index in descriptionItem_list) {
      descriptionItem = descriptionItem_list[descriptionItem_index];
      if (!(getObjectProperty(item, (getObjectProperty(descriptionItem, 'name'))))) {
        isValid = false;
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveRestartDisabled'] = true;
  ___arguments.context.pageData['btnSaveRestart'] = 'Saving...';
  try {
    console.log((await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/mail?restart=true', (((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'))[0]), null)));
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data has been saved successfully', 'rgba(39, 174, 96, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } catch (error) {
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  }

  },
  /* handler:onClick */
  /* handler:onDisabledStateAssignment */
  ['onDisabledStateAssignment'](___arguments) {
    var dataContainer;

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


  dataContainer = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'))[0];
  if ((getObjectProperty(___arguments.context.pageData, 'restartBtnIsClicked')) && ((getObjectProperty(dataContainer, 'validationMessageTimeout')) || (getObjectProperty(dataContainer, 'validationMessagePassword')) || (getObjectProperty(dataContainer, 'validationMessageSendFrom')) || (getObjectProperty(dataContainer, 'validationMessageFromEmail')) || (getObjectProperty(dataContainer, 'validationMessageSendTimeout')) || (getObjectProperty(dataContainer, 'validationMessageSMTPPort')) || (getObjectProperty(dataContainer, 'validationMessageSMTPHost')) || (getObjectProperty(dataContainer, 'validationMessageUserID')))) {
    return true;
  }

  return (getObjectProperty(___arguments.context.pageData, 'btnSaveRestartDisabled'))

  },
  /* handler:onDisabledStateAssignment */
  /* content */
}))
