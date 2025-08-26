define([], () => ({
  /* content */
  /* handler:onChange */
  async ['onChange'](___arguments) {
    var error, versionsData, item, filterResults, versions;

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

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  try {
    versions = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/system/version', null, ({ 'name': ___arguments.value })));
    versionsData = (await asyncListSort((getObjectProperty(versions, 'all')), -1, async (item) => {


     return item;
    }));
    if (versionsData) {
      if (versionsData.length == 0) {
        ___arguments.context.pageData['btnUpgradeDisabled'] = true;
        ___arguments.context.pageData['versions'] = ['Nothing found'];
      } else {
        filterResults = (await asyncListFilter(versionsData, async (item) => {
           if (item != ___arguments.value) {
            ___arguments.context.pageData['btnUpgradeDisabled'] = true;
            ___arguments.context.pageData['versions'] = versionsData;
          } else {
            ___arguments.context.pageData['btnUpgradeDisabled'] = false;
            ___arguments.context.pageData['versions'] = versionsData;
          }


         return ;
        }));
      }
    } else {
      ___arguments.context.pageData['versions'] = ['Nothing found'];
      ___arguments.context.pageData['btnUpgradeDisabled'] = true;
    }

  } catch (error) {
    console.log(error);

  }

  },
  /* handler:onChange */
  /* handler:onFocus */
  async ['onFocus'](___arguments) {
    var error, versions;

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}

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


  if (!(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('ee3841a4181ee45f1b4401031351092b')).includes('UpgradeControl__icon--rotated')) && !(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('cd0aa986266406caac51787fc262311a')).includes('UpgradeControl__results--open'))) {
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('ee3841a4181ee45f1b4401031351092b')), 'UpgradeControl__icon--rotated');
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('cd0aa986266406caac51787fc262311a')), 'UpgradeControl__results--open');
  }
  if (getObjectProperty(___arguments.context.pageData, 'versions')) {
    if ((getObjectProperty(___arguments.context.pageData, 'versions')).length == 0) {
      ___arguments.context.pageData['versions'] = ['Nothing found'];
    }
    if ((getObjectProperty(___arguments.context.pageData, 'versions')) == null) {
      ___arguments.context.pageData['versions'] = ['Loading...'];
    }
  } else {
    ___arguments.context.pageData['versions'] = ['Loading...'];
    try {
      versions = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/system/version/', null, null));
      ___arguments.context.pageData['versions'] = (getObjectProperty(versions, 'all'));

    } catch (error) {
      await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));
      ___arguments.context.pageData['versions'] = ['Loading...'];

    }
  }

  },
  /* handler:onFocus */
  /* content */
}))
