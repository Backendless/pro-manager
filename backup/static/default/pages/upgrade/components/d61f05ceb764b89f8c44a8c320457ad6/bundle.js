define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, currentUpgradeJob;

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

/**
 * Describe this function...
 */
async function connectSoket() {
  if ((getObjectProperty(currentUpgradeJob, 'jobName')) && (getObjectProperty(currentUpgradeJob, 'podName'))) {
    ___arguments.context.appData['opensSoketCurrentUpgrade'] = (await BackendlessUI.Functions.Custom['fn_9ee1a48ea72b90ad38188d610893128b']((getObjectProperty(currentUpgradeJob, 'jobName')), (getObjectProperty(currentUpgradeJob, 'podName'))));
    ___arguments.context.appData['previousUpgrade'] = (getObjectProperty(currentUpgradeJob, 'jobName'));
    await new Promise(r => setTimeout(r, 2000 || 0));
    await (async function(serviceName) {

    	  socketCurrentUpgrade.emit ('service-logs:unsubscribe', {
    	    "serviceName":`${serviceName}`,
    	    "channelName":`${serviceName}-log`
    	  });

    	  socketCurrentUpgrade.disconnect();



    })((getObjectProperty(___arguments.context.appData, 'previousUpgrade')));
  }
}


  ___arguments.context.pageData['upgradeStart'] = true;
  ___arguments.context.pageData['btnUpgradeDisabled'] = true;
  ___arguments.context.pageData['btnUpgradeLabel'] = 'Upgrading...';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '0.5';
  try {
    currentUpgradeJob = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/upgrade', ({ [`version`]: (getObjectProperty(___arguments.context.pageData, 'version')) }), null));
    await (async function() {
    	const output = document.querySelector('.ServerLogs__ContentLogs')

    	if(output) {
    	  output.innerText = 'Loading...'
    	}

    })();
    ___arguments.context.pageData['startUpdateMenu'] = true;
    ___arguments.context.appData['jobsList'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/upgrade/jobs', null, null));
    await connectSoket();
    if ((await (async function() {
    	const output = document.querySelector('.ServerLogs__ContentLogs')

    	return output.innerText
    })()) == 'There is an error during subscription: {"statusCode":400') {
      await connectSoket();
    }

  } catch (error) {
    ___arguments.context.pageData['isError'] = true;
    if (getObjectProperty(___arguments.context.pageData, 'isError')) {
      console.log(error);
    }
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), 'rgba(231, 76, 60, 0.93)', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } finally {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '1';
    ___arguments.context.pageData['btnUpgradeLabel'] = 'Upgrade';
    ___arguments.context.pageData['btnUpgradeDisabled'] = false;
    ___arguments.context.pageData['startUpdateMenu'] = false;

  }

  },
  /* handler:onClick */
  /* content */
}))
