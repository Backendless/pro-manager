define([], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async ['onDisplayAssignment'](___arguments) {
    var visible, currentStatus, currentService, service;

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


  visible = true;
  if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6'), 'statusData')) {
    currentService = (await asyncListFilter((getObjectProperty(___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6'), 'statusData')), async (service) => {


     return ((getObjectProperty(service, 'name')) == (getObjectProperty(___arguments.context.pageData, 'serviceName')));
    }));
    currentStatus = (getObjectProperty((currentService[0]), 'status'));
    if (currentStatus == 'stopped') {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['restartBtnLabel'] = 'Restart';
      visible = false;
    }
    if (currentStatus == 'notInstalled') {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['restartBtnLabel'] = 'Restart';
      visible = false;
    }
    if (currentStatus == 'complete') {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['restartBtnLabel'] = 'Restart';
      visible = false;
    }
    if (getObjectProperty(___arguments.context.appData, 'changedLogs')) {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['restartBtnLabel'] = 'Restarting...';
    } else {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['restartBtnLabel'] = 'Restart';
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
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


  ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['stopBtnLabel'] = 'Stop';
  ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['restartBtnLabel'] = 'Restarting...';
  ___arguments.context.appData['restarting'] = true;
  console.log((await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (getObjectProperty(___arguments.context.pageData, 'serviceName')),'state': 'restart','hidden': false }), null)));

  },
  /* handler:onClick */
  /* handler:onMounted */
  ['onMounted'](___arguments) {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['restartBtnLabel'] = 'Restart';

  },
  /* handler:onMounted */
  /* content */
}))
