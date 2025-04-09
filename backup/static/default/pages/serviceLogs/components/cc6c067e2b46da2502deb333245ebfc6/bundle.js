define([], () => ({
  /* content */
  /* handler:onBeforeUnmount */
  onBeforeUnmount(___arguments) {
    function defineGlobalScope() { const root = (typeof window !== 'undefined' ? window : global);root.codelessScope = root.codelessScope || {};return root.codelessScope;}

function getGlobalEntitiesMap(mapName) { const globalScope = defineGlobalScope();return globalScope[mapName] = globalScope[mapName] || {};}

function stopSetTimeout(timerId) {  const timers = getGlobalEntitiesMap('setIntervals'); if (timerId && timers[timerId]) {    clearInterval(timers[timerId]);    delete timers[timerId]; }}


  stopSetTimeout('timerStatusData');

  },
  /* handler:onBeforeUnmount */
  /* handler:onBeforeMount */
  async ['onBeforeMount'](___arguments) {
    var error, pollingIntervalMS;

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


  if (getObjectProperty(___arguments.context.appData, 'statusData')) {
    ___arguments.context.dataModel['statusData'] = (getObjectProperty(___arguments.context.appData, 'statusData'));
  } else {
    try {
      ___arguments.context.dataModel['statusData'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/status', null, null));

    } catch (error) {
      if ((getObjectProperty(error, 'message')) == 'The authentication token is invalid. Please re-login the user') {
        (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('login', undefined);
        return ;
      } else {
        (function (message) { alert(message) })((getObjectProperty(error, 'message')));
      }

    }
  }
  try {
    pollingIntervalMS = (getObjectProperty((await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String(getObjectProperty(((function () { return window.location })()), 'origin')) + String('/settings.json')))).setEncoding('utf8').send()), 'pollingIntervalMS'));
    if (!(typeof pollingIntervalMS === 'number' && !isNaN(pollingIntervalMS))) {
      pollingIntervalMS = 2000;
    }

    ;(function() {
      const callback = async () => {
          ___arguments.context.dataModel['statusData'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/status', null, null));

      };

      const timerId = 'timerStatusData';
      const timerDelay = pollingIntervalMS;

      runSetTimeout(timerId, callback, timerDelay)
    })()

  } catch (error) {
    (function (message) { alert(message) })((getObjectProperty(error, 'message')));

  }

  },
  /* handler:onBeforeMount */
  /* content */
}))
