define([], () => ({
  /* content */
  /* handler:onMounted */
  async ['onMounted'](___arguments) {
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


  (function (componentUid, listItems) { ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('d75f215f23aa0a44d2d32f17694c1636', (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', (String('/manage/') + String(getObjectProperty(___arguments.context.dataModel, 'name'))), null, null)));
  ___arguments.context.appData['height'] = (String((await (async function(element) {
  	return element.el.scrollHeight
  })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))))) + String('px'));

  },
  /* handler:onMounted */
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


  classList = ['aside__TabContent', 'aside__TabContent--service'];
  if (getObjectProperty(___arguments.context.dataModel, 'active')) {
    classList = ['aside__TabContent', 'aside__TabContent--service', 'open'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))
