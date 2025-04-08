define([], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if ((await ( async function (typeSize, component){ return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df')))) == 0) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = (String(await BackendlessUI.Functions.Custom['fn_fd28fec45015ec48ca6812e77c486d29'](((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df')))) + String('px'));
    ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('1fed8d3527f135219fb66d9de15adb04')).pop();
  } else {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = (String(0) + String('px'));
    addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('1fed8d3527f135219fb66d9de15adb04')), 'aside__TabHeader--rotated');
  }

  },
  /* handler:onClick */
  /* content */
}))
