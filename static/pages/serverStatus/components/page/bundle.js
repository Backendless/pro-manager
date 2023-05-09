define([], () => ({
  /* content */
  /* handler:onEnter */
  async ['onEnter'](___arguments) {
    var error, item, checkedItem, pollingIntervalMS, configuration;

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

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}

function defineGlobalScope() { const root = (typeof window !== 'undefined' ? window : global);root.codelessScope = root.codelessScope || {};return root.codelessScope;}

function getGlobalEntitiesMap(mapName) { const globalScope = defineGlobalScope();return globalScope[mapName] = globalScope[mapName] || {};}

function stopSetTimeout(timerId) {  const timers = getGlobalEntitiesMap('setIntervals'); if (timerId && timers[timerId]) {    clearInterval(timers[timerId]);    delete timers[timerId]; }}

function runSetTimeout(timerId, callback, delay) {  const timers = getGlobalEntitiesMap('setIntervals'); const timer = setInterval(callback, delay); if (timerId) {  stopSetTimeout(timerId);  timers[timerId] = timer }}


  localStorage.removeItem('originLoad');
  ___arguments.context.pageData['groupActionList'] = [];
  try {
    configuration = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/domain', null, null));
    (function (componentUid, dataModel) { ___arguments.context.setComponentDataStoreByUid(componentUid, dataModel) })('205d24a93e3e11b81ca3097b328aadb5', ({ 'console': (getObjectProperty((getObjectProperty(configuration, 'console')), 'Console URL')),'api': (getObjectProperty(configuration, 'api')) }));
    pollingIntervalMS = (getObjectProperty((await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String(getObjectProperty(((function () { return window.location })()), 'origin')) + String('/settings.json')))).setEncoding('utf8').send()), 'pollingIntervalMS'));
    if (!(typeof pollingIntervalMS === 'number' && !isNaN(pollingIntervalMS))) {
      pollingIntervalMS = 2000;
    }

    ;(function() {
      const callback = async () => {
          ___arguments.context.appData['statusData'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/status', null, null));
      checkedItem = (await asyncListFilter((getObjectProperty(___arguments.context.appData, 'statusData')), async (item) => {
         if ((getObjectProperty(___arguments.context.pageData, (String('checkedItem-') + String(getObjectProperty(item, 'name'))))) && (getObjectProperty((getObjectProperty(___arguments.context.pageData, (String('checkedItem-') + String(getObjectProperty(item, 'name'))))), 'id')) == (getObjectProperty(item, 'name'))) {
          item['checked'] = (getObjectProperty((getObjectProperty(___arguments.context.pageData, (String('checkedItem-') + String(getObjectProperty(item, 'name'))))), 'checked'));
        } else if (!(getObjectProperty(___arguments.context.pageData, (String('checkedItem-') + String(getObjectProperty(item, 'name'))))) && !(getObjectProperty(___arguments.context.pageData, 'allChecked'))) {
          item['checked'] = false;
        }
        if (getObjectProperty(___arguments.context.pageData, 'allChecked')) {
          item['checked'] = (getObjectProperty(___arguments.context.pageData, 'allChecked'));
        }


       return ;
      }));

      };

      const timerId = 'timer';
      const timerDelay = pollingIntervalMS;

      runSetTimeout(timerId, callback, timerDelay)
    })()

  } catch (error) {
    if ((getObjectProperty(error, 'message')) == 'The authentication token is invalid. Please re-login the user') {
      (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('login', undefined);
      return ;
    } else {
      (function (message) { alert(message) })((getObjectProperty(error, 'message')));
    }

  }

  },
  /* handler:onEnter */
  /* handler:onLeave */
  onLeave(___arguments) {
    function defineGlobalScope() { const root = (typeof window !== 'undefined' ? window : global);root.codelessScope = root.codelessScope || {};return root.codelessScope;}

function getGlobalEntitiesMap(mapName) { const globalScope = defineGlobalScope();return globalScope[mapName] = globalScope[mapName] || {};}

function stopSetTimeout(timerId) {  const timers = getGlobalEntitiesMap('setIntervals'); if (timerId && timers[timerId]) {    clearInterval(timers[timerId]);    delete timers[timerId]; }}


  stopSetTimeout('timer');
  localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* content */
}))
