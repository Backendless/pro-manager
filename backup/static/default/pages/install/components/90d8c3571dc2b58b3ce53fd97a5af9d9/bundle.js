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


  (getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4fa9f7ddbea8648a68589c2bdd118b95')), 'el'))['type'] = 'text';
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('90d8c3571dc2b58b3ce53fd97a5af9d9', false);
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('891bf3ca729d37cf46cc1e6329c36163', true);

  },
  /* handler:onClick */
  /* handler:onTooltipTextAssignment */
  ['onTooltipTextAssignment'](___arguments) {
      return 'Show password'

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))
