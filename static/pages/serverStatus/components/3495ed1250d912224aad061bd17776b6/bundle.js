define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, item, groupActionList, currentItem, checkedItem;

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


  var checkedItem_list = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('0fbd34b64c4b8f271001b02635bd0324'));
  for (var checkedItem_index in checkedItem_list) {
    checkedItem = checkedItem_list[checkedItem_index];
    checkedItem['checked'] = false;
  }
  ___arguments.context.pageData['allChecked'] = false;
  groupActionList = (getObjectProperty(___arguments.context.pageData, 'groupActionList'));
  ___arguments.context.pageData['groupActionList'] = [];
  for (var checkedItem_index2 in groupActionList) {
    checkedItem = groupActionList[checkedItem_index2];
    var currentItem_list = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('eabb8cf45a71bcf1946dc53f30c31b8e'));
    for (var currentItem_index in currentItem_list) {
      currentItem = currentItem_list[currentItem_index];
      if ((getObjectProperty(checkedItem, 'name')) == (getObjectProperty(currentItem, 'name'))) {
        checkedItem['status'] = (getObjectProperty(currentItem, 'status'));
      }
    }
  }
  for (var item_index in groupActionList) {
    item = groupActionList[item_index];
    if ((getObjectProperty(item, 'status')) == 'running' || (getObjectProperty(item, 'status')) == 'changing') {
      try {
        console.log((await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (getObjectProperty(item, 'name')),'state': 'stop','hidden': false }), null)));

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


  classList = ['ServerStatus__StopAllBtn'];
  if (getObjectProperty(___arguments.context.pageData, 'groupActionList')) {
    if ((getObjectProperty(___arguments.context.pageData, 'groupActionList')).length != 0) {
      classList = ['ServerStatus__StopAllBtn', 'ServerStatus__StopAllBtn--active'];
    }
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))
