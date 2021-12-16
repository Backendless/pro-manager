require.config({
    waitSeconds: 60,
    paths: {
        'sdk': uiBuilderSDKPath + '/sdk',
    }
});

define(['sdk'], BackendlessUI => BackendlessUI.startApp());

define('./functions/696a14dd8d2f85be7023c2c4441a65a5/code.js', () => { 

BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5'] = async function fn_696a14dd8d2f85be7023c2c4441a65a5(method, path, body) {


  return (await Backendless.Request[method]((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String((await (async function() {
	return BackendlessUI.config.settings.proManagerAPIURL || 'http://localhost:5050/services'
})())) + String(path)))).setEncoding('utf8').send(body))
}

})
define('./pages/404/components/902c9641de4ec9e73427e7192a118d14/bundle.js', [], () => ({
  /* content */

  /* handler:onClick */
  async onClick(___arguments) {
      ;await ( async function (pageName, pageData){ BackendlessUI.goToPage(pageName, pageData) })('', null);

  },  
/* handler:onClick *//* content */
}));

define('./pages/install/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onEnter */
  async onEnter(___arguments) {
    var error;


  try {
    ___arguments.context.pageData['defaults'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/install/default-arguments', null));
    ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['version'] = ((___arguments.context.pageData['defaults'])['version']);
    ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['mountPath'] = ((___arguments.context.pageData['defaults'])['mountPath']);

  } catch (error) {
    ;await ( async function (message){ alert(message) })((error['message']));

  }

  },
  /* handler:onEnter */
  /* content */
}))

