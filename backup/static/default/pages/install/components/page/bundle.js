define([], () => ({
  /* content */
  /* handler:onEnter */
  async ['onEnter'](___arguments) {
    var error, item;

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


  localStorage.removeItem('originLoad');
  try {
    ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['authEnabled'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/user/auth/enabled', null, null));
    ___arguments.context.pageData['defaults'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/install/default-arguments', null, null));
    ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['version'] = (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'defaults')), 'version'));
    ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['mountPath'] = (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'defaults')), 'mountPath'));
    ___arguments.context.pageData['initialVersions'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/version/docker-hub/v2/repositories/backendless/bl-server/tags/', null, ({ 'page_size': 20,'page': 1,'ordering': 'last_updated' })));
    ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['versions'] = (await asyncListFilter((getObjectProperty((getObjectProperty(___arguments.context.pageData, 'initialVersions')), 'results')), async (item) => {


     return (!((getObjectProperty(item, 'name')).includes('dev')) && !((getObjectProperty(item, 'name')).includes('stage')));
    }));

  } catch (error) {
    (function (message) { alert(message) })((getObjectProperty(error, 'message')));
    ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['versions'] = null;

  }

  },
  /* handler:onEnter */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* content */
}))
