define([], () => ({
  /* content */
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
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'name')) == 'bl-automation') {
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


  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'running' || (getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'changing') {
    console.log((await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ [`serviceName`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'name')),[`state`]: 'restart',[`hidden`]: false }), null)));
    for (var count = 0; count < 3; count++) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('ff5a02b652d4cb723ed798626a4de138'))['border'] = '3px solid blue';
      await new Promise(r => setTimeout(r, 500 || 0));
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('ff5a02b652d4cb723ed798626a4de138'))['border'] = '';
      await new Promise(r => setTimeout(r, 500 || 0));
    }
    await checkIngressData();
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  ['onClassListAssignment'](___arguments) {
    var classList;

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


  classList = ['ServerStatus__ItemBtn'];
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'running' || (getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'changing') {
    classList = ['ServerStatus__ItemBtn', 'ServerStatus__ItemBtn--RestartActive'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))