define('./pages/install/components/4726032dbb9b39a30239907c90c2aac7/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error;


  try {
    console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('post', '/install/', ({ 'version': (___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719')['version']),'mountPath': (___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719')['mountPath']),'licence': (___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719')['licence']) })));
    ;await ( async function (pageName, pageData){ BackendlessUI.goToPage(pageName, pageData) })('progress', null);

  } catch (error) {
    ;await ( async function (message){ alert(message) })((error['message']));

  }

  },
  /* handler:onClick */
  /* handler:onDisabledStateAssignment */
  onDisabledStateAssignment(___arguments) {
    var disabled;


  if ((((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['version']) && (((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['mountPath']) && (((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['licence'])) {
    disabled = false;
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4726032dbb9b39a30239907c90c2aac7'))['opacity'] = 1;
  } else {
    disabled = true;
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4726032dbb9b39a30239907c90c2aac7'))['opacity'] = 0.5;
  }

  return disabled

  },
  /* handler:onDisabledStateAssignment */
  /* content */
}))

define('./pages/install/components/9f7934c39503931ea43f9ee94d1f6a42/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
      ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['version'] = ((___arguments.context.pageData['defaults'])['version']);

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/install/components/2f0a1b82b8aead5435946a3ca6fac65d/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
      ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['mountPath'] = ((___arguments.context.pageData['defaults'])['mountPath']);

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/progress/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onEnter */
  async onEnter(___arguments) {
    var error, statusInit;

function defineGlobalScope() { const root = (typeof window !== 'undefined' ? window : global);root.codelessScope = root.codelessScope || {};return root.codelessScope;}

function getGlobalEntitiesMap(mapName) { const globalScope = defineGlobalScope();return globalScope[mapName] = globalScope[mapName] || {};}

function stopSetTimeout(timerId) {  const timers = getGlobalEntitiesMap('setIntervals'); if (timerId && timers[timerId]) {    clearInterval(timers[timerId]);    delete timers[timerId]; }}

function runSetTimeout(timerId, callback, delay) {  const timers = getGlobalEntitiesMap('setIntervals'); const timer = setInterval(callback, delay); if (timerId) {  stopSetTimeout(timerId);  timers[timerId] = timer }}


  try {
    statusInit = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/install/status', null));

  } catch (error) {
    ___arguments.context.pageData['status'] = (error['message']);
    return false;

  }
  if ((((statusInit['messages']).slice(-1)[0])['level']) == 'error') {
    ___arguments.context.pageData['status'] = (((statusInit['messages']).slice(-1)[0])['message']);
    return false;
  }
  ___arguments.context.pageData['status'] = (((statusInit['messages']).slice(-1)[0])['message']);
  ;(function (componentUid, listItems){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('2a8169ce2ece7aa3c82531ac7feaa238', (statusInit['messages']));

  ;(function() {
    const callback = async () => {
        try {
      statusInit = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/install/status', null));
      ___arguments.context.pageData['status'] = (((statusInit['messages']).slice(-1)[0])['message']);
      ;(function (componentUid, listItems){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('2a8169ce2ece7aa3c82531ac7feaa238', (statusInit['messages']));
      if (statusInit['servicesCreated']) {
        stopSetTimeout('timer');
        ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('88ffdb181f515ee98ee96741d0768c1d', false);
        ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('6ec49b615f364fc25ba12557e2fb8e0f', true);
      }

    } catch (error) {
      ___arguments.context.pageData['status'] = (error['message']);

    }

    };

    const timerId = 'timer';
    const timerDelay = 1000;

    runSetTimeout(timerId, callback, timerDelay)
  })()

  },
  /* handler:onEnter */
  /* content */
}))

define('./pages/progress/components/df3c4a1a5dd57776c99bd62dbd53a59c/bundle.js', [], () => ({
  /* content */
  /* handler:onContentAssignment */
  onContentAssignment(___arguments) {
      return (String(((new Date((___arguments.context.getComponentDataStoreByUid('03073a71a2e45a6ea6e56abe95424e75')['time']))).toTimeString()).slice(0, 8)) + String(' '))

  },
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/progress/components/6ec49b615f364fc25ba12557e2fb8e0f/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      ;await ( async function (pageName, pageData){ BackendlessUI.goToPage(pageName, pageData) })('serverStatus', null);

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/serverStatus/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onEnter */
  async onEnter(___arguments) {
    var error;

function defineGlobalScope() { const root = (typeof window !== 'undefined' ? window : global);root.codelessScope = root.codelessScope || {};return root.codelessScope;}

function getGlobalEntitiesMap(mapName) { const globalScope = defineGlobalScope();return globalScope[mapName] = globalScope[mapName] || {};}

function stopSetTimeout(timerId) {  const timers = getGlobalEntitiesMap('setIntervals'); if (timerId && timers[timerId]) {    clearInterval(timers[timerId]);    delete timers[timerId]; }}

function runSetTimeout(timerId, callback, delay) {  const timers = getGlobalEntitiesMap('setIntervals'); const timer = setInterval(callback, delay); if (timerId) {  stopSetTimeout(timerId);  timers[timerId] = timer }}


  ___arguments.context.pageData['groupActionList'] = [];
  try {

    ;(function() {
      const callback = async () => {
          ___arguments.context.appData['statusData'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/status', null));

      };

      const timerId = 'timer';
      const timerDelay = 1000;

      runSetTimeout(timerId, callback, timerDelay)
    })()

  } catch (error) {
    ;await ( async function (message){ alert(message) })((error['message']));

  }

  },
  /* handler:onEnter */
  /* handler:onLeave */
  onLeave(___arguments) {
    function defineGlobalScope() { const root = (typeof window !== 'undefined' ? window : global);root.codelessScope = root.codelessScope || {};return root.codelessScope;}

function getGlobalEntitiesMap(mapName) { const globalScope = defineGlobalScope();return globalScope[mapName] = globalScope[mapName] || {};}

function stopSetTimeout(timerId) {  const timers = getGlobalEntitiesMap('setIntervals'); if (timerId && timers[timerId]) {    clearInterval(timers[timerId]);    delete timers[timerId]; }}


  stopSetTimeout('timer');

  },
  /* handler:onLeave */
  /* content */
}))

define('./pages/serverStatus/components/0742b98a516b8b31e62c9cfd5f371619/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classes;


  if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'running') {
    classes = ['ServerStatus__ItemStatusName', 'ServerStatus__ItemStatusName--running'];
  }
  if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'complete') {
    classes = ['ServerStatus__ItemStatusName', 'ServerStatus__ItemStatusName--complete'];
  }
  if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'notInstalled') {
    classes = ['ServerStatus__ItemStatusName', 'ServerStatus__ItemStatusName--notInstalled'];
  }
  if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'changing') {
    classes = ['ServerStatus__ItemStatusName', 'ServerStatus__ItemStatusName--changing'];
  }
  if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'stopped') {
    classes = ['ServerStatus__ItemStatusName', 'ServerStatus__ItemStatusName--stopped'];
  }

  return classes

  },
  /* handler:onClassListAssignment */
  /* handler:onContentAssignment */
  onContentAssignment(___arguments) {
    var content2;

function textToTitleCase(str) {
  return str.replace(/\S+/g,
      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});
}


  if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'notInstalled') {
    content2 = 'Not Installed';
  } else {
    content2 = textToTitleCase(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']);
  }

  return content2

  },
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/serverStatus/components/24bf7b1a72e1b311f2ad3fe693ce165e/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList;


  classList = ['ServerStatus__ItemBtn'];
  if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'running' || (___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'changing') {
    classList = ['ServerStatus__ItemBtn', 'ServerStatus__ItemBtn--StopActive'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* handler:onClick */
  async onClick(___arguments) {
      if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'running' || (___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'changing') {
    console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['name']),'state': 'stop','hidden': false })));
  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/serverStatus/components/0856fd497a89d70cc7d2aa08ec3b5275/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList;


  classList = ['ServerStatus__BtnIconStop'];
  if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'running' || (___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'changing') {
    classList = ['ServerStatus__BtnIconStop', 'ServerStatus__BtnIconStop--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./pages/serverStatus/components/ff5a02b652d4cb723ed798626a4de138/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'running' || (___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'changing') {
    console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['name']),'state': 'restart','hidden': false })));
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList;


  classList = ['ServerStatus__ItemBtn'];
  if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'running' || (___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'changing') {
    classList = ['ServerStatus__ItemBtn', 'ServerStatus__ItemBtn--RestartActive'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./pages/serverStatus/components/3be4e93d5717c928d00382deffb4da86/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList;


  classList = ['ServerStatus__BtnIconRestart'];
  if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'running' || (___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'changing') {
    classList = ['ServerStatus__BtnIconRestart--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./pages/serverStatus/components/637d6837ca5552e26e13e3fc9ed73b35/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList;


  classList = ['ServerStatus__ItemBtn'];
  if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'stopped') {
    classList = ['ServerStatus__ItemBtn', 'ServerStatus__ItemBtn--StartActive'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* handler:onClick */
  async onClick(___arguments) {
      if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'stopped') {
    console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['name']),'state': 'start','hidden': false })));
  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/serverStatus/components/1ce66859038118bc4e55de0f56dff638/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList;


  classList = ['ServerStatus__BtnIconStart'];
  if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'stopped') {
    classList = ['ServerStatus__BtnIconStart--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./pages/serverStatus/components/1d560e5d54b6275603bda32524bb311e/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (___arguments.value) {
    addItemToList((___arguments.context.pageData['groupActionList']), ___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'));
  } else {
    ___arguments.context.pageData['groupActionList'] = (await asyncListFilter((___arguments.context.pageData['groupActionList']), async (item) => {


     return ((item['name']) != (___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['name']));
    }));
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/serverStatus/components/6759802728a72cb9eab5aa54c34c639f/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  onChange(___arguments) {
    var j;


  if (___arguments.value) {
    ___arguments.context.pageData['groupActionList'] = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('0fbd34b64c4b8f271001b02635bd0324'));
  } else {
    ___arguments.context.pageData['groupActionList'] = [];
  }
  var j_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('0fbd34b64c4b8f271001b02635bd0324'));
  for (var j_index in j_list) {
    j = j_list[j_index];
    j['checked'] = ___arguments.value;
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/serverStatus/components/3495ed1250d912224aad061bd17776b6/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, item, groupActionList, currentItem, checkedItem;


  var checkedItem_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('0fbd34b64c4b8f271001b02635bd0324'));
  for (var checkedItem_index in checkedItem_list) {
    checkedItem = checkedItem_list[checkedItem_index];
    checkedItem['checked'] = false;
  }
  ___arguments.context.pageData['checkedAll'] = false;
  groupActionList = (___arguments.context.pageData['groupActionList']);
  ___arguments.context.pageData['groupActionList'] = [];
  for (var checkedItem_index2 in groupActionList) {
    checkedItem = groupActionList[checkedItem_index2];
    var currentItem_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('eabb8cf45a71bcf1946dc53f30c31b8e'));
    for (var currentItem_index in currentItem_list) {
      currentItem = currentItem_list[currentItem_index];
      if ((checkedItem['name']) == (currentItem['name'])) {
        checkedItem['status'] = (currentItem['status']);
      }
    }
  }
  for (var item_index in groupActionList) {
    item = groupActionList[item_index];
    if ((item['status']) == 'running' || (item['status']) == 'changing') {
      try {
        console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (item['name']),'state': 'stop','hidden': false })));

      } catch (error) {
        ;await ( async function (message){ alert(message) })((error['message']));

      }
    }
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList, item;


  classList = ['ServerStatus__StopAllBtn'];
  if (___arguments.context.pageData['groupActionList']) {
    if ((___arguments.context.pageData['groupActionList']).length != 0) {
      classList = ['ServerStatus__StopAllBtn bl-text', 'ServerStatus__StopAllBtn--active'];
    }
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./pages/serverStatus/components/34d13e2e4e07a9777c29d843e202cb7e/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, item, groupActionList, j, currentItem, checkedItem;


  var j_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('0fbd34b64c4b8f271001b02635bd0324'));
  for (var j_index in j_list) {
    j = j_list[j_index];
    j['checked'] = false;
  }
  ___arguments.context.pageData['checkedAll'] = false;
  groupActionList = (___arguments.context.pageData['groupActionList']);
  ___arguments.context.pageData['groupActionList'] = [];
  for (var checkedItem_index in groupActionList) {
    checkedItem = groupActionList[checkedItem_index];
    var currentItem_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('eabb8cf45a71bcf1946dc53f30c31b8e'));
    for (var currentItem_index in currentItem_list) {
      currentItem = currentItem_list[currentItem_index];
      if ((checkedItem['name']) == (currentItem['name'])) {
        checkedItem['status'] = (currentItem['status']);
      }
    }
  }
  for (var item_index in groupActionList) {
    item = groupActionList[item_index];
    if ((item['status']) == 'running' || (item['status']) == 'changing') {
      try {
        console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (item['name']),'state': 'restart','hidden': false })));

      } catch (error) {
        ;await ( async function (message){ alert(message) })((error['message']));

      }
    }
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList, item;


  classList = ['ServerStatus__RestartAllBtn'];
  if (___arguments.context.pageData['groupActionList']) {
    if ((___arguments.context.pageData['groupActionList']).length != 0) {
      classList = ['ServerStatus__RestartAllBtn', 'ServerStatus__RestartAllBtn--active'];
    }
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./pages/serverStatus/components/295fb372f529cba18d6db14ddb7d3d2e/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, item, groupActionList, j, currentItem, checkedItem;


  var j_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('0fbd34b64c4b8f271001b02635bd0324'));
  for (var j_index in j_list) {
    j = j_list[j_index];
    j['checked'] = false;
  }
  ___arguments.context.pageData['checkedAll'] = false;
  groupActionList = (___arguments.context.pageData['groupActionList']);
  ___arguments.context.pageData['groupActionList'] = [];
  for (var checkedItem_index in groupActionList) {
    checkedItem = groupActionList[checkedItem_index];
    var currentItem_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('eabb8cf45a71bcf1946dc53f30c31b8e'));
    for (var currentItem_index in currentItem_list) {
      currentItem = currentItem_list[currentItem_index];
      if ((checkedItem['name']) == (currentItem['name'])) {
        checkedItem['status'] = (currentItem['status']);
      }
    }
  }
  for (var item_index in groupActionList) {
    item = groupActionList[item_index];
    if ((item['status']) == 'stopped') {
      try {
        console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (item['name']),'state': 'start','hidden': false })));

      } catch (error) {
        ;await ( async function (message){ alert(message) })((error['message']));

      }
    }
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList, item;


  classList = ['ServerStatus__StartAllBtn'];
  if (___arguments.context.pageData['groupActionList']) {
    if ((___arguments.context.pageData['groupActionList']).length != 0) {
      classList = ['ServerStatus__StartAllBtn', 'ServerStatus__StartAllBtn--active'];
    }
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./pages/serverStatus/components/0fbd34b64c4b8f271001b02635bd0324/bundle.js', [], () => ({
  /* content */
  /* handler:onDynamicItemsAssignment */
  onDynamicItemsAssignment(___arguments) {
      return (___arguments.context.appData['statusData'])

  },
  /* handler:onDynamicItemsAssignment */
  /* content */
}))

