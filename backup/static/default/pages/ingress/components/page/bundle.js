define([], () => ({
  /* content */
  /* handler:onLeave */
  ['onLeave'](___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* handler:onEnter */
  async ['onEnter'](___arguments) {
    var error, getCertManager, item, certificatesFromServer, j, certificatesDescription, serverData;

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
  for (var j_index2 in serverData) {
    j = serverData[j_index2];
    if ((getObjectProperty(j, 'type')) == 'consul') {
      ___arguments.context.pageData['consulData'] = j;
    }
  }
}


  await (async function() {
  	const inputCertName   = document.querySelector('.inputCertName input');
  	const crtFileWrapper  = document.querySelector('.CreateUpdateModal__CrtFileWrapper');
  	const keyFileWrapper  = document.querySelector('.CreateUpdateModal__KeyFileWrapper');

  	if(inputCertName && crtFileWrapper && keyFileWrapper) {
  	inputCertName.setAttribute('name', 'certName');


  	crtFileWrapper.innerHTML = `<span class='CreateUpdateModal__FileNameLabel' id='fileLabelCrt'></span>
  	                            <label class='CreateUpdateModal__UploadFileBtn' for="crtFile">Choose file</label>
  	                            <input type="file" name="crtFile" id="crtFile" style='display:none'>`;

  	keyFileWrapper.innerHTML = `<span class='CreateUpdateModal__FileNameLabel' id='fileLabelKey'></span>
  	                            <label class='CreateUpdateModal__UploadFileBtn' for="keyFile">Choose file</label>
  	                            <input type="file" name="keyFile" id="keyFile" style='display:none'>`;

  	const inputCrtFile = document.querySelector('#crtFile');
  	inputCrtFile.addEventListener('change', (e) => {
  	  ___arguments.context.pageData['isInputCtrFile'] = true
  	  document.querySelector('#fileLabelCrt').innerHTML = e.target.files[0].name;
  	  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('fb3b28c8ecb422c9d789a3d5b17a989f', false);
  	  const operation = getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('c285fdb7425cfedb989a67dd73e1e756')), 'btnLabel');
  	  if (operation == 'Update') {
  	    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('bd6a0655e9f42f64a20ea5b9ef4e75db', false);
  	  }
  	});

  	const inputKeyFile = document.querySelector('#keyFile');
  	inputKeyFile.addEventListener('change', (e) => {
  	  ___arguments.context.pageData['isInputKeyFile'] = true
  	  document.querySelector('#fileLabelKey').innerHTML = e.target.files[0].name;
  	  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('bd6a0655e9f42f64a20ea5b9ef4e75db', false);
  	  const operation = getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('c285fdb7425cfedb989a67dd73e1e756')), 'btnLabel');
  	  if (operation == 'Update'){
  	   (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('fb3b28c8ecb422c9d789a3d5b17a989f', false);
  	  }
  	});

  	}
  })();
  ___arguments.context.pageData['applyBtnLabel'] = 'Apply';
  localStorage.removeItem('originLoad');
  try {
    certificatesFromServer = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/loadbalancer/ingress/certs', null, null));
    certificatesDescription = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/cert/describe', null, null));
    getCertManager = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/cert-manager', null, null));
    for (var j_index in certificatesDescription) {
      j = certificatesDescription[j_index];
      ___arguments.context.pageData[(String(getObjectProperty(j, 'name')) + String('Description'))] = (getObjectProperty(j, 'description'));
    }
    certificatesFromServer.push('NO SSL');
    ___arguments.context.pageData['certificates'] = (await Promise.all(certificatesFromServer.map(async item => {; return ({ [`name`]: item,[`value`]: item });})));
    ___arguments.context.pageData['stage'] = (getObjectProperty(getCertManager, 'stage'));
    ___arguments.context.pageData['prod'] = (getObjectProperty(getCertManager, 'prod'));
    ___arguments.context.pageData['isConsulExternalPortEnabled'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/consul/external-port', null, null));
    await getConsulData();

  } catch (error) {
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  }

  },
  /* handler:onEnter */
  /* content */
}))
