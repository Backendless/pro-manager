define([], () => ({
  /* content */
  /* handler:onChange */
  ['onChange'](___arguments) {
    var item;

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


  ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['validationMessageUserID'] = true;
  if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'User ID')) {
    if (___arguments.value.length > 0) {
      ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['validationMessageUserID'] = false;
    }
  }

  },
  /* handler:onChange */
  /* content */
}))
