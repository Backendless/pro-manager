define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var messageColor, message, error, item, path, method, isFormValid, keyFilePath, crtFilePath, currentPath, currentOrigin, settingsOrigin;

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
async function getOrigin() {
  currentOrigin = (getObjectProperty(((function () { return window.location })()), 'origin'));
  if (currentOrigin == 'https://teemingkitty.backendless.app') {
    currentPath = 'http://localhost:5050';
  } else {
    settingsOrigin = (getObjectProperty((await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String(currentOrigin) + String('/settings.json')))).setEncoding('utf8').send()), 'serverURL'));
    if (settingsOrigin) {
      currentPath = settingsOrigin;
    } else {
      currentPath = currentOrigin;
    }
  }
  return currentPath
}


  ___arguments.context.pageData['clickedAddCertBtn'] = true;
  isFormValid = true;
  crtFilePath = (await (async function() {
  	const crtFileInput = document.querySelector('#crtFile');
  	return crtFileInput.value

  })());
  keyFilePath = (await (async function() {
  	const keyFileInput = document.querySelector('#keyFile');
  	return keyFileInput.value

  })());
  if (!(getObjectProperty(___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756'), 'name'))) {
    ___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756')['validationMessageName'] = 'This field is required';
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('4b695664b7e53de7f71eeca54673416a', true);
    isFormValid = false;
  } else {
    if (!((new RegExp('^[a-z0-9.-]+$', '')).test((getObjectProperty(___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756'), 'name'))))) {
      isFormValid = false;
    }
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756'), 'btnLabel')) == 'Create') {
    if (!crtFilePath) {
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('fb3b28c8ecb422c9d789a3d5b17a989f', true);
      isFormValid = false;
    }
    if (!keyFilePath) {
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('bd6a0655e9f42f64a20ea5b9ef4e75db', true);
      isFormValid = false;
    }
  } else {
    if (!crtFilePath && !keyFilePath) {
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('fb3b28c8ecb422c9d789a3d5b17a989f', true);
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('bd6a0655e9f42f64a20ea5b9ef4e75db', true);
      isFormValid = false;
    }
  }
  if (!isFormValid) {
    return ;
  }
  ___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756')['createBtnDisabled'] = true;
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756'), 'btnLabel')) == 'Create') {
    ___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756')['btnLabel'] = 'Creating...';
    method = 'post';
    message = 'Certificate has been created successfully';
  } else {
    ___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756')['btnLabel'] = 'Updating...';
    method = 'put';
    message = 'Certificate has been updated successfully';
  }
  try {
    path = String(await getOrigin()) + String('/services/manage/cert');
    await (async function(method, path) {
    	const form = document.querySelector('.ForrmCert');
    	const data = new FormData(form);

    	const rawResponse = await fetch(path, {
    	                                        method: method,
    	                                        body: data
    	                                      }
    	                                )

    	const response = await rawResponse.json();

    	if (rawResponse.status >= 400) throw (new Error (response.message ));









    })(method, path);
    if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756'), 'btnLabel')) == 'Creating...') {
      (getObjectProperty(___arguments.context.pageData, 'certificates')).push(({ 'name': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756'), 'name')),'value': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756'), 'name')) }));
    } else {
      ___arguments.context.pageData['certificates'] = (await Promise.all((getObjectProperty(___arguments.context.pageData, 'certificates')).map(async item => {; return ((getObjectProperty(item, 'value')) == (getObjectProperty(___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756'), 'value')) ? ({ 'name': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756'), 'name')),'value': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756'), 'name')) }) : item);})));
    }
    messageColor = 'rgba(39, 174, 96, 0.93)';

  } catch (error) {
    message = (getObjectProperty(error, 'message'));
    messageColor = 'rgba(231, 76, 60, 0.93)';

  } finally {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('2296afff5b9ced6febcee034fa4def5b'))['opacity'] = 0;
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('2296afff5b9ced6febcee034fa4def5b'))['visibility'] = 'hidden';
    await (async function() {
    	const inputCrtFile   = document.querySelector('#crtFile');
    	const inputKeyFile   = document.querySelector('#keyFile');

    	inputCrtFile.value = '';
    	inputKeyFile.value = '';

    	document.querySelector('#fileLabelCrt').innerHTML = '';
    	document.querySelector('#fileLabelKey').innerHTML = '';

    })();
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, message, messageColor, ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

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



  return ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756'), 'createBtnDisabled')) || ((getObjectProperty(___arguments.context.pageData, 'clickedAddCertBtn')) ? (getObjectProperty(___arguments.context.getComponentDataStoreByUid('c285fdb7425cfedb989a67dd73e1e756'), 'validationMessageName')) || !(getObjectProperty(___arguments.context.pageData, 'isInputCtrFile')) || !(getObjectProperty(___arguments.context.pageData, 'isInputKeyFile')) : false))

  },
  /* handler:onDisabledStateAssignment */
  /* content */
}))
