define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
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


  (getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('57c1dbc34b1c989c67cdeee5b059df3e')), 'el'))['type'] = 'password';
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('1141d4fc2d5edd8b5c43756bf938fa9b', true);
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('09bad8b3e533875c7a5218a158c3ee48', false);

  },
  /* handler:onClick */
  /* handler:onTooltipTextAssignment */
  ['onTooltipTextAssignment'](___arguments) {
      return 'Hide password'

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))
