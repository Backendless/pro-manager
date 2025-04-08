BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5'] = async function fn_696a14dd8d2f85be7023c2c4441a65a5(method, path, body, query) {
var data, host, currentOrigin, settingsOrigin, error;

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
  if (currentOrigin == 'https://teemingkitty.backendless.app') {
    if (path == '/manage/configuration/logs/all') {
      console.log('abc');
      return 'http://localhost:5050/services/manage/configuration/logs/all';
    }
    data = (await Backendless.Request[method]((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String('http://localhost:5050/services') + String(path)))).query(query).setEncoding('utf8').send(body));
  } else {
    try {
      if (!((function(key){ try { return JSON.parse(localStorage.getItem(key)) } catch(e){ return null }})('originLoad'))) {
        settingsOrigin = (getObjectProperty((await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String(currentOrigin) + String('/settings.json')))).query(query).setEncoding('utf8').send()), 'serverURL'));
        localStorage.setItem('originLoad', JSON.stringify(true));
        localStorage.setItem('settingsOrigin', JSON.stringify(settingsOrigin));
      }
      settingsOrigin = ((function(key){ try { return JSON.parse(localStorage.getItem(key)) } catch(e){ return null }})('settingsOrigin'));

    } catch (error) {
      console.log(getObjectProperty(error, 'message'));

    }
    if (settingsOrigin) {
      host = settingsOrigin;
    } else {
      host = currentOrigin;
    }
    if (path == '/services/manage/configuration/logs/all') {
      return (String(host) + String('/services/manage/configuration/logs/all'));
    }
    data = (await Backendless.Request[method]((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})(([host,'/services',path].join('')))).query(query).setEncoding('utf8').send(body));
  }

return data
}