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
    if (currentStatus == 'running') {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['startBtnLabel'] = 'Start';
      visible = false;
    }
    if (currentStatus == 'notInstalled') {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['startBtnLabel'] = 'Start';
      visible = false;
    }
    if (currentStatus == 'complete') {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['startBtnLabel'] = 'Start';
      visible = false;
    }
    if (currentStatus == 'changing') {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['startBtnLabel'] = 'Start';
      visible = false;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var ingressData, j, serverData;

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

/**
 * Describe this function...
 */
async function checkIngressData() {
  if ((getObjectProperty(___arguments.context.pageData, 'serviceName')) == 'bl-automation') {
    serverData = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/loadbalancer/ingress', null, null));
    for (var j_index in serverData) {
      j = serverData[j_index];
      if (!((getObjectProperty(j, 'domain')) && (getObjectProperty(j, 'type')) == 'api')) {
        ingressData = false;
      }
    }
    if (!ingressData) {
      ___arguments.context.pageData['ingressWrong'] = true;
      ___arguments.context.pageData['isError'] = true;
      await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The API domain is not configured, which may cause certain FlowRunner features, such as external triggers, to malfunction. To resolve this, navigate to the Domains → Ingress  page and add an API domain', 'rgba(230, 115, 36, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));
    }
  }
}


  ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['startBtnLabel'] = 'Starting...';
  await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ [`serviceName`]: (getObjectProperty(___arguments.context.pageData, 'serviceName')),[`state`]: 'start',[`hidden`]: false }), null);
  ___arguments.context.appData['statusData'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/status', null, null));
  await checkIngressData();

  },
  /* handler:onClick */
  /* handler:onMounted */
  ['onMounted'](___arguments) {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['startBtnLabel'] = 'Start';

  },
  /* handler:onMounted */
  /* content */
}))
