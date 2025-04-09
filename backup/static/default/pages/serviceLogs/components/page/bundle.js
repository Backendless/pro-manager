define([], () => ({
  /* content */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* handler:onEnter */
  async ['onEnter'](___arguments) {
    var origin;

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


  await (async function() {
  	// logClear = false;
  	logStopFollow = false;
  	logOriginalText = '';
  	logFileText = ''

  })();
  ___arguments.context.pageData['followBtnLabel'] = 'Pause Log Updates';
  ___arguments.context.pageData['downloadBtnLabel'] = 'Download';
  localStorage.removeItem('originLoad');
  if (!(getObjectProperty(___arguments.context.pageData, 'serviceName'))) {
    ___arguments.context.pageData['serviceName'] = 'bl-server';
  }
  origin = (await BackendlessUI.Functions.Custom['fn_1e23a48a29f82b3fc1f647fd98cb53f6']());
  if (!(getObjectProperty(___arguments.context.appData, 'openSocket'))) {
    if ((getObjectProperty(___arguments.context.pageData, 'serviceName')) && (getObjectProperty(___arguments.context.pageData, 'podName'))) {
      ___arguments.context.appData['openSocket'] = (await BackendlessUI.Functions.Custom['fn_9176f296fff445d3d81faef6cf4854d6']((getObjectProperty(___arguments.context.pageData, 'serviceName')), (getObjectProperty(___arguments.context.pageData, 'podName')), origin));
    }
  }
  ___arguments.context.appData['previousService'] = (getObjectProperty(___arguments.context.pageData, 'serviceName'));
  ___arguments.context.appData['previousPodService'] = (getObjectProperty(___arguments.context.pageData, 'podName'));
  ___arguments.context.pageData['logsTab'] = true;
  ___arguments.context.appData['logsTab'] = (getObjectProperty(___arguments.context.pageData, 'logsTab'));

  },
  /* handler:onEnter */
  /* content */
}))
