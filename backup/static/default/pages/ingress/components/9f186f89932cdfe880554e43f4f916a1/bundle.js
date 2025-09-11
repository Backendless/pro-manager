define([], () => ({
  /* content */
  /* handler:onMounted */
  async ['onMounted'](___arguments) {
    var consulData, descriptions, item, j, list, mainData, serverData, voidData;

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


  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  }
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  }
  voidData = [({ [`domain`]: null,[`type`]: 'api',[`sslEnabled`]: null }), ({ [`domain`]: null,[`type`]: 'console',[`sslEnabled`]: null }), ({ [`domain`]: null,[`type`]: 'rt',[`sslEnabled`]: null })];
  descriptions = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/loadbalancer/ingress/describe', null, null));
  serverData = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/loadbalancer/ingress', null, null));
  mainData = (await Promise.all(voidData.map(async item => {  for (var j_index in serverData) {
      j = serverData[j_index];
      if ((getObjectProperty(item, 'type')) == (getObjectProperty(j, 'type'))) {
        item['domain'] = (getObjectProperty(j, 'domain'));
        item['sslEnabled'] = (getObjectProperty(j, 'sslEnabled'));
        item['certName'] = (getObjectProperty(j, 'certName'));
      }
    }
    for (var j_index2 in descriptions) {
      j = descriptions[j_index2];
      item[(String(getObjectProperty(j, 'name')) + String('Description'))] = (getObjectProperty(j, 'description'));
    }
  ; return item;})));
  ___arguments.context.pageData['mainIngressData'] = mainData;
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
  }
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'flex';
  }

  },
  /* handler:onMounted */
  /* content */
}))
