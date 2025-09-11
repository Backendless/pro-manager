define([], () => ({
  /* content */
  /* handler:onContentAssignment */
  ['onContentAssignment'](___arguments) {
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

function textToTitleCase(str) {
 return str.replace(/\S+/g, function(txt) {
   return txt[0].toUpperCase() + txt.substring(1).toLowerCase()
 })
}


  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'itemName')) == 'api'.toLowerCase()) {
    return ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'itemName')).toUpperCase());
  } else if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'itemName')) == 'rt'.toLowerCase()) {
    return 'Real-Time';
  }

  return (textToTitleCase(getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'itemName')))

  },
  /* handler:onContentAssignment */
  /* content */
}))
