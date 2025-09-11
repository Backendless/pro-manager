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


  if (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('223a2e183edd48bf16b8c1016369be95')).includes('UpgradeControl__icon--rotated')) {
    if ((getObjectProperty(___arguments.event, 'target')) != (getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('34e44f5c92b925058875bc26cf2d0263')), 'el'))) {
      removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('223a2e183edd48bf16b8c1016369be95')), 'UpgradeControl__icon--rotated', '');
      removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('1872cc19fb1130ab8d66e9ca4f4fce93')), 'UpgradeControl__results--open', '');
    }
  }

  },
  /* handler:onClick */
  /* content */
}))