define('./pages/serviceLogs/components/7e437288f19344daa5a4bed75c728637/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
    function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('9051123f6b4f94ef192265039293d4cd'))['display'] = 'none';
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('232827adb9a5f36d5621ab56e377cca9'))['display'] = 'none';
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('bf4ddcd624beb122ea9990fa10566b0f'))['display'] = 'flex';
  if (((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('7e437288f19344daa5a4bed75c728637')).length == 1) {
    addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('7e437288f19344daa5a4bed75c728637')), 'ServerLogs__TabsLabel--active');
    if (((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('184ed6e69bd6d8f1e8fc35c7403c36e5')).length > 1) {
      ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('184ed6e69bd6d8f1e8fc35c7403c36e5')).pop();
    }
    if (((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('64b6f006eead4076cacfac687291d9c6')).length > 1) {
      ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('64b6f006eead4076cacfac687291d9c6')).pop();
    }
  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/serviceLogs/components/64b6f006eead4076cacfac687291d9c6/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
    function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('9051123f6b4f94ef192265039293d4cd'))['display'] = 'none';
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('bf4ddcd624beb122ea9990fa10566b0f'))['display'] = 'none';
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('232827adb9a5f36d5621ab56e377cca9'))['display'] = 'flex';
  if (((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('64b6f006eead4076cacfac687291d9c6')).length == 1) {
    addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('64b6f006eead4076cacfac687291d9c6')), 'ServerLogs__TabsLabel--active');
    if (((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('184ed6e69bd6d8f1e8fc35c7403c36e5')).length > 1) {
      ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('184ed6e69bd6d8f1e8fc35c7403c36e5')).pop();
    }
    if (((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('7e437288f19344daa5a4bed75c728637')).length > 1) {
      ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('7e437288f19344daa5a4bed75c728637')).pop();
    }
  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/serviceLogs/components/184ed6e69bd6d8f1e8fc35c7403c36e5/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
    function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('bf4ddcd624beb122ea9990fa10566b0f'))['display'] = 'none';
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('232827adb9a5f36d5621ab56e377cca9'))['display'] = 'none';
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('9051123f6b4f94ef192265039293d4cd'))['display'] = 'flex';
  if (((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('184ed6e69bd6d8f1e8fc35c7403c36e5')).length == 1) {
    addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('184ed6e69bd6d8f1e8fc35c7403c36e5')), 'ServerLogs__TabsLabel--active');
    if (((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('7e437288f19344daa5a4bed75c728637')).length > 1) {
      ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('7e437288f19344daa5a4bed75c728637')).pop();
    }
    if (((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('64b6f006eead4076cacfac687291d9c6')).length > 1) {
      ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('64b6f006eead4076cacfac687291d9c6')).pop();
    }
  }

  },
  /* handler:onClick */
  /* handler:onContentAssignment */
  onContentAssignment(___arguments) {
      return 'Logs'

  },
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/serviceLogs/components/cc6c067e2b46da2502deb333245ebfc6/bundle.js', [], () => ({
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
  async onBeforeMount(___arguments) {
    var error;

function defineGlobalScope() { const root = (typeof window !== 'undefined' ? window : global);root.codelessScope = root.codelessScope || {};return root.codelessScope;}

function getGlobalEntitiesMap(mapName) { const globalScope = defineGlobalScope();return globalScope[mapName] = globalScope[mapName] || {};}

function stopSetTimeout(timerId) {  const timers = getGlobalEntitiesMap('setIntervals'); if (timerId && timers[timerId]) {    clearInterval(timers[timerId]);    delete timers[timerId]; }}

function runSetTimeout(timerId, callback, delay) {  const timers = getGlobalEntitiesMap('setIntervals'); const timer = setInterval(callback, delay); if (timerId) {  stopSetTimeout(timerId);  timers[timerId] = timer }}


  if (___arguments.context.appData['statusData']) {
    ___arguments.context.dataModel['statusData'] = (___arguments.context.appData['statusData']);
  } else {
    try {
      ___arguments.context.dataModel['statusData'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/status', null));

    } catch (error) {
      ;await ( async function (message){ alert(message) })((error['message']));

    }
  }
  try {

    ;(function() {
      const callback = async () => {
          ___arguments.context.dataModel['statusData'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/status', null));

      };

      const timerId = 'timerStatusData';
      const timerDelay = 1000;

      runSetTimeout(timerId, callback, timerDelay)
    })()

  } catch (error) {
    ;await ( async function (message){ alert(message) })((error['message']));

  }

  },
  /* handler:onBeforeMount */
  /* content */
}))

