define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if (((function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('ca0862e89aaf6fa809dfb88ce6d7782b')))) == 0) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('ca0862e89aaf6fa809dfb88ce6d7782b'))['maxHeight'] = (String((await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('ca0862e89aaf6fa809dfb88ce6d7782b'))))) + String('px'));
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))['maxHeight'] = (String(((function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb')))) + (await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('ca0862e89aaf6fa809dfb88ce6d7782b'))))) + String('px'));
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('66e892a819384aa8fef80389d948b163')), 'aside__TabHeader--rotated');
  } else {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('ca0862e89aaf6fa809dfb88ce6d7782b'))['maxHeight'] = (String(0) + String('px'));
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))['maxHeight'] = (String((function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb')))) + String('px'));
    while (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('66e892a819384aa8fef80389d948b163')).length > 2) {
      ((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('66e892a819384aa8fef80389d948b163')).pop();
    }
  }

  },
  /* handler:onClick */
  /* content */
}))
