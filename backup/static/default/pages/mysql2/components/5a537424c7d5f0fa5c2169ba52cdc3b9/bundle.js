define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, isValid, item;

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


  isValid = true;
  var item_list = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    if (getObjectProperty(item, 'urlTemplate')) {
      isValid = ((new RegExp('jdbc:mysql://.*', '')).test((getObjectProperty(item, 'urlTemplate'))));
    }
    if (getObjectProperty(((await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'description')), async (item) => {


     return ((getObjectProperty(item, 'name')) == 'pattern');
    }))[0]), 'required')) {
      if (!(getObjectProperty(item, 'pattern'))) {
        isValid = false;
      }
    }
    if (getObjectProperty(((await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'description')), async (item) => {


     return ((getObjectProperty(item, 'name')) == 'host');
    }))[0]), 'required')) {
      if (!(getObjectProperty(item, 'host'))) {
        isValid = false;
      }
    }
    if (getObjectProperty(((await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'description')), async (item) => {


     return ((getObjectProperty(item, 'name')) == 'port');
    }))[0]), 'required')) {
      if (!(getObjectProperty(item, 'port'))) {
        isValid = false;
      }
    }
    if (getObjectProperty(((await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'description')), async (item) => {


     return ((getObjectProperty(item, 'name')) == 'user');
    }))[0]), 'required')) {
      if (!(getObjectProperty(item, 'user'))) {
        isValid = false;
      }
    }
    if (getObjectProperty(((await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'description')), async (item) => {


     return ((getObjectProperty(item, 'name')) == 'password');
    }))[0]), 'required')) {
      if (!(getObjectProperty(item, 'password'))) {
        isValid = false;
      }
    }
    if (getObjectProperty(((await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'description')), async (item) => {


     return ((getObjectProperty(item, 'name')) == 'maxActive');
    }))[0]), 'required')) {
      if (!(getObjectProperty(item, 'maxActive'))) {
        isValid = false;
      }
    }
    if (getObjectProperty(((await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'description')), async (item) => {


     return ((getObjectProperty(item, 'name')) == 'maxIdle');
    }))[0]), 'required')) {
      if (!(getObjectProperty(item, 'maxIdle'))) {
        isValid = false;
      }
    }
    if (getObjectProperty(((await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'description')), async (item) => {


     return ((getObjectProperty(item, 'name')) == 'minIdle');
    }))[0]), 'required')) {
      if (!(getObjectProperty(item, 'minIdle'))) {
        isValid = false;
      }
    }
    if (getObjectProperty(((await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'description')), async (item) => {


     return ((getObjectProperty(item, 'name')) == 'urlTemplate');
    }))[0]), 'required')) {
      if (!(getObjectProperty(item, 'urlTemplate'))) {
        isValid = false;
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveDisabled'] = true;
  ___arguments.context.pageData['btnSave'] = 'Saving...';
  try {
    console.log((await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/mysql/shard?restart=false', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1')), null)));
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    ___arguments.context.pageData['alertMessage'] = 'The data has been saved successfully';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f'))['color'] = '#fff';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))['bottom'] = 0;
    await new Promise(r => setTimeout(r, 2000 || 0));
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))['bottom'] = (String(-((function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))))) + String('px'));

  } catch (error) {
    ___arguments.context.pageData['isError'] = true;
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    ___arguments.context.pageData['alertMessage'] = (getObjectProperty(error, 'message'));
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f'))['color'] = '#ffa500';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))['bottom'] = 0;

  }

  },
  /* handler:onClick */
  /* content */
}))
