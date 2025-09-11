define([], () => ({
  /* content */
  /* handler:onValueAssignment */
  ['onValueAssignment'](___arguments) {
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


  if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'type')) {
    if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'type')) == 'rt'.toLowerCase()) {
      return 'Real-time';
    } else if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'type')) == 'api'.toLowerCase()) {
      return (String((getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'type')).toUpperCase()) + String(':'));
    } else {
      return (textToTitleCase(getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'type')));
    }
  }

  return ''

  },
  /* handler:onValueAssignment */
  /* content */
}))
