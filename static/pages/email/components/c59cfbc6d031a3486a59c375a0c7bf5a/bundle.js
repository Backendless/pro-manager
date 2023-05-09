define([], () => ({
  /* content */
  /* handler:onContentAssignment */
  ['onContentAssignment'](___arguments) {
      return ___arguments.context.dataModel

  },
  /* handler:onContentAssignment */
  /* handler:onClick */
  ['onClick'](___arguments) {
    function removeItemInList(l, i, c) {   const index = c ? l.findIndex(el => el[c] === i[c]) : l.indexOf(i);  if (index >= 0) { l.splice(index, 1); }  return l;}


  ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['Protocol'] = ___arguments.context.dataModel;
  if (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('0bb8b95410de45982f75d608ad7b0f66')).includes('InputWrapper__icon--rotated')) {
    removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('0bb8b95410de45982f75d608ad7b0f66')), 'InputWrapper__icon--rotated', '');
    removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('43de92c3d9013b8c2e6e6b62e1f4df5d')), 'InputWrapper__select--open', '');
  }

  },
  /* handler:onClick */
  /* content */
}))
