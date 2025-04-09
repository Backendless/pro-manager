define([], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  ['onDisplayAssignment'](___arguments) {
    var visible;

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


  visible = false;
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'name')) == 'pattern') {
    visible = true;
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'name')) == 'host') {
    visible = true;
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'name')) == 'user') {
    visible = true;
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'name')) == 'password') {
    visible = true;
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'name')) == 'urlTemplate') {
    visible = true;
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))
