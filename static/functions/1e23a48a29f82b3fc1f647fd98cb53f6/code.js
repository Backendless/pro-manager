BackendlessUI.Functions.Custom['fn_1e23a48a29f82b3fc1f647fd98cb53f6'] = async function fn_1e23a48a29f82b3fc1f647fd98cb53f6() {
var origin, settingsOrigin, currentOrigin;

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


  currentOrigin = (getObjectProperty(((function () { return window.location })()), 'origin'));
  settingsOrigin = (getObjectProperty((await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String(currentOrigin) + String('/settings.json')))).setEncoding('utf8').send()), 'serverURL'));
  if (currentOrigin == 'https://teemingkitty.backendless.app') {
    origin = 'http://localhost:5051';
  } else {
    origin = settingsOrigin ? String(settingsOrigin.slice(0, settingsOrigin.lastIndexOf(':') + 1)) + String('5051') : [(getObjectProperty(((function () { return window.location })()), 'protocol')),'//',(getObjectProperty(((function () { return window.location })()), 'hostname')),':5051'].join('');
  }

return origin
}