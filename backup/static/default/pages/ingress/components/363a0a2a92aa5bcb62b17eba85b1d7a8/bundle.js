define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, successMessage, dataToSend;

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


  if (!(getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'domain'))) {
    ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['validationMessage'] = 'This field is required';
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d50a1aa5921ba06c583457a897f2a8f7', true);
    return ;
  } else {
    if (!((new RegExp('^[a-z0-9.-]+$', '')).test((getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'domain'))))) {
      return ;
    }
  }
  dataToSend = ({ [`type`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'type')),[`domain`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'domain')),[`sslEnabled`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'certName')) == 'NO SSL' ? false : true,[`certName`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'certName')) == 'NO SSL' ? null : (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'certName')) });
  ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['createBtnDisabled'] = true;
  try {
    if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'btnLabel')) == 'Create') {
      ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['btnLabel'] = 'Creating...';
      await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('post', '/manage/loadbalancer/ingress', dataToSend, null);
      successMessage = String(getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'domain')) + String(' domain has been created successfully');
    } else {
      ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['btnLabel'] = 'Updating...';
      await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/loadbalancer/ingress', dataToSend, null);
      if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'certName')) == 'NO SSL') {
        (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'repeaterItem'))['sslEnabled'] = false;
      }
      successMessage = String(getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'domain')) + String(' domain has been updated successfully');
    }
    (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'repeaterItem'))['domain'] = (getObjectProperty(dataToSend, 'domain'));
    (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'repeaterItem'))['sslEnabled'] = (getObjectProperty(dataToSend, 'sslEnabled'));
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'hidden';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 0;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, successMessage, 'rgba(39, 174, 96, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } catch (error) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'hidden';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 0;
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
  /* handler:onDisabledStateAssignment */
  ['onDisabledStateAssignment'](___arguments) {
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



  return ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'validationMessage')) || (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'createBtnDisabled')))

  },
  /* handler:onDisabledStateAssignment */
  /* content */
}))
