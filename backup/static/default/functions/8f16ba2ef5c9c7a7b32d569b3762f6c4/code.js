BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'] = async function fn_8f16ba2ef5c9c7a7b32d569b3762f6c4(pageData, message, color, alert, styleAlert, styleAlertText) {
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


  pageData['alertMessage'] = message;
  styleAlert['background-color'] = color;
  styleAlert['top'] = 0;
  if (getObjectProperty(pageData, 'isError')) {
    return ;
  } else {
    await new Promise(r => setTimeout(r, 3000 || 0));
    styleAlert['top'] = (String(-((function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', alert))) + String('px'));
  }

}