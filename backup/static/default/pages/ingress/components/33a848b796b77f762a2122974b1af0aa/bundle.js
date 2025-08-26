define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var certName, currentIngressType, item, serverData;

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

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  serverData = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/loadbalancer/ingress', null, null));
  if (serverData.length > 0) {
    currentIngressType = (await asyncListFilter(serverData, async (item) => {


     return ((getObjectProperty(item, 'type')) && (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'type')) ? (getObjectProperty(item, 'type')) == (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'type')) : []);
    }));
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
  (function (componentUid, dataModel) { ___arguments.context.setComponentDataStoreByUid(componentUid, dataModel) })('b4398d5c0048d80587b9664d8f5eac11', ({ [`type`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'type')),[`domain`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'domain')),[`btnLabel`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'domain')) == null ? 'Create' : 'Update',[`descriptionType`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'typeDescription')),[`descriptionDomain`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'domainDescription')),[`descriptionCertificate`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'certNameDescription')),[`certificates`]: (getObjectProperty(___arguments.context.pageData, 'certificates')),[`certName`]: certName == null ? 'NO SSL' : certName,[`repeaterItem`]: ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c') }));
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 1;
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'visible';

  },
  /* handler:onClick */
  /* handler:onLabelAssignment */
  ['onLabelAssignment'](___arguments) {
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



  return ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'domain')) == null ? 'Create' : 'Update')

  },
  /* handler:onLabelAssignment */
  /* content */
}))
