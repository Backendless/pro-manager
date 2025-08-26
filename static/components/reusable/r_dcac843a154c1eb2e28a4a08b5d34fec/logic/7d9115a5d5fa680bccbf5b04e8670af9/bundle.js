define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  ___arguments.context.pageData['collapseStatusBtnIsActive'] = true;
  if (((function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c')))) == 0) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))['maxHeight'] = (String((await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))))) + String('px'));
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('7d9115a5d5fa680bccbf5b04e8670af9')), 'aside__TabHeader--rotated');
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = (String(0) + String('px'));
    while (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('1fed8d3527f135219fb66d9de15adb04')).length > 2) {
      ((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('1fed8d3527f135219fb66d9de15adb04')).pop();
    }
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))['maxHeight'] = (String(0) + String('px'));
    while (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('02f59a618f63b16eab9c8fcf60ac6e41')).length > 2) {
      ((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('02f59a618f63b16eab9c8fcf60ac6e41')).pop();
    }
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('b18be6db888c37d656d8a09b4db77b43'))['maxHeight'] = (String(0) + String('px'));
    while (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('03f4bd550b65418c743e04afe3aab9d9')).length > 2) {
      ((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('03f4bd550b65418c743e04afe3aab9d9')).pop();
    }
  } else {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))['maxHeight'] = (String(0) + String('px'));
    while (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('7d9115a5d5fa680bccbf5b04e8670af9')).length > 2) {
      ((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('7d9115a5d5fa680bccbf5b04e8670af9')).pop();
    }
  }

  },
  /* handler:onClick */
  /* content */
}))
