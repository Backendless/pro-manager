define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, item, groupActionList, currentItem, checkedItem, j, ingressData, serverData;

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
  if ((getObjectProperty(item, 'name')) == 'bl-automation') {
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


  ___arguments.context.pageData['allChecked'] = false;
  groupActionList = (getObjectProperty(___arguments.context.pageData, 'groupActionList'));
  for (var checkedItem_index in groupActionList) {
    checkedItem = groupActionList[checkedItem_index];
    var currentItem_list = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('0fbd34b64c4b8f271001b02635bd0324'));
    for (var currentItem_index in currentItem_list) {
      currentItem = currentItem_list[currentItem_index];
      if ((getObjectProperty(checkedItem, 'name')) == (getObjectProperty(currentItem, 'name'))) {
        checkedItem['status'] = (getObjectProperty(currentItem, 'status'));
      }
    }
  }
  for (var item_index in groupActionList) {
    item = groupActionList[item_index];
    if ((getObjectProperty(item, 'status')) == 'stopped') {
      try {
        console.log((await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ [`serviceName`]: (getObjectProperty(item, 'name')),[`state`]: 'start',[`hidden`]: false }), null)));
        await checkIngressData();

      } catch (error) {
        (function (message) { alert(message) })((getObjectProperty(error, 'message')));

      }
    }
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


  classList = ['ServerStatus__StartAllBtn'];
  if (getObjectProperty(___arguments.context.pageData, 'groupActionList')) {
    if ((getObjectProperty(___arguments.context.pageData, 'groupActionList')).length != 0) {
      classList = ['ServerStatus__StartAllBtn', 'ServerStatus__StartAllBtn--active'];
    }
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))
