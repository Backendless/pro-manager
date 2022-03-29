define([], () => ({
  /* content */
  /* handler:onMounted */
  async onMounted(___arguments) {
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


  if (getObjectProperty(___arguments.context.pageData, 'pageSettings')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('b18be6db888c37d656d8a09b4db77b43'))['maxHeight'] = (String((await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('b18be6db888c37d656d8a09b4db77b43'))))) + String('px'));
    addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('03f4bd550b65418c743e04afe3aab9d9')), 'aside__TabHeader--rotated');
  } else {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('b18be6db888c37d656d8a09b4db77b43'))['maxHeight'] = 0;
  }

  },
  /* handler:onMounted */
  /* content */
}))
