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



  return ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919'), 'repeaterItem')) ? ['Are you sure you want to delete ',(getObjectProperty((getObjectProperty(___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919'), 'repeaterItem')), 'type')) == 'rt' ? 'Real-time' : ((getObjectProperty((getObjectProperty(___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919'), 'repeaterItem')), 'type')) == 'api'.toLowerCase() ? (getObjectProperty((getObjectProperty(___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919'), 'repeaterItem')), 'type')).toUpperCase() : textToTitleCase(getObjectProperty((getObjectProperty(___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919'), 'repeaterItem')), 'type'))),' domain:'].join('') : '')

  },
  /* handler:onContentAssignment */
  /* content */
}))
