define([], () => ({
  /* content */
  /* handler:onEnter */
  async ['onEnter'](___arguments) {
    var error, statusInit, pollingIntervalMS;

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

function defineGlobalScope() { const root = (typeof window !== 'undefined' ? window : global);root.codelessScope = root.codelessScope || {};return root.codelessScope;}

function getGlobalEntitiesMap(mapName) { const globalScope = defineGlobalScope();return globalScope[mapName] = globalScope[mapName] || {};}

function stopSetTimeout(timerId) {  const timers = getGlobalEntitiesMap('setIntervals'); if (timerId && timers[timerId]) {    clearInterval(timers[timerId]);    delete timers[timerId]; }}

function runSetTimeout(timerId, callback, delay) {  const timers = getGlobalEntitiesMap('setIntervals'); const timer = setInterval(callback, delay); if (timerId) {  stopSetTimeout(timerId);  timers[timerId] = timer }}


  localStorage.removeItem('originLoad');
  try {
    statusInit = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/install/status', null, null));
    pollingIntervalMS = (getObjectProperty((await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String(getObjectProperty(((function () { return window.location })()), 'origin')) + String('/settings.json')))).setEncoding('utf8').send()), 'pollingIntervalMS'));
    if (!(typeof pollingIntervalMS === 'number' && !isNaN(pollingIntervalMS))) {
      pollingIntervalMS = 2000;
    }
    ___arguments.context.pageData['servicesCreated'] = (getObjectProperty(statusInit, 'servicesCreated'));

  } catch (error) {
    ___arguments.context.pageData['status'] = (getObjectProperty(error, 'message'));
    ___arguments.context.pageData['servicesCreated'] = false;
    return false;

  }
  if (!(getObjectProperty(statusInit, 'servicesCreated'))) {
    if ((getObjectProperty(((getObjectProperty(statusInit, 'messages')).slice(-1)[0]), 'level')) == 'error') {
      ___arguments.context.pageData['status'] = (getObjectProperty(((getObjectProperty(statusInit, 'messages')).slice(-1)[0]), 'message'));
      return false;
    }
    ___arguments.context.pageData['status'] = (getObjectProperty(((getObjectProperty(statusInit, 'messages')).slice(-1)[0]), 'message'));
  }
  (function (componentUid, listItems) { ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('2a8169ce2ece7aa3c82531ac7feaa238', (getObjectProperty(statusInit, 'messages')));

  ;(function() {
    const callback = async () => {
        try {
      statusInit = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/install/status', null, null));
      ___arguments.context.pageData['status'] = (getObjectProperty(((getObjectProperty(statusInit, 'messages')).slice(-1)[0]), 'message'));
      (function (componentUid, listItems) { ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('2a8169ce2ece7aa3c82531ac7feaa238', (getObjectProperty(statusInit, 'messages')));
      if (getObjectProperty(statusInit, 'servicesCreated')) {
        stopSetTimeout('timer');
        (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('88ffdb181f515ee98ee96741d0768c1d', false);
        (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('6ec49b615f364fc25ba12557e2fb8e0f', true);
      }

    } catch (error) {
      ___arguments.context.pageData['status'] = (getObjectProperty(error, 'message'));
      ___arguments.context.pageData['servicesCreated'] = false;

    }

    };

    const timerId = 'timer';
    const timerDelay = pollingIntervalMS;

    runSetTimeout(timerId, callback, timerDelay)
  })()

  },
  /* handler:onEnter */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* content */
}))
