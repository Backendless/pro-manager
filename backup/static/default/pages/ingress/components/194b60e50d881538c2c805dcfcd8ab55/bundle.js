define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var certName, descriptionCertificate, descriptionDomain, descritionType, currentIngressType, serverData, j, descriptions;

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


  serverData = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/loadbalancer/ingress', null, null));
  descriptions = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/loadbalancer/ingress/describe', null, null));
  for (var j_index in descriptions) {
    j = descriptions[j_index];
    if ((getObjectProperty(j, 'name')) == 'type') {
      descritionType = (getObjectProperty(j, 'description'));
    } else if ((getObjectProperty(j, 'name')) == 'domain') {
      descriptionDomain = (getObjectProperty(j, 'description'));
    } else if ((getObjectProperty(j, 'name')) == 'certName') {
      descriptionCertificate = (getObjectProperty(j, 'description'));
    }
  }
  if (serverData.length > 0) {
    currentIngressType = [];
    if (currentIngressType.length > 0) {
      certName = (getObjectProperty((currentIngressType[0]), 'certName'));
    } else {
      certName = 'NO SSL';
    }
  } else {
    certName = 'NO SSL';
  }
  ___arguments.context.pageData['clickedAddCertBtn'] = false;
  ___arguments.context.pageData['isInputCtrFile'] = false;
  ___arguments.context.pageData['isInputKeyFile'] = false;
  await (async function() {
  	const body = document.querySelector('body');
  	body.style.overflow = 'hidden';
  })();
  (function (componentUid, dataModel) { ___arguments.context.setComponentDataStoreByUid(componentUid, dataModel) })('f51537b882061104a87915788fd8bd29', ({ [`type`]: 'consul',[`domain`]: (getObjectProperty(___arguments.context.pageData, 'consulData')) ? (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'consulData')), 'domain')) : null,[`btnLabel`]: (getObjectProperty(___arguments.context.pageData, 'consulData')) && (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'consulData')), 'domain')) ? 'Update' : 'Create',[`descriptionType`]: descritionType,[`descriptionDomain`]: descriptionDomain,[`descriptionCertificate`]: descriptionCertificate,[`certificates`]: (getObjectProperty(___arguments.context.pageData, 'certificates')),[`certName`]: certName == null ? 'NO SSL' : certName }));
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('8382fdaaa776587c3f48b7afa1383946'))['opacity'] = 1;
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('8382fdaaa776587c3f48b7afa1383946'))['visibility'] = 'visible';

  },
  /* handler:onClick */
  /* handler:onLabelAssignment */
  ['onLabelAssignment'](___arguments) {
    var consulDataItem, consulData, item;

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



  return ((getObjectProperty(___arguments.context.pageData, 'consulData')) ? 'Update' : 'Create')

  },
  /* handler:onLabelAssignment */
  /* content */
}))
