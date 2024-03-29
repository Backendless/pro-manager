define([], () => ({
  /* content */
  /* handler:onBeforeMount */
  async onBeforeMount(___arguments) {
    var error;

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


  try {
    if (!(getObjectProperty(___arguments.context.appData, 'jobsList'))) {
      ___arguments.context.appData['jobsList'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/upgrade/jobs', null));
      await new Promise(r => setTimeout(r, 20 || 0));
      ___arguments.context.appData['heightUpgradeContent'] = (String((await (async function(element) {
      	return element.el.scrollHeight
      })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))))) + String('px'));
    }

  } catch (error) {
    ___arguments.context.pageData['menuError'] = (getObjectProperty(error, 'message'));

  }
  if (getObjectProperty(___arguments.context.pageData, 'pageUpgrade')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))['maxHeight'] = (getObjectProperty(___arguments.context.appData, 'heightUpgradeContent'));
    addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('7d9115a5d5fa680bccbf5b04e8670af9')), 'aside__TabHeader--rotated');
  } else {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))['maxHeight'] = 0;
  }

  },
  /* handler:onBeforeMount */
  /* handler:onClassListAssignment */
  async onClassListAssignment(___arguments) {
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


  if (getObjectProperty(___arguments.context.pageData, 'startUpdateMenu')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))['maxHeight'] = (String((await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))))) + String('px'));
  }

  return ['aside__TabContent', 'aside__TabContentUpgrade']

  },
  /* handler:onClassListAssignment */
  /* content */
}))
