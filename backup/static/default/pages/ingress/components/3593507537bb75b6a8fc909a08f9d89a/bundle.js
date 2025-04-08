define([], () => ({
  /* content */
  /* handler:onDisabledStateAssignment */
  ['onDisabledStateAssignment'](___arguments) {
    var error, successMessage, dataToSend, sendCert;

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



  return ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('9d4b6753fe658a192d7a5cc853291a48'), 'validationMessage')) || (getObjectProperty(___arguments.context.getComponentDataStoreByUid('9d4b6753fe658a192d7a5cc853291a48'), 'createBtnDisabled')))

  },
  /* handler:onDisabledStateAssignment */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, successMessage, getStage, getProd, getCertManager, dataToSend, sendCert;

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


  if (!(getObjectProperty(___arguments.context.getComponentDataStoreByUid('9d4b6753fe658a192d7a5cc853291a48'), 'email'))) {
    ___arguments.context.getComponentDataStoreByUid('9d4b6753fe658a192d7a5cc853291a48')['validationMessage'] = 'This field is required';
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('62210f1a74151d6da6b865d2250faaaa', true);
    return ;
  } else {
    if (!((new RegExp('[a-zA-Z0-9.\\-_+]{1,}@[^\\W\\.][a-zA-Z0-9\\-]{0,}\\.[a-zA-Z]{1,}', 'g')).test((getObjectProperty(___arguments.context.getComponentDataStoreByUid('9d4b6753fe658a192d7a5cc853291a48'), 'email'))))) {
      return ;
    }
  }
  dataToSend = ({ [`email`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('9d4b6753fe658a192d7a5cc853291a48'), 'email')),[`isProd`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('9d4b6753fe658a192d7a5cc853291a48'), 'isProd')) });
  ___arguments.context.getComponentDataStoreByUid('9d4b6753fe658a192d7a5cc853291a48')['createBtnDisabled'] = true;
  try {
    ___arguments.context.getComponentDataStoreByUid('9d4b6753fe658a192d7a5cc853291a48')['btnLabel'] = 'Creating...';
    sendCert = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('post', '/manage/cert-manager/', dataToSend, null));
    getCertManager = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/cert-manager', null, null));
    getProd = (getObjectProperty(getCertManager, 'prod'));
    getStage = (getObjectProperty(getCertManager, 'stage'));
    if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('9d4b6753fe658a192d7a5cc853291a48'), 'isProd')) {
      successMessage = String('Production letsencrypt has been created successfully');
      ___arguments.context.pageData['prod'] = ({ [`email`]: (getObjectProperty(getProd, 'email')),[`server`]: (getObjectProperty(getProd, 'server')),[`created`]: (getObjectProperty(getProd, 'created')) });
    } else {
      successMessage = String('Stage letsencrypt has been created successfully');
      ___arguments.context.pageData['stage'] = ({ [`email`]: (getObjectProperty(getStage, 'email')),[`server`]: (getObjectProperty(getStage, 'server')),[`created`]: (getObjectProperty(getStage, 'created')) });
    }
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d5c48d6dcb1275ad8832206bf277efe5'))['visibility'] = 'hidden';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d5c48d6dcb1275ad8832206bf277efe5'))['opacity'] = 0;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, successMessage, 'rgba(39, 174, 96, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } catch (error) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d5c48d6dcb1275ad8832206bf277efe5'))['visibility'] = 'hidden';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d5c48d6dcb1275ad8832206bf277efe5'))['opacity'] = 0;
    ___arguments.context.pageData['isError'] = true;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  }

  },
  /* handler:onClick */
  /* content */
}))
