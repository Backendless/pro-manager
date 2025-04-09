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



  return ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('cbcd2b9a94586ade25e3f3d98cd44ee8'), 'name')) && (getObjectProperty(___arguments.context.getComponentDataStoreByUid('cbcd2b9a94586ade25e3f3d98cd44ee8'), 'name')).length > 30 ? (getObjectProperty(___arguments.context.getComponentDataStoreByUid('cbcd2b9a94586ade25e3f3d98cd44ee8'), 'name')) : '')

  },
  /* handler:onTooltipTextAssignment */
  /* handler:onMounted */
  ['onMounted'](___arguments) {
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


  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('740709bba31e2cb44e3e5baa810b301a')) {
    ___arguments.context.pageData['labelWidth'] = (getObjectProperty((getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('740709bba31e2cb44e3e5baa810b301a')), 'el')), 'clientWidth'));
  }

  },
  /* handler:onMounted */
  /* content */
}))
