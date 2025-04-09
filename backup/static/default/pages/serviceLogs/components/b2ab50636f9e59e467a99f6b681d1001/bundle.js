define([], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async ['onDisplayAssignment'](___arguments) {
    var currentService, currentStatus, service;

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


  currentStatus = '';
  if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6'), 'statusData')) {
    currentService = (await asyncListFilter((getObjectProperty(___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6'), 'statusData')), async (service) => {


     return ((getObjectProperty(service, 'name')) == (getObjectProperty(___arguments.context.pageData, 'serviceName')));
    }));
    currentStatus = (getObjectProperty((currentService[0]), 'status'));
  }

  return (currentStatus && currentStatus != '')

  },
  /* handler:onDisplayAssignment */
  /* handler:onTooltipTextAssignment */
  async ['onTooltipTextAssignment'](___arguments) {
    var currentStatus, currentService, service;

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


  if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6'), 'statusData')) {
    currentService = (await asyncListFilter((getObjectProperty(___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6'), 'statusData')), async (service) => {


     return ((getObjectProperty(service, 'name')) == (getObjectProperty(___arguments.context.pageData, 'serviceName')));
    }));
    currentStatus = (getObjectProperty((currentService[0]), 'status'));
    if (currentStatus == 'running') {
      return 'Running';
    }
    if (currentStatus == 'stopped') {
      return 'Stopped';
    }
    if (currentStatus == 'notInstalled') {
      return 'Not installed';
    }
    if (currentStatus == 'complete') {
      return 'Complete';
    }
    if (currentStatus == 'changing') {
      return 'Changing';
    }
  }

  return ''

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))
