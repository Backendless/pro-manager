define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, activeCerts, item, serverData;

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

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  try {
    serverData = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/loadbalancer/ingress', null, null));
    activeCerts = (await asyncListFilter(serverData, async (item) => {


     return ((getObjectProperty(item, 'certName')) == (getObjectProperty(___arguments.context.getComponentDataStoreByUid('cbcd2b9a94586ade25e3f3d98cd44ee8'), 'name')));
    }));
    if (activeCerts.length == 0) {
      (function (componentUid, dataModel) { ___arguments.context.setComponentDataStoreByUid(componentUid, dataModel) })('08eeca24e142146f1894a98264378b8e', ({ [`certName`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('cbcd2b9a94586ade25e3f3d98cd44ee8'), 'name')),[`btnLabel`]: 'Delete' }));
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('08eeca24e142146f1894a98264378b8e'))['visibility'] = 'visible';
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('08eeca24e142146f1894a98264378b8e'))['opacity'] = 1;
    } else {
      if (activeCerts.length > 1) {
        await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The certificate is currently in use by domains. Please remove the certificate from use', 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));
      } else {
        ___arguments.context.pageData['isError'] = true;
        await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (['The certificate is currently in use by the ',(getObjectProperty((activeCerts[0]), 'domain')),' domain. Please remove the certificate from use'].join('')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));
      }
    }

  } catch (error) {
    console.log(error);
    ___arguments.context.pageData['isError'] = true;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  }

  },
  /* handler:onClick */
  /* content */
}))
