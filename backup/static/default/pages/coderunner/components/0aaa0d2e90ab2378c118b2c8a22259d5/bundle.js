define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var nodeModule, nodeModuleList, filteredNodeModules, nodeModuleName, item, j;

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

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}

/**
 * Describe this function...
 */
async function nodeModuleNotExist(nodeModuleName) {
  filteredNodeModules = (await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'nodeModules')), async (item) => {


   return ((getObjectProperty(item, 'name')) == nodeModuleName);
  }));
  return filteredNodeModules.length == 0
}

/**
 * Describe this function...
 */
async function checkList() {
  var j_list = (getObjectProperty(___arguments.context.pageData, 'nodeModules'));
  for (var j_index in j_list) {
    j = j_list[j_index];
    if (!(((getObjectProperty(___arguments.context.pageData, 'serverNodeModules')).map(item => item['name'])).includes((getObjectProperty(j, 'name'))))) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('9f186f89932cdfe880554e43f4f916a1'))['backgroundColor'] = 'rgba(253,231,181,255)';
    } else {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('9f186f89932cdfe880554e43f4f916a1'))['backgroundColor'] = 'transparent';
    }
  }
}


  if ((getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('7e1ac109ebbe4db399af721c8b472bd2')), 'value')) && !!(getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('7e1ac109ebbe4db399af721c8b472bd2')), 'value')).length) {
    nodeModuleList = (getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('7e1ac109ebbe4db399af721c8b472bd2')), 'value')).split('@');
    if (nodeModuleList.length == 2) {
      nodeModule = ({ [`name`]: nodeModuleList[0],[`version`]: nodeModuleList.slice(-1)[0] });
      if (await nodeModuleNotExist((getObjectProperty(nodeModule, 'name')))) {
        addItemToList((getObjectProperty(___arguments.context.pageData, 'nodeModules')), nodeModule);
        ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('7e1ac109ebbe4db399af721c8b472bd2'))['value'] = null;
        await checkList();
      } else {
        await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'Node Module with this name alreay exists', 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));
      }
    } else {
      ___arguments.context.pageData['isError'] = true;
      await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (String('Incorrect node module input.') + String('\nShould be: nodeModuleName@^nodeModuleVersion')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));
    }
  }

  },
  /* handler:onClick */
  /* handler:onDisabledStateAssignment */
  ['onDisabledStateAssignment'](___arguments) {
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



  return (!(getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('7e1ac109ebbe4db399af721c8b472bd2')), 'value')) || !(getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('7e1ac109ebbe4db399af721c8b472bd2')), 'value')).length)

  },
  /* handler:onDisabledStateAssignment */
  /* content */
}))
