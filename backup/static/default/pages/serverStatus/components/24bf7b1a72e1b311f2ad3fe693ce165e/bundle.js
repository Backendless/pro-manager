define([], () => ({
  /* content */
  /* handler:onClassListAssignment */
  ['onClassListAssignment'](___arguments) {
    var classList;

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


  classList = ['ServerStatus__ItemBtn'];
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'running' || (getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'changing') {
    classList = ['ServerStatus__ItemBtn', 'ServerStatus__ItemBtn--StopActive'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* handler:onClick */
  async ['onClick'](___arguments) {
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


  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'running' || (getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'changing') {
    console.log((await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'name')),'state': 'stop','hidden': false }), null)));
    for (var count = 0; count < 3; count++) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('24bf7b1a72e1b311f2ad3fe693ce165e'))['border'] = '3px solid blue';
      await new Promise(r => setTimeout(r, 500 || 0));
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('24bf7b1a72e1b311f2ad3fe693ce165e'))['border'] = '';
      await new Promise(r => setTimeout(r, 500 || 0));
    }
  }

  },
  /* handler:onClick */
  /* content */
}))
