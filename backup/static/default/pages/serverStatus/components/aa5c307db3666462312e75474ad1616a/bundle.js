define([], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  ['onTooltipTextAssignment'](___arguments) {
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



  return ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('205d24a93e3e11b81ca3097b328aadb5'), 'api')) ? [(getObjectProperty((getObjectProperty(___arguments.context.getComponentDataStoreByUid('205d24a93e3e11b81ca3097b328aadb5'), 'api')), 'Protocol')),'://',(getObjectProperty((getObjectProperty(___arguments.context.getComponentDataStoreByUid('205d24a93e3e11b81ca3097b328aadb5'), 'api')), 'Host')),':',(getObjectProperty((getObjectProperty(___arguments.context.getComponentDataStoreByUid('205d24a93e3e11b81ca3097b328aadb5'), 'api')), 'Port'))].join('') : '')

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))
