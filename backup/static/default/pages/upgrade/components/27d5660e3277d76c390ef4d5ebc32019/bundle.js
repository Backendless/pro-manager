define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
    function removeItemInList(l, i, c) {   const index = c ? l.findIndex(el => el[c] === i[c]) : l.indexOf(i);  if (index >= 0) { l.splice(index, 1); }  return l;}

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('27d5660e3277d76c390ef4d5ebc32019')).includes('UpgradeControl__icon--rotated')) {
    removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('27d5660e3277d76c390ef4d5ebc32019')), 'UpgradeControl__icon--rotated', '');
    removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('e53b33b5ec0d46efbc5dda17843838aa')), 'UpgradeControl__results--open', '');
  } else {
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('27d5660e3277d76c390ef4d5ebc32019')), 'UpgradeControl__icon--rotated');
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('e53b33b5ec0d46efbc5dda17843838aa')), 'UpgradeControl__results--open');
    (function (component) { component.focus() })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('f0e46aefb9a7b07518bb18eea4713526')));
    (function (event) { event.stopPropagation() })(___arguments.event);
  }

  },
  /* handler:onClick */
  /* content */
}))
