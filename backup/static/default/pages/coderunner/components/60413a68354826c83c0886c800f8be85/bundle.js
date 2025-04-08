define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var indexToDelete, i, nodeModule, j;

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
async function checkList() {
  var j_list = (getObjectProperty(___arguments.context.pageData, 'serverNodeModules'));
  for (var j_index in j_list) {
    j = j_list[j_index];
    if (!(((getObjectProperty(___arguments.context.pageData, 'nodeModules')).map(item => item['name'])).includes((getObjectProperty(j, 'name'))))) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('9f186f89932cdfe880554e43f4f916a1'))['backgroundColor'] = 'rgba(253,231,181,255)';
    } else {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('9f186f89932cdfe880554e43f4f916a1'))['backgroundColor'] = 'transparent';
    }
  }
}


  var i_end = (getObjectProperty(___arguments.context.pageData, 'nodeModules')).length;
  var i_inc = 1;
  if (1 > i_end) {
    i_inc = -i_inc;
  }
  for (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
    nodeModule = (getObjectProperty(___arguments.context.pageData, 'nodeModules'))[(i - 1)];
    if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e'), 'name')) == (getObjectProperty(nodeModule, 'name')) && (getObjectProperty(___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e'), 'version')) == (getObjectProperty(nodeModule, 'version'))) {
      indexToDelete = i;
    }
  }
  if (indexToDelete) {
    (getObjectProperty(___arguments.context.pageData, 'nodeModules')).splice((indexToDelete - 1), 1);
    await checkList();
  }

  },
  /* handler:onClick */
  /* content */
}))
