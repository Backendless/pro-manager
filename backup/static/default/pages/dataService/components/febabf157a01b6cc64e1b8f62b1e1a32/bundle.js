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

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (getObjectProperty(((await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'description')), async (item) => {


   return ((getObjectProperty(item, 'name')) == 'Max bulk create');
  }))[0]), 'required')) {
    if (___arguments.value) {
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('c37570257cfd551e117c464d74721426', false);
    } else {
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('c37570257cfd551e117c464d74721426', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))
