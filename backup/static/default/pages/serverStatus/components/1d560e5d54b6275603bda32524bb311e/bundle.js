define([], () => ({
  /* content */
  /* handler:onChange */
  async ['onChange'](___arguments) {
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

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  ___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['checked'] = ___arguments.value;
  if (___arguments.value) {
    addItemToList((getObjectProperty(___arguments.context.pageData, 'groupActionList')), ___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'));
  } else {
    ___arguments.context.pageData['groupActionList'] = (await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'groupActionList')), async (item) => {


     return ((getObjectProperty(item, 'name')) != (getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'name')));
    }));
  }
  ___arguments.context.pageData[(String('checkedItem-') + String(getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'name')))] = ({ 'id': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'name')),'checked': ___arguments.value });

  },
  /* handler:onChange */
  /* content */
}))
