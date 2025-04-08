define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, successMessage, dataToSend, j, serverData;

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
async function getConsulData() {
  serverData = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/loadbalancer/ingress', null, null));
  for (var j_index in serverData) {
    j = serverData[j_index];
    if ((getObjectProperty(j, 'type')) == 'consul') {
      ___arguments.context.pageData['consulData'] = j;
    }
  }
}


  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('a2d8f9f669f6301d7778e01886f57a68', false);
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('b5fe20e88b0cb7b8e4e86c78d8f8e235', false);
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('b5fe20e88b0cb7b8e4e86c78d8f8e235', false);
  if (!(getObjectProperty(___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29'), 'domain'))) {
    ___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29')['validationMessageDomain'] = 'This field is required';
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('a2d8f9f669f6301d7778e01886f57a68', true);
    return ;
  } else {
    if (!((new RegExp('^[a-z0-9.-]+$', '')).test((getObjectProperty(___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29'), 'domain'))))) {
      return ;
    }
  }
  if (!(getObjectProperty(___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29'), 'user'))) {
    ___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29')['validationMessageUser'] = 'This field is required';
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('b5fe20e88b0cb7b8e4e86c78d8f8e235', true);
    return ;
  }
  if (!(getObjectProperty(___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29'), 'password'))) {
    ___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29')['validationMessagePassword'] = 'This field is required';
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('3cf7bee6d7985f38176d7c78ee947b38', true);
    return ;
  }
  dataToSend = ({ [`type`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29'), 'type')),[`domain`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29'), 'domain')),[`sslEnabled`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29'), 'certName')) == 'NO SSL' ? false : true,[`certName`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29'), 'certName')) == 'NO SSL' ? null : (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29'), 'certName')),[`user`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29'), 'user')),[`password`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29'), 'password')) });
  ___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29')['createBtnDisabled'] = true;
  try {
    if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29'), 'btnLabel')) == 'Create') {
      ___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29')['btnLabel'] = 'Creating...';
      await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('post', '/manage/loadbalancer/ingress', dataToSend, null);
      successMessage = String(getObjectProperty(___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29'), 'domain')) + String(' domain has been created successfully');
    } else {
      ___arguments.context.pageData['btnLabel'] = 'Updating...';
      await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/loadbalancer/ingress', dataToSend, null);
      if ((getObjectProperty(___arguments.context.pageData, 'certName')) == 'NO SSL') {
        (getObjectProperty(___arguments.context.pageData, 'repeaterItem'))['sslEnabled'] = false;
      }
      successMessage = String(getObjectProperty(___arguments.context.getComponentDataStoreByUid('f51537b882061104a87915788fd8bd29'), 'domain')) + String(' domain has been updated successfully');
    }
    await getConsulData();
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('8382fdaaa776587c3f48b7afa1383946'))['visibility'] = 'hidden';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('8382fdaaa776587c3f48b7afa1383946'))['opacity'] = 0;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, successMessage, 'rgba(39, 174, 96, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } catch (error) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('8382fdaaa776587c3f48b7afa1383946'))['visibility'] = 'hidden';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('8382fdaaa776587c3f48b7afa1383946'))['opacity'] = 0;
    ___arguments.context.pageData['isError'] = true;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } finally {
    await (async function() {
    	const body = document.querySelector('body');
    	body.style.overflow = 'auto';
    })();

  }

  },
  /* handler:onClick */
  /* content */
}))
