define([], () => ({
  /* content */
  /* handler:onBeforeMount */
  async onBeforeMount(___arguments) {
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


  if (getObjectProperty(___arguments.context.pageData, 'pageUpgrade')) {
    ___arguments.context.pageData['jobsList'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/upgrade/jobs', null));
    await new Promise(r => setTimeout(r, 20 || 0));
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))['maxHeight'] = (String((await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))))) + String('px'));
    addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('7d9115a5d5fa680bccbf5b04e8670af9')), 'aside__TabHeader--rotated');
  } else {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))['maxHeight'] = 0;
  }

  },
  /* handler:onBeforeMount */
  /* content */
}))
