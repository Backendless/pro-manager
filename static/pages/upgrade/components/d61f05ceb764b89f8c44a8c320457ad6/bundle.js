define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var currentUpgradeJob, error;

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


  ___arguments.context.pageData['upgradeStart'] = true;
  ___arguments.context.pageData['btnUpgradeDisabled'] = true;
  ___arguments.context.pageData['btnUpgradeLabel'] = 'Upgrading...';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '0.5';
  try {
    currentUpgradeJob = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/upgrade', ({ 'version': (getObjectProperty(___arguments.context.pageData, 'version')) }), null));
    ___arguments.context.appData['logСurrentUpgradeData'] = ['Loading...'];
    ___arguments.context.pageData['startUpdateMenu'] = true;
    ___arguments.context.appData['jobsList'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/upgrade/jobs', null, null));

  } catch (error) {
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('1921a9cd7ebbed5892b11a47806e6baa')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1921a9cd7ebbed5892b11a47806e6baa')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4eda51021b746238c2714d9f1947b5c5')));

  } finally {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '1';
    ___arguments.context.pageData['btnUpgradeLabel'] = 'Upgrade';
    ___arguments.context.pageData['btnUpgradeDisabled'] = false;
    ___arguments.context.pageData['startUpdateMenu'] = false;

  }
  await new Promise(r => setTimeout(r, 3000 || 0));
  (getObjectProperty(___arguments.context.appData, 'logСurrentUpgradeData')).shift();
  ___arguments.context.appData['opensSoketCurrentUpgrade'] = (await (async function(logsArray, serviceName, podName) {
  	const io = await BackendlessUI.requireModule('https://cdn.jsdelivr.net/npm/socket.io-client@4.4.0/dist/socket.io.min.js');

  	  socketCurrentUpgrade = io.connect('http://localhost:5051', { transports : ['websocket'] });

  	  socketCurrentUpgrade.on (`${serviceName}-log`, function (data) {
  	    logsArray.push (data);
  	  });

  	  socketCurrentUpgrade.emit ('service-logs:subscribe', {
  	    "serviceName":`${serviceName}`,
  	    "podName":`${podName}`,
  	    "channelName": `${serviceName}-log`
  	  });


  	  return socketCurrentUpgrade
  })((getObjectProperty(___arguments.context.appData, 'logСurrentUpgradeData')), (getObjectProperty(currentUpgradeJob, 'jobName')), (getObjectProperty(currentUpgradeJob, 'podName'))));
  ___arguments.context.appData['previousUpgrade'] = (getObjectProperty(currentUpgradeJob, 'jobName'));
  await new Promise(r => setTimeout(r, 3000 || 0));
  await (async function(serviceName) {

  	  socketCurrentUpgrade.emit ('service-logs:unsubscribe', {
  	    "serviceName":`${serviceName}`,
  	    "channelName":`${serviceName}-log`
  	  });

  	  socketCurrentUpgrade.disconnect();



  })((getObjectProperty(___arguments.context.appData, 'previousUpgrade')));

  },
  /* handler:onClick */
  /* content */
}))
