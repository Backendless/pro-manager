define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
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


  ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['modalTitle'] = 'Set password';
  ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['userName'] = (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'login'));
  ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['userId'] = (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'id'));
  ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['userNameDisabled'] = true;
  ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['createBtn'] = 'Set password';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'visible';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 1;

  },
  /* handler:onClick */
  /* content */
}))
