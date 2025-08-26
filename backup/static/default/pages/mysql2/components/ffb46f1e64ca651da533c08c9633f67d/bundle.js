define([], () => ({
  /* content */
  /* handler:onCheckedStateAssignment */
  ['onCheckedStateAssignment'](___arguments) {
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



  return (getObjectProperty(___arguments.context.getComponentDataStoreByUid('9f186f89932cdfe880554e43f4f916a1'), (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'name'))))

  },
  /* handler:onCheckedStateAssignment */
  /* content */
}))
