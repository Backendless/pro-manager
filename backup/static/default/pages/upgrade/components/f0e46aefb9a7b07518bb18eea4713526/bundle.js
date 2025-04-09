define([], () => ({
  /* content */
  /* handler:onFocus */
  async ['onFocus'](___arguments) {
    var error, item, versions;

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}

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


  if (!(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('27d5660e3277d76c390ef4d5ebc32019')).includes('UpgradeControl__icon--rotated')) && !(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('e53b33b5ec0d46efbc5dda17843838aa')).includes('UpgradeControl__results--open'))) {
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('27d5660e3277d76c390ef4d5ebc32019')), 'UpgradeControl__icon--rotated');
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('e53b33b5ec0d46efbc5dda17843838aa')), 'UpgradeControl__results--open');
  }
  if (getObjectProperty(___arguments.context.pageData, 'versions')) {
    if ((getObjectProperty(___arguments.context.pageData, 'versions')).length == 0) {
      ___arguments.context.pageData['versions'] = ({ [`results`]: [({ [`name`]: 'Nothing found' })] });
    }
    if ((getObjectProperty(___arguments.context.pageData, 'versions')) == null) {
      ___arguments.context.pageData['versions'] = ({ [`results`]: [({ [`name`]: 'Loading...' })] });
    }
  } else {
    ___arguments.context.pageData['versions'] = ({ [`results`]: [({ [`name`]: 'Loading...' })] });
    try {
      versions = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/version/docker-hub/v2/repositories/backendless/bl-server/tags/', null, ({ [`page_size`]: 20,[`page`]: 1,[`ordering`]: 'last_updated' })));
      ___arguments.context.pageData['versions'] = ({ [`count`]: (getObjectProperty(versions, 'count')),[`next`]: (getObjectProperty(versions, 'next')),[`previous`]: (getObjectProperty(versions, 'previous')),[`results`]: (await asyncListFilter((getObjectProperty(versions, 'results')), async (item) => {


       return (!((getObjectProperty(item, 'name')).includes('stage')) && !((getObjectProperty(item, 'name')).includes('dev')));
      })) });

    } catch (error) {
      await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('1921a9cd7ebbed5892b11a47806e6baa')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1921a9cd7ebbed5892b11a47806e6baa')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4eda51021b746238c2714d9f1947b5c5')));
      ___arguments.context.pageData['versions'] = ({ [`results`]: [({ [`name`]: 'Loading...' })] });

    }
  }

  },
  /* handler:onFocus */
  /* handler:onChange */
  async ['onChange'](___arguments) {
    var error, versionsData, item, filterResults, versions;

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


  try {
    versions = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/version/docker-hub/v2/repositories/backendless/bl-server/tags/', null, ({ [`page_size`]: 20,[`page`]: 1,[`ordering`]: 'last_updated',[`name`]: ___arguments.value })));
    versionsData = ({ [`count`]: (getObjectProperty(versions, 'count')),[`next`]: (getObjectProperty(versions, 'next')),[`previous`]: (getObjectProperty(versions, 'previous')),[`results`]: (await asyncListFilter((getObjectProperty(versions, 'results')), async (item) => {


     return (!((getObjectProperty(item, 'name')).includes('stage')) && !((getObjectProperty(item, 'name')).includes('dev')));
    })) });
    if (getObjectProperty(versionsData, 'results')) {
      if ((getObjectProperty(versionsData, 'results')).length == 0) {
        ___arguments.context.pageData['versions'] = ({ [`results`]: [({ [`name`]: 'Nothing found' })] });
      } else {
        filterResults = (await asyncListFilter((getObjectProperty(versionsData, 'results')), async (item) => {
           if ((getObjectProperty(item, 'name')) != ___arguments.value) {
            ___arguments.context.pageData['versions'] = versionsData;
          } else {
            ___arguments.context.pageData['versions'] = versionsData;
          }


         return ;
        }));
      }
    } else {
      ___arguments.context.pageData['versions'] = ({ [`results`]: [({ [`name`]: 'Nothing found' })] });
    }

  } catch (error) {
    console.log(error);

  }

  },
  /* handler:onChange */
  /* content */
}))
