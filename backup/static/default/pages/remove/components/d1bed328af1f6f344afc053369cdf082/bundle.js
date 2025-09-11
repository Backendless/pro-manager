define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error;

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


  try {
    if ((getObjectProperty(___arguments.context.pageData, 'removePro')) == 'DELETE Backendless Pro') {
      await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('delete', '/install/delete', null, null);
      (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('install', undefined);
    }

  } catch (error) {
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('ae42dd3544d537160fb2c47fb5a4f00e', true);
    console.log(error);

  }

  },
  /* handler:onClick */
  /* handler:onStyleAssignment */
  ['onStyleAssignment'](___arguments) {
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


  if (getObjectProperty(___arguments.context.pageData, 'btnRemoveDisabled')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d1bed328af1f6f344afc053369cdf082'))['opacity'] = 0.65;
  } else {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d1bed328af1f6f344afc053369cdf082'))['opacity'] = 1;
  }

  return ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d1bed328af1f6f344afc053369cdf082'))

  },
  /* handler:onStyleAssignment */
  /* content */
}))
