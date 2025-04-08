BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f'] = async function fn_4f8fe7d853c915840a67685fa058d83f(descriptionList, name) {
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



return (getObjectProperty(((await asyncListFilter(descriptionList, async (item) => {


 return ((getObjectProperty(item, 'name')) == name);
}))[0]), 'description'))
}