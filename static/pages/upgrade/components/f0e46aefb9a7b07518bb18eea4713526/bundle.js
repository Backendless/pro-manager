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
  if (!(getObjectProperty(___arguments.context.pageData, 'versions'))) {
    ___arguments.context.pageData['versions'] = ({ 'results': [({ 'name': 'Loading...' })] });
    try {
      versions = (await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})('http://localhost:5050/services/version/docker-hub/v2/repositories/backendless/bl-server/tags/')).query(({ 'page_size': 20,'page': 1,'ordering': 'last_updated' })).setEncoding('utf8').send());
      ___arguments.context.pageData['versions'] = ({ 'count': (getObjectProperty(versions, 'count')),'next': (getObjectProperty(versions, 'next')),'previous': (getObjectProperty(versions, 'previous')),'results': (await asyncListFilter((getObjectProperty(versions, 'results')), async (item) => {


       return (!(await (async function(str) {
      	let stage = str.includes('stage')
      	return stage
      })((getObjectProperty(item, 'name')))) && !(await (async function(str) {
      	let dev = str.includes('dev')
      	return dev


      })((getObjectProperty(item, 'name')))));
      })) });

    } catch (error) {
      await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('1921a9cd7ebbed5892b11a47806e6baa')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1921a9cd7ebbed5892b11a47806e6baa')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4eda51021b746238c2714d9f1947b5c5')));
      ___arguments.context.pageData['versions'] = '';

    }
  }

  },
  /* handler:onFocus */
  /* handler:onBlur */
  ['onBlur'](___arguments) {
    
  },
  /* handler:onBlur */
  /* handler:onChange */
  async ['onChange'](___arguments) {
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


  if (!___arguments.value) {
    ___arguments.context.pageData['btnUpgradeDisabled'] = true;
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '0.5';
  } else {
    ___arguments.context.pageData['btnUpgradeDisabled'] = false;
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '1';
    versions = (await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})('http://localhost:5050/services/version/docker-hub/v2/repositories/backendless/bl-server/tags/')).query(({ 'page_size': 100,'page': 1,'ordering': 'last_updated','name': ___arguments.value })).setEncoding('utf8').send());
    versionsData = ({ 'count': (getObjectProperty(versions, 'count')),'next': (getObjectProperty(versions, 'next')),'previous': (getObjectProperty(versions, 'previous')),'results': (await asyncListFilter((getObjectProperty(versions, 'results')), async (item) => {


     return (!(await (async function(str) {
    	let stage = str.includes('stage')
    	return stage
    })((getObjectProperty(item, 'name')))) && !(await (async function(str) {
    	let dev = str.includes('dev')
    	return dev


    })((getObjectProperty(item, 'name')))));
    })) });
    if ((getObjectProperty(versionsData, 'results')).length == 0) {
      ___arguments.context.pageData['versions'] = ({ 'results': [({ 'name': 'Nothing found' })] });
    } else {
      ___arguments.context.pageData['versions'] = versionsData;
    }
  }

  },
  /* handler:onChange */
  /* content */
}))
