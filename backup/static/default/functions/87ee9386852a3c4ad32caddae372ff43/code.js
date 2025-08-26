BackendlessUI.Functions.Custom['fn_87ee9386852a3c4ad32caddae372ff43'] = async function fn_87ee9386852a3c4ad32caddae372ff43(pageData, message, layout, color) {
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


  layout['alertMessage'] = message;
  layout['style'] = ({ [`background-color`]: color,[`top`]: 0 });
  if (getObjectProperty(pageData, 'isError')) {
    return ;
  } else {
    await new Promise(r => setTimeout(r, 3000 || 0));
    layout['style'] = ({ [`top`]: String(-((function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', (getObjectProperty(color, 'heightComponent'))))) + String('px') });
  }

}