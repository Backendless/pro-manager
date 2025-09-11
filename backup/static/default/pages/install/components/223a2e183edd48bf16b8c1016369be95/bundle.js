define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
    function removeItemInList(l, i, c) {   const index = c ? l.findIndex(el => el[c] === i[c]) : l.indexOf(i);  if (index >= 0) { l.splice(index, 1); }  return l;}

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('223a2e183edd48bf16b8c1016369be95')).includes('UpgradeControl__icon--rotated')) {
    removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('223a2e183edd48bf16b8c1016369be95')), 'UpgradeControl__icon--rotated', '');
    removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('1872cc19fb1130ab8d66e9ca4f4fce93')), 'UpgradeControl__results--open', '');
  } else {
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('223a2e183edd48bf16b8c1016369be95')), 'UpgradeControl__icon--rotated');
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('1872cc19fb1130ab8d66e9ca4f4fce93')), 'UpgradeControl__results--open');
    (function (component) { component.focus() })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('34e44f5c92b925058875bc26cf2d0263')));
    (function (event) { event.stopPropagation() })(___arguments.event);
  }

  },
  /* handler:onClick */
  /* content */
}))
