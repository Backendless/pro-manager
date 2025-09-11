define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
    function removeItemInList(l, i, c) {   const index = c ? l.findIndex(el => el[c] === i[c]) : l.indexOf(i);  if (index >= 0) { l.splice(index, 1); }  return l;}


  if ((((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('ee3841a4181ee45f1b4401031351092b')).includes('UpgradeControl__icon--rotated')) && (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('cd0aa986266406caac51787fc262311a')).includes('UpgradeControl__results--open'))) {
    removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('ee3841a4181ee45f1b4401031351092b')), 'UpgradeControl__icon--rotated', '');
    removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('cd0aa986266406caac51787fc262311a')), 'UpgradeControl__results--open', '');
  }
  if (___arguments.context.dataModel != 'Loading...' && ___arguments.context.dataModel != 'Nothing found') {
    ___arguments.context.pageData['version'] = ___arguments.context.dataModel;
    ___arguments.context.pageData['btnUpgradeDisabled'] = false;
  } else {
    ___arguments.context.pageData['btnUpgradeDisabled'] = true;
  }

  },
  /* handler:onClick */
  /* handler:onContentAssignment */
  ['onContentAssignment'](___arguments) {
      return ___arguments.context.dataModel

  },
  /* handler:onContentAssignment */
  /* content */
}))
