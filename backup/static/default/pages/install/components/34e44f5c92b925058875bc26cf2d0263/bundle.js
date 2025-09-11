define([], () => ({
  /* content */
  /* handler:onFocus */
  ['onFocus'](___arguments) {
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

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if ((getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719')), 'versions')) && (getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719')), 'versions')).length == 0) {
    ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['versions'] = [({ 'name': 'Nothing found' })];
  }
  if ((getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719')), 'versions')) == null) {
    ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['versions'] = [({ 'name': 'Loading...' })];
  }
  if (getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719')), 'versions')) {
    if (!(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('223a2e183edd48bf16b8c1016369be95')).includes('UpgradeControl__icon--rotated')) && !(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('1872cc19fb1130ab8d66e9ca4f4fce93')).includes('UpgradeControl__results--open'))) {
      addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('223a2e183edd48bf16b8c1016369be95')), 'UpgradeControl__icon--rotated');
      addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('1872cc19fb1130ab8d66e9ca4f4fce93')), 'UpgradeControl__results--open');
    }
  }

  },
  /* handler:onFocus */
  /* handler:onChange */
  async ['onChange'](___arguments) {
    var item, versionsData, filterResults;

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


  versionsData = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/version/docker-hub/v2/repositories/backendless/bl-server/tags/', null, ({ 'page_size': 100,'page': 1,'ordering': 'last_updated','name': ___arguments.value })));
  if (getObjectProperty(versionsData, 'results')) {
    if ((getObjectProperty(versionsData, 'results')).length == 0) {
      ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['versions'] = [({ 'name': 'Nothing found' })];
      ___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719')['invalidVersion'] = true;
    } else {
      filterResults = (await asyncListFilter((getObjectProperty(versionsData, 'results')), async (item) => {
         if ((getObjectProperty(item, 'name')) != ___arguments.value) {
          ___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719')['invalidVersion'] = true;
          ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['versions'] = (await asyncListFilter((getObjectProperty(versionsData, 'results')), async (item) => {


           return (!((getObjectProperty(item, 'name')).includes('dev')) && !((getObjectProperty(item, 'name')).includes('stage')));
          }));
        } else {
          ___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719')['invalidVersion'] = false;
          ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['versions'] = (await asyncListFilter((getObjectProperty(versionsData, 'results')), async (item) => {


           return (!((getObjectProperty(item, 'name')).includes('dev')) && !((getObjectProperty(item, 'name')).includes('stage')));
          }));
        }


       return ;
      }));
    }
  } else {
    ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['versions'] = [({ 'name': 'Nothing found' })];
    ___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719')['invalidVersion'] = true;
  }

  },
  /* handler:onChange */
  /* handler:onStyleAssignment */
  ['onStyleAssignment'](___arguments) {
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


  if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'invalidVersion')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bd58bb58d5afe492c5999cdc5e76c28a'))['background-color'] = 'rgb(241 241 241)';
  } else {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bd58bb58d5afe492c5999cdc5e76c28a'))['background-color'] = 'inherit';
  }

  },
  /* handler:onStyleAssignment */
  /* content */
}))
