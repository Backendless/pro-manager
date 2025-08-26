define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
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


  if ((getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('62182e6e6db9aecf974c9c65dfaea369')), 'left')) != '0px') {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('62182e6e6db9aecf974c9c65dfaea369'))['left'] = (String(0) + String('px'));
  } else {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('62182e6e6db9aecf974c9c65dfaea369'))['left'] = (String(-325) + String('px'));
  }
  if (getObjectProperty(___arguments.context.appData, 'previousServiceUpgrade')) {
    if (getObjectProperty((getObjectProperty(___arguments.context.appData, 'opensScketUpgrade')), 'connected')) {
      await (async function(serviceName) {

      	  socketUpgrade.emit ('service-logs:unsubscribe', {
      	    "serviceName":`${serviceName}`,
      	    "channelName":`${serviceName}-log`
      	  });

      	  socketUpgrade.disconnect();



      })((getObjectProperty(___arguments.context.appData, 'previousServiceUpgrade')));
    }
  }
  (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('upgradeLogs', ({ 'pageUpgrade': 'upgradeLogs','jobName': (getObjectProperty(___arguments.context.dataModel, 'jobName')),'podName': (getObjectProperty(___arguments.context.dataModel, 'podName')) }));
  await (async function() {
  	// logClear = false;
  	logStopFollow = false;
  	// logOriginalText = '';
  	// logFileText = ''

  })();
  ___arguments.context.appData['opensScketUpgrade'] = (await BackendlessUI.Functions.Custom['fn_b57fda13679c94ef267a4d8c86ef896c']((getObjectProperty(___arguments.context.dataModel, 'jobName')), (getObjectProperty(___arguments.context.dataModel, 'podName'))));
  ___arguments.context.appData['previousServiceUpgrade'] = (getObjectProperty(___arguments.context.dataModel, 'jobName'));

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  ['onClassListAssignment'](___arguments) {
    var classList;

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


  classList = ['aside__TabContentItem'];
  if ((getObjectProperty(___arguments.context.dataModel, 'jobName')) == (getObjectProperty(___arguments.context.pageData, 'jobName'))) {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))