define('./pages/serviceLogs/components/721f315c4f7e15987c55eda29943e742/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var classList, currentService, currentStatus, service, visible;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  visible = true;
  if (___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['statusData']) {
    currentService = (await asyncListFilter((___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['statusData']), async (service) => {


     return ((service['name']) == (___arguments.context.pageData['serviceName']));
    }));
    currentStatus = ((currentService[0])['status']);
    if (currentStatus == 'stopped') {
      visible = false;
    }
    if (currentStatus == 'notInstalled') {
      visible = false;
    }
    if (currentStatus == 'complete') {
      visible = false;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* handler:onClick */
  async onClick(___arguments) {
      console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (___arguments.context.pageData['serviceName']),'state': 'stop','hidden': false })));

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/serviceLogs/components/c0128152af0d6e8140ecf17af47e2651/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  async onClassListAssignment(___arguments) {
    var classList, currentStatus, currentService, service;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  classList = ['ServerLogs__ControlsIcon'];
  if (___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['statusData']) {
    currentService = (await asyncListFilter((___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['statusData']), async (service) => {


     return ((service['name']) == (___arguments.context.pageData['serviceName']));
    }));
    currentStatus = ((currentService[0])['status']);
    if (currentStatus == 'running') {
      classList = ['ServerLogs__ControlsIcon', 'ServerLogs__ControlsIconRunning'];
    }
    if (currentStatus == 'stopped') {
      classList = ['ServerLogs__ControlsIcon', 'ServerLogs__ControlsIconStopped'];
    }
    if (currentStatus == 'notInstalled') {
      classList = ['ServerLogs__ControlsIcon', 'ServerLogs__ControlsIconNotinstalled'];
    }
    if (currentStatus == 'complete') {
      classList = ['ServerLogs__ControlsIcon', 'ServerLogs__ControlsIconComplete'];
    }
    if (currentStatus == 'changing') {
      classList = ['ServerLogs__ControlsIcon', 'ServerLogs__ControlsIconChanging'];
    }
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./pages/serviceLogs/components/ff639427cbb2fd7735982d312e54c2fb/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var classList, currentService, currentStatus, service, vivsible;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  vivsible = true;
  if (___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['statusData']) {
    currentService = (await asyncListFilter((___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['statusData']), async (service) => {


     return ((service['name']) == (___arguments.context.pageData['serviceName']));
    }));
    currentStatus = ((currentService[0])['status']);
    if (currentStatus == 'stopped') {
      vivsible = false;
    }
    if (currentStatus == 'notInstalled') {
      vivsible = false;
    }
    if (currentStatus == 'complete') {
      vivsible = false;
    }
  }

  return vivsible

  },
  /* handler:onDisplayAssignment */
  /* handler:onClick */
  async onClick(___arguments) {
      console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (___arguments.context.pageData['serviceName']),'state': 'restart','hidden': false })));

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/serviceLogs/components/17e15d26a59d2afecccd78a80f2b5081/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var classList, currentService, currentStatus, service, visible;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  visible = true;
  if (___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['statusData']) {
    currentService = (await asyncListFilter((___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['statusData']), async (service) => {


     return ((service['name']) == (___arguments.context.pageData['serviceName']));
    }));
    currentStatus = ((currentService[0])['status']);
    if (currentStatus == 'running') {
      visible = false;
    }
    if (currentStatus == 'notInstalled') {
      visible = false;
    }
    if (currentStatus == 'complete') {
      visible = false;
    }
    if (currentStatus == 'changing') {
      visible = false;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* handler:onClick */
  async onClick(___arguments) {
      console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (___arguments.context.pageData['serviceName']),'state': 'start','hidden': false })));

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/serviceLogs/components/924202b19f0ef683e3940a99b258d565/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
      ;await ( async function (component){ component.el.scrollIntoView() })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('766bf461796308dbbad8e8489727e7c2')));

  return true

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/serviceLogs/components/9051123f6b4f94ef192265039293d4cd/bundle.js', [], () => ({
  /* content */
  /* handler:onDynamicItemsAssignment */
  onDynamicItemsAssignment(___arguments) {
      return (___arguments.context.appData['logData'])

  },
  /* handler:onDynamicItemsAssignment */
  /* content */
}))

