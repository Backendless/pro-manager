define([], () => ({
  /* content */
  /* handler:onEnter */
  async ['onEnter'](___arguments) {
    var versionsData, item, versions;

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
  await (async function() {
  	logStopFollow = false;
  })();
  ___arguments.context.pageData['btnUpgradeDisabled'] = true;
  ___arguments.context.pageData['btnUpgradeLabel'] = 'Upgrade';
  versions = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/version/docker-hub/v2/repositories/backendless/bl-server/tags/', null, ({ 'page_size': 20,'page': 1,'ordering': 'last_updated','name': '' })));
  versionsData = ({ 'count': (getObjectProperty(versions, 'count')),'next': (getObjectProperty(versions, 'next')),'previous': (getObjectProperty(versions, 'previous')),'results': (await asyncListFilter((getObjectProperty(versions, 'results')), async (item) => {


   return (!((getObjectProperty(item, 'name')).includes('stage')) && !((getObjectProperty(item, 'name')).includes('dev')));
  })) });
  ___arguments.context.pageData['defVersions'] = versionsData;
  ___arguments.context.pageData['btnUpgradeLabel'] = 'Upgrade';
  ___arguments.context.pageData['btnUpgradeDisabled'] = true;

  },
  /* handler:onEnter */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* content */
}))
