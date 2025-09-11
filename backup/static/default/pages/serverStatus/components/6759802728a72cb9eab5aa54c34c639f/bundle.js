define([], () => ({
  /* content */
  /* handler:onChange */
  ['onChange'](___arguments) {
    var j;

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


  if (___arguments.value) {
    ___arguments.context.pageData['groupActionList'] = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('0fbd34b64c4b8f271001b02635bd0324'));
  } else {
    ___arguments.context.pageData['groupActionList'] = [];
  }
  var j_list = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('0fbd34b64c4b8f271001b02635bd0324'));
  for (var j_index in j_list) {
    j = j_list[j_index];
    if (getObjectProperty(___arguments.context.pageData, (String('checkedItem-') + String(getObjectProperty(j, 'name'))))) {
      (getObjectProperty(___arguments.context.pageData, (String('checkedItem-') + String(getObjectProperty(j, 'name')))))['checked'] = ___arguments.value;
    }
    j['checked'] = ___arguments.value;
  }
  ___arguments.context.pageData['allChecked'] = ___arguments.value;

  },
  /* handler:onChange */
  /* content */
}))
