define([], () => ({
  /* content */
  /* handler:onMounted */
  async ['onMounted'](___arguments) {
    var getHeight, height;

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


  if ((getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) == 'mySql' || (getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) == 'coderunner') {
    height = ((function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))));
    getHeight = (await (async function(element) {
    	if (element && element.el) {
    	  return element.el.scrollHeight
    	}
    })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('ca0862e89aaf6fa809dfb88ce6d7782b'))));
    if (height && getHeight) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('ca0862e89aaf6fa809dfb88ce6d7782b'))['maxHeight'] = getHeight;
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))['maxHeight'] = (String(height + getHeight) + String('px'));
      addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('66e892a819384aa8fef80389d948b163')), 'aside__TabHeader--rotated');
    }
  } else {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('ca0862e89aaf6fa809dfb88ce6d7782b'))['maxHeight'] = 0;
  }

  },
  /* handler:onMounted */
  /* content */
}))
