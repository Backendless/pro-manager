define([], () => ({
  /* content */
  /* handler:onFocus */
  ['onFocus'](___arguments) {
    function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if (!(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('0bb8b95410de45982f75d608ad7b0f66')).includes('InputWrapper__icon--rotated')) && !(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('43de92c3d9013b8c2e6e6b62e1f4df5d')).includes('InputWrapper__select--open'))) {
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('0bb8b95410de45982f75d608ad7b0f66')), 'InputWrapper__icon--rotated');
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('43de92c3d9013b8c2e6e6b62e1f4df5d')), 'InputWrapper__select--open');
  }

  },
  /* handler:onFocus */
  /* content */
}))
