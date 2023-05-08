define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
    var tabClasses, tabControlsClasses;

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


  var tabControlsClasses_list = (getObjectProperty(___arguments.context.pageData, 'sslTabsControlsClassList'));
  for (var tabControlsClasses_index in tabControlsClasses_list) {
    tabControlsClasses = tabControlsClasses_list[tabControlsClasses_index];
    if (tabControlsClasses.length > 1) {
      tabControlsClasses.pop();
    }
  }
  addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('0e6838cfa79de1a440dc2fd9ac29be19')), 'ssl__TabsItem--active');
  var tabClasses_list = (getObjectProperty(___arguments.context.pageData, 'sslTabsClassList'));
  for (var tabClasses_index in tabClasses_list) {
    tabClasses = tabClasses_list[tabClasses_index];
    if (tabClasses.length == 1) {
      addItemToList(tabClasses, 'ssl__hide');
    }
  }
  ((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('8af5b433d6e758a12aac416fe632bfc2')).pop();

  },
  /* handler:onClick */
  /* content */
}))
