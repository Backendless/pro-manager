define([], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async ['onDisplayAssignment'](___arguments) {
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

/**
 * Describe this function...
 */
async function areIdentical() {
  if ((getObjectProperty(___arguments.context.pageData, 'nodeModules')) && (getObjectProperty(___arguments.context.pageData, 'serverNodeModules'))) {
    var j_list = (getObjectProperty(___arguments.context.pageData, 'nodeModules'));
    for (var j_index in j_list) {
      j = j_list[j_index];
      if (!(((getObjectProperty(___arguments.context.pageData, 'serverNodeModules')).map(item => item['name'])).includes((getObjectProperty(j, 'name'))))) {
        return false;
      }
    }
    var j_list2 = (getObjectProperty(___arguments.context.pageData, 'serverNodeModules'));
    for (var j_index2 in j_list2) {
      j = j_list2[j_index2];
      if (!(((getObjectProperty(___arguments.context.pageData, 'nodeModules')).map(item => item['name'])).includes((getObjectProperty(j, 'name'))))) {
        return false;
      }
    }
  }
  return true
}



  return (!await areIdentical())

  },
  /* handler:onDisplayAssignment */
  /* content */
}))
