define([], () => ({
  /* content */
  /* handler:onClassListAssignment */
  ['onClassListAssignment'](___arguments) {
    var classes;

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


  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'running') {
    classes = ['ServerStatus__ItemStatusName', 'ServerStatus__ItemStatusName--running'];
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'complete') {
    classes = ['ServerStatus__ItemStatusName', 'ServerStatus__ItemStatusName--complete'];
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'notInstalled') {
    classes = ['ServerStatus__ItemStatusName', 'ServerStatus__ItemStatusName--notInstalled'];
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'changing') {
    classes = ['ServerStatus__ItemStatusName', 'ServerStatus__ItemStatusName--changing'];
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'stopped') {
    classes = ['ServerStatus__ItemStatusName', 'ServerStatus__ItemStatusName--stopped'];
  }

  return classes

  },
  /* handler:onClassListAssignment */
  /* handler:onContentAssignment */
  ['onContentAssignment'](___arguments) {
    var content2;

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


  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'notInstalled') {
    content2 = 'Not Installed';
  } else {
    content2 = textToTitleCase(getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status'));
  }

  return content2

  },
  /* handler:onContentAssignment */
  /* content */
}))
