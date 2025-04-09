define([], () => ({
  /* content */
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


  if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'Protocol')) {
    ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['TLS'] = ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'Protocol')) == 'TLS');
    ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['SSL'] = ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'Protocol')) == 'SSL');
  }

  },
  /* handler:onMounted */
  /* content */
}))
