define([], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, item, groupActionList, currentItem, checkedItem;


  var checkedItem_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('0fbd34b64c4b8f271001b02635bd0324'));
  for (var checkedItem_index in checkedItem_list) {
    checkedItem = checkedItem_list[checkedItem_index];
    checkedItem['checked'] = false;
  }
  ___arguments.context.pageData['checkedAll'] = false;
  groupActionList = (___arguments.context.pageData['groupActionList']);
  ___arguments.context.pageData['groupActionList'] = [];
  for (var checkedItem_index2 in groupActionList) {
    checkedItem = groupActionList[checkedItem_index2];
    var currentItem_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('eabb8cf45a71bcf1946dc53f30c31b8e'));
    for (var currentItem_index in currentItem_list) {
      currentItem = currentItem_list[currentItem_index];
      if ((checkedItem['name']) == (currentItem['name'])) {
        checkedItem['status'] = (currentItem['status']);
      }
    }
  }
  for (var item_index in groupActionList) {
    item = groupActionList[item_index];
    if ((item['status']) == 'running' || (item['status']) == 'changing') {
      try {
        console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (item['name']),'state': 'stop','hidden': false })));

      } catch (error) {
        ;await ( async function (message){ alert(message) })((error['message']));

      }
    }
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList, item;


  classList = ['ServerStatus__StopAllBtn'];
  if ((___arguments.context.pageData['groupActionList']).length != 0) {
    classList = ['ServerStatus__StopAllBtn bl-text', 'ServerStatus__StopAllBtn--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))
