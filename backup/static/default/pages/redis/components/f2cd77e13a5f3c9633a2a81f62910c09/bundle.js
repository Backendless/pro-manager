define([], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async ['onDisplayAssignment'](___arguments) {
    var visible, item;

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


  if (getObjectProperty(((await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'description')), async (item) => {


   return ((getObjectProperty(item, 'name')) == 'host');
  }))[0]), 'required')) {
    if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'host')) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))
