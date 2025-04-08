define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
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


  if (((function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df')))) == 0) {
    ___arguments.context.pageData['collapseStatusBtnIsActive'] = false;
    ___arguments.context.appData['height'] = (String((await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))))) + String('px'));
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = (getObjectProperty(___arguments.context.appData, 'height'));
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('1fed8d3527f135219fb66d9de15adb04')), 'aside__TabHeader--rotated');
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))['maxHeight'] = (String(0) + String('px'));
    while (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('02f59a618f63b16eab9c8fcf60ac6e41')).length > 2) {
      ((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('02f59a618f63b16eab9c8fcf60ac6e41')).pop();
    }
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))['maxHeight'] = (String(0) + String('px'));
    while (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('7d9115a5d5fa680bccbf5b04e8670af9')).length > 2) {
      ((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('7d9115a5d5fa680bccbf5b04e8670af9')).pop();
    }
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('b18be6db888c37d656d8a09b4db77b43'))['maxHeight'] = (String(0) + String('px'));
    while (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('03f4bd550b65418c743e04afe3aab9d9')).length > 2) {
      ((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('03f4bd550b65418c743e04afe3aab9d9')).pop();
    }
  } else {
    ___arguments.context.pageData['collapseStatusBtnIsActive'] = true;
    ___arguments.context.appData['height'] = (String(0) + String('px'));
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = (getObjectProperty(___arguments.context.appData, 'height'));
    while (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('1fed8d3527f135219fb66d9de15adb04')).length > 2) {
      ((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('1fed8d3527f135219fb66d9de15adb04')).pop();
    }
  }

  },
  /* handler:onClick */
  /* content */
}))
