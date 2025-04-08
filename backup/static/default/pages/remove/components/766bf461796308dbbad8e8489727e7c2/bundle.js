define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
    function getObjectProperty(object, propPath) {
  if (typeof propPath !== 'string' || object[propPath] !== undefined) {
    return object[propPath]
  }

  const propsNamesList = propPath.split('.')

  let result = object

  for (let i = 0; i < propsNamesList.length; i++) {
    if (!result || result[propsNamesList[i]] === undefined) {
      return
    }

    result = result[propsNamesList[i]]
  }

  return result
}

function removeItemInList(l, i, c) {   const index = c ? l.findIndex(el => el[c] === i[c]) : l.indexOf(i);  if (index >= 0) { l.splice(index, 1); }  return l;}


  if (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('ee3841a4181ee45f1b4401031351092b')).includes('UpgradeControl__icon--rotated')) {
    if ((getObjectProperty(___arguments.event, 'target')) != (getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('5f46bc085427795650463585f3135dfb')), 'el'))) {
      removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('ee3841a4181ee45f1b4401031351092b')), 'UpgradeControl__icon--rotated', '');
      removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('cd0aa986266406caac51787fc262311a')), 'UpgradeControl__results--open', '');
    }
  }

  },
  /* handler:onClick */
  /* content */
}))
