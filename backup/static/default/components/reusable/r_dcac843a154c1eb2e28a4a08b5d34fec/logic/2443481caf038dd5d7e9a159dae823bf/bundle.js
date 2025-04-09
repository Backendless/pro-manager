define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var origin, deploymentEvents, podEvents;

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
  if (getObjectProperty(___arguments.context.appData, 'previousService')) {
    if ((getObjectProperty(___arguments.context.appData, 'openSocket')) && (getObjectProperty((getObjectProperty(___arguments.context.appData, 'openSocket')), 'connected'))) {
      await (async function(serviceName, podName) {

      	  socket.emit ('service-logs:unsubscribe', {
      	    "serviceName":`${serviceName}`,
      	    "podName":`${podName}`,
      	    "channelName":`${serviceName}-logs`
      	  });

      	  socket.disconnect();
      })((getObjectProperty(___arguments.context.appData, 'previousService')), (getObjectProperty(___arguments.context.dataModel, 'name')));
    }
  }
  podEvents = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', (String('/k8s/pod/events/') + String(getObjectProperty(___arguments.context.dataModel, 'name'))), null, null));
  deploymentEvents = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', (String('/k8s/deployment/events/') + String(getObjectProperty(___arguments.context.getComponentDataStoreByUid('d75f215f23aa0a44d2d32f17694c1636'), 'name'))), null, null));
  (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('serviceLogs', ({ [`serviceName`]: (getObjectProperty(___arguments.context.getComponentDataStoreByUid('d75f215f23aa0a44d2d32f17694c1636'), 'name')),[`podName`]: (getObjectProperty(___arguments.context.dataModel, 'name')),[`pageServerStatus`]: 'ServerLogs',[`followBtnLabel`]: (getObjectProperty(___arguments.context.pageData, 'followBtnLabel')),[`downloadBtnLabel`]: 'Download',[`podEvents`]: podEvents,[`deploymentEvents`]: deploymentEvents }));
  await (async function() {
  	// logClear = false;
  	logStopFollow = false;
  	logOriginalText = '';
  	logFileText = ''

  })();
  origin = (await BackendlessUI.Functions.Custom['fn_1e23a48a29f82b3fc1f647fd98cb53f6']());
  ___arguments.context.appData['openSocket'] = (await BackendlessUI.Functions.Custom['fn_9176f296fff445d3d81faef6cf4854d6']((getObjectProperty(___arguments.context.getComponentDataStoreByUid('d75f215f23aa0a44d2d32f17694c1636'), 'name')), (getObjectProperty(___arguments.context.dataModel, 'name')), origin));
  ___arguments.context.appData['previousService'] = (getObjectProperty(___arguments.context.getComponentDataStoreByUid('d75f215f23aa0a44d2d32f17694c1636'), 'name'));
  ___arguments.context.pageData['podName'] = (getObjectProperty(___arguments.context.dataModel, 'name'));

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
  if ((getObjectProperty(___arguments.context.dataModel, 'name')) == (getObjectProperty(___arguments.context.pageData, 'podName'))) {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))
