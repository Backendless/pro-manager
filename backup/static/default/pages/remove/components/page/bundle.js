define([], () => ({
  /* content */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* handler:onEnter */
  async ['onEnter'](___arguments) {
    var error, getVersionList, item, getCurrentVersion;

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

function sortBy(list, order) {
  return list.sort(function(elementA, elementB) {
     const a = elementA.value
     const b = elementB.value
     let result = 0

     if (a > b) result = 1
     if (a < b) result = -1

     return result * order
   })
}

async function asyncListSort(sourceList, order, callback) {
 const list = await Promise.all(sourceList.map(async source => ({
   source,
   value: await callback(source),
 })));

 sortBy(list, order);

 return list.map(item => item.source)
}


  localStorage.removeItem('originLoad');
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  }
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  }
  try {
    getCurrentVersion = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/system/version/current', null, null));
    ___arguments.context.pageData['currentVersion'] = getCurrentVersion;

  } catch (error) {
    console.log(error);

  }
  try {
    getVersionList = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/system/version/', null, null));
    ___arguments.context.pageData['versions'] = (await asyncListSort((getObjectProperty(getVersionList, 'all')), -1, async (item) => {


     return item;
    }));
    ___arguments.context.pageData['version'] = (getObjectProperty(getVersionList, 'latest'));

  } catch (error) {
    console.log(error);

  }
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
  }
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'flex';
  }
  ___arguments.context.pageData['currentOrigin'] = (getObjectProperty(((function () { return window.location })()), 'origin'));

  },
  /* handler:onEnter */
  /* content */
}))
