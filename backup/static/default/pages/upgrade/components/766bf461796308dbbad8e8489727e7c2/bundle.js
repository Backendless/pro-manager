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


  if (((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('27d5660e3277d76c390ef4d5ebc32019')).includes('UpgradeControl__icon--rotated')) {
    if ((getObjectProperty(___arguments.event, 'target')) != (getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('f0e46aefb9a7b07518bb18eea4713526')), 'el'))) {
      removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('27d5660e3277d76c390ef4d5ebc32019')), 'UpgradeControl__icon--rotated', '');
      removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('e53b33b5ec0d46efbc5dda17843838aa')), 'UpgradeControl__results--open', '');
    }
  }

  },
  /* handler:onClick */
  /* content */
}))