define('./pages/serviceLogs/components/8bc4792e519b80bac6992c938c05b82a/bundle.js', [], () => ({
  /* content */
  /* handler:onContentAssignment */
  onContentAssignment(___arguments) {
      return ___arguments.context.dataModel

  },
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/serviceLogs/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onEnter */
  async onEnter(___arguments) {
      if (!(___arguments.context.pageData['serviceName'])) {
    ___arguments.context.pageData['serviceName'] = 'bl-server';
  }
  if (!(___arguments.context.appData['logData'])) {
    ___arguments.context.appData['logData'] = [];
    await (async function(serviceName, logsArray) {
    	const io = await BackendlessUI.requireModule('https://cdn.jsdelivr.net/npm/socket.io-client@4.4.0/dist/socket.io.min.js');

    	const socket = io.connect('http://localhost:5051', { transports : ['websocket'] });


    	  socket.on (`${serviceName}-logs`, function (data) {
    	    logsArray.push (data);
    	  });

    	  socket.emit ('service-logs:subscribe', {
    	    "serviceName":`${serviceName}`,
    	    "channelName": `${serviceName}-logs`
    	  });

    	  setTimeout ( () => {

    	    socket.emit ('service-logs:unsubscribe', {
    	    "serviceName":`${serviceName}`,
    	    "channelName":`${serviceName}-logs`
    	    });
    	    socket.disconnect();

    	  },500 )







    })((___arguments.context.pageData['serviceName']), (___arguments.context.appData['logData']));
  }

  },
  /* handler:onEnter */
  /* content */
}))
