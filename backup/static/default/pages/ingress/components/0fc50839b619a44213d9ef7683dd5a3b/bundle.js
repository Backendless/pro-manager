define([], () => ({
  /* content */
  /* handler:onDynamicItemsAssignment */
  async ['onDynamicItemsAssignment'](___arguments) {
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



  return ((getObjectProperty(___arguments.context.pageData, 'certificates')) ? (await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'certificates')), async (item) => {


 return ((getObjectProperty(item, 'name')) != 'NO SSL');
})) : null)

  },
  /* handler:onDynamicItemsAssignment */
  /* content */
}))
