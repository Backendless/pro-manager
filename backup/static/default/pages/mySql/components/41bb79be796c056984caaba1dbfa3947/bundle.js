define([], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async ['onTooltipTextAssignment'](___arguments) {
    var tooltip;

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


  if (getObjectProperty(___arguments.context.pageData, 'description')) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((getObjectProperty(___arguments.context.pageData, 'description')), 'endpoints'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))
