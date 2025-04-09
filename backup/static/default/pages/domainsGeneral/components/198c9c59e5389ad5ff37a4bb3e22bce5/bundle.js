define([], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async ['onTooltipTextAssignment'](___arguments) {
    var newTooltip, tooltip;

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


  newTooltip = (await (async function(text) {
  	let result = text.replace(/http or https/g, 'HTTP or HTTPS')

  	return result
  })((getObjectProperty(___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e'), 'description'))));

  return newTooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))
