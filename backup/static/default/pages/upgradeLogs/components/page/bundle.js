define([], () => ({
  /* content */
  /* handler:onEnter */
  async ['onEnter'](___arguments) {
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


  localStorage.removeItem('originLoad');
  await (async function() {
  	// logClear = false;
  	logStopFollow = false;
  	logOriginalText = '';
  	logFileText = ''
  })();
  ___arguments.context.pageData['followBtnLabel'] = 'Pause Log Updates';
  ___arguments.context.pageData['downloadBtnLabel'] = 'Download';
  if (!(getObjectProperty(___arguments.context.appData, 'opensScketUpgrade'))) {
    if ((getObjectProperty(___arguments.context.pageData, 'podName')) && (getObjectProperty(___arguments.context.pageData, 'jobName'))) {
      ___arguments.context.appData['opensScketUpgrade'] = (await BackendlessUI.Functions.Custom['fn_b57fda13679c94ef267a4d8c86ef896c']((getObjectProperty(___arguments.context.pageData, 'jobName')), (getObjectProperty(___arguments.context.pageData, 'podName'))));
      ___arguments.context.appData['previousServiceUpgrade'] = (getObjectProperty(___arguments.context.pageData, 'jobName'));
    }
  }

  },
  /* handler:onEnter */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* content */
}))
