define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
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


  ___arguments.context.pageData['clickedAddCertBtn'] = false;
  ___arguments.context.pageData['isInputCtrFile'] = false;
  ___arguments.context.pageData['isInputKeyFile'] = false;
  await (async function() {
  	const body = document.querySelector('body');
  	body.style.overflow = 'hidden';
  })();
  (function (componentUid, dataModel) { ___arguments.context.setComponentDataStoreByUid(componentUid, dataModel) })('b4398d5c0048d80587b9664d8f5eac11', ({ 'type': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'type')),'domain': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'domain')),'btnLabel': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'domain')) == null ? 'Create' : 'Update','descriptionType': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'typeDescription')),'descriptionDomain': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'domainDescription')),'descriptionCertificate': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'certNameDescription')),'certificates': (getObjectProperty(___arguments.context.pageData, 'certificates')),'certName': 'NO SSL','repeaterItem': ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c') }));
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'visible';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 1;

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
