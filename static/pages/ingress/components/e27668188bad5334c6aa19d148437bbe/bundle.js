define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, color, message;

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

/**
 * Describe this function...
 */
async function closeModal(message, color) {
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bff4d8ac579f78a648132998464e4919'))['visibility'] = 'hidden';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bff4d8ac579f78a648132998464e4919'))['opacity'] = 0;
  await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, message, color, ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));
}


  ___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919')['btnDeleteDisabled'] = true;
  ___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919')['btnLabel'] = 'Deleting...';
  try {
    await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('delete', '/manage/loadbalancer/ingress', ({ 'type': (getObjectProperty((getObjectProperty(___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919'), 'repeaterItem')), 'type')) }), null);
    await closeModal(String(getObjectProperty((getObjectProperty(___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919'), 'repeaterItem')), 'domain')) + String(' domain has been deleted successfully'), 'rgba(39, 174, 96, 0.93)');
    (getObjectProperty(___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919'), 'repeaterItem'))['domain'] = null;
    (getObjectProperty(___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919'), 'repeaterItem'))['description'] = 'Default description';

  } catch (error) {
    await closeModal((getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)');

  }

  },
  /* handler:onClick */
  /* content */
}))
