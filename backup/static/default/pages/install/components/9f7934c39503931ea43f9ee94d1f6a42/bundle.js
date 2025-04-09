define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var item;

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


  if ((getObjectProperty(___arguments.context.pageData, 'defaults')) && (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'defaults')), 'version')) != (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'version'))) {
    ___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719')['version'] = (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'defaults')), 'version'));
    ___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719')['invalidVersion'] = false;
    if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'versionsData')) {
      ___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719')['invalidVersion'] = false;
      ___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719')['versions'] = (await asyncListFilter((getObjectProperty((getObjectProperty(___arguments.context.pageData, 'initialVersions')), 'results')), async (item) => {


       return (!((getObjectProperty(item, 'name')).includes('stage')) && !((getObjectProperty(item, 'name')).includes('dev')) ? (getObjectProperty(___arguments.context.pageData, 'initialVersions')) : []);
      }));
    }
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  ['onClassListAssignment'](___arguments) {
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


  if ((getObjectProperty(___arguments.context.pageData, 'defaults')) && (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'defaults')), 'version')) == (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'version'))) {
    return ['install__RestoteIcon', 'disabled'];
  }

  return ['install__RestoteIcon']

  },
  /* handler:onClassListAssignment */
  /* content */
}))
