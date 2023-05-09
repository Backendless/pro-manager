define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
    function removeItemInList(l, i, c) {   const index = c ? l.findIndex(el => el[c] === i[c]) : l.indexOf(i);  if (index >= 0) { l.splice(index, 1); }  return l;}

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('0bb8b95410de45982f75d608ad7b0f66')).includes('InputWrapper__icon--rotated')) {
    removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('0bb8b95410de45982f75d608ad7b0f66')), 'InputWrapper__icon--rotated', '');
    removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('43de92c3d9013b8c2e6e6b62e1f4df5d')), 'InputWrapper__select--open', '');
  } else {
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('0bb8b95410de45982f75d608ad7b0f66')), 'InputWrapper__icon--rotated');
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('43de92c3d9013b8c2e6e6b62e1f4df5d')), 'InputWrapper__select--open');
    (function (component) { component.focus() })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('21e1be695ae329a98ddc535f083e4ebf')));
    (function (event) { event.stopPropagation() })(___arguments.event);
  }

  },
  /* handler:onClick */
  /* content */
}))
