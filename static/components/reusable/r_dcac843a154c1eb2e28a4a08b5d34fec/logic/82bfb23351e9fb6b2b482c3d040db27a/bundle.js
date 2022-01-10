define([], () => ({
  /* content */
  /* handler:onMounted */
  async onMounted(___arguments) {
    function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if ((___arguments.context.pageData['page']) == 'domainsGeneral' || (___arguments.context.pageData['page']) == 'ssl') {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('82bfb23351e9fb6b2b482c3d040db27a'))['maxHeight'] = (await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('82bfb23351e9fb6b2b482c3d040db27a'))));
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))['maxHeight'] = (String((await ( async function (typeSize, component){ return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb')))) + (await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('82bfb23351e9fb6b2b482c3d040db27a'))))) + String('px'));
    addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('c9ab1739404cb44b5b1b8bc263b8f966')), 'aside__TabHeader--rotated');
  } else {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('82bfb23351e9fb6b2b482c3d040db27a'))['maxHeight'] = 0;
  }

  },
  /* handler:onMounted */
  /* content */
}))
