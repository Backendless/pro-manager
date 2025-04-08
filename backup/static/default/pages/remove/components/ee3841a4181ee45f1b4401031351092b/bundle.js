define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
    function removeItemInList(l, i, c) {   const index = c ? l.findIndex(el => el[c] === i[c]) : l.indexOf(i);  if (index >= 0) { l.splice(index, 1); }  return l;}

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('ee3841a4181ee45f1b4401031351092b')).includes('UpgradeControl__icon--rotated')) {
    removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('ee3841a4181ee45f1b4401031351092b')), 'UpgradeControl__icon--rotated', '');
    removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('cd0aa986266406caac51787fc262311a')), 'UpgradeControl__results--open', '');
  } else {
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('ee3841a4181ee45f1b4401031351092b')), 'UpgradeControl__icon--rotated');
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('cd0aa986266406caac51787fc262311a')), 'UpgradeControl__results--open');
    (function (component) { component.focus() })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('5f46bc085427795650463585f3135dfb')));
    (function (event) { event.stopPropagation() })(___arguments.event);
  }

  },
  /* handler:onClick */
  /* content */
}))
