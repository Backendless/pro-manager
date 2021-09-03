require.config({
    waitSeconds: 60,
    paths: {
        'sdk': uiBuilderSDKPath + '/sdk',
    }
});

const Backendless_appPath = `http://localhost:5050`

define(['sdk'], BackendlessUI => {
    BackendlessUI.startApp()
});

define('./pages/404/components/902c9641de4ec9e73427e7192a118d14/bundle.js', [], () => ({
  /* content */

  /* handler:onClick */
  async onClick(___arguments) {
      ;await ( async function (pageName, pageData){ BackendlessUI.goToPage(pageName, pageData) })('', null);

  },  
/* handler:onClick *//* content */
}));

define('./pages/landing/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onEnter */
  async onEnter(___arguments) {
      ;(function (componentUid, dataModel){ return ___arguments.context.setComponentDataStoreByUid(componentUid, dataModel) })('d64762c9751351c6bb8f35ac073c5a17', (await Backendless.Request.get(`${Backendless_appPath}/services/install/default-arguments`).set((function(h){if(!h['user-token']){delete h['user-token']} return h})({ 'user-token': Backendless.getCurrentUserToken() })).send()));
  ___arguments.context.pageData['defaults'] = (await Backendless.Request.get(`${Backendless_appPath}/services/install/default-arguments`).set((function(h){if(!h['user-token']){delete h['user-token']} return h})({ 'user-token': Backendless.getCurrentUserToken() })).send());

  },  
  /* handler:onEnter */
  /* content */
}))

define('./pages/landing/components/e8ab1434c6365dab092ef9b3240c4126/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      await Backendless.Request.post(`${Backendless_appPath}/services/install/`).set('Content-Type', 'application/json').set((function(h){if(!h['user-token']){delete h['user-token']} return h})({ 'user-token': Backendless.getCurrentUserToken() })).send(JSON.stringify(({ 'version': (((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('d64762c9751351c6bb8f35ac073c5a17'))['version']),'port': (((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('d64762c9751351c6bb8f35ac073c5a17'))['port']),'mountPath': (((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('d64762c9751351c6bb8f35ac073c5a17'))['mountPath']),'licence': (((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('d64762c9751351c6bb8f35ac073c5a17'))['licence']) })));
  ;(function (componentUid, dataModel){ return ___arguments.context.setComponentDataStoreByUid(componentUid, dataModel) })('85bca2fbc4ee3a8d6adc7ed882a45ad1', (await Backendless.Request.get(`${Backendless_appPath}/services/install/status?date=${new Date()}`).set((function(h){if(!h['user-token']){delete h['user-token']} return h})({ 'user-token': Backendless.getCurrentUserToken() })).send()));
  ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d64762c9751351c6bb8f35ac073c5a17', false);
  ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('85bca2fbc4ee3a8d6adc7ed882a45ad1', true);
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('ef2711536155ffa5de27d36f375510dd'))['width'] = (String(((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('85bca2fbc4ee3a8d6adc7ed882a45ad1'))['progress']) + String('%'));
  for (var count = 0; count < 2; count++) {
    await new Promise(r => setTimeout(r, 1500 || 0));
    ;(function (componentUid, dataModel){ return ___arguments.context.setComponentDataStoreByUid(componentUid, dataModel) })('85bca2fbc4ee3a8d6adc7ed882a45ad1', (await Backendless.Request.get(`${Backendless_appPath}/services/install/status?date=${new Date()}`).set((function(h){if(!h['user-token']){delete h['user-token']} return h})({ 'user-token': Backendless.getCurrentUserToken() })).send()));
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('ef2711536155ffa5de27d36f375510dd'))['width'] = (String(((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('85bca2fbc4ee3a8d6adc7ed882a45ad1'))['progress']) + String('%'));
  }
  ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('85bca2fbc4ee3a8d6adc7ed882a45ad1'))['progress'] = 100;
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('ef2711536155ffa5de27d36f375510dd'))['width'] = (String(((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('85bca2fbc4ee3a8d6adc7ed882a45ad1'))['progress']) + String('%'));

  },  
  /* handler:onClick */
  /* handler:onDisabledStateAssignment */
  onDisabledStateAssignment(___arguments) {
      return (!(___arguments.context.getComponentDataStoreByUid('d64762c9751351c6bb8f35ac073c5a17')['version']) || !(___arguments.context.getComponentDataStoreByUid('d64762c9751351c6bb8f35ac073c5a17')['port']) || !(___arguments.context.getComponentDataStoreByUid('d64762c9751351c6bb8f35ac073c5a17')['mountPath']) || !(___arguments.context.getComponentDataStoreByUid('d64762c9751351c6bb8f35ac073c5a17')['licence']))

  },  
  /* handler:onDisabledStateAssignment */
  /* content */
}))

define('./pages/landing/components/85bca2fbc4ee3a8d6adc7ed882a45ad1/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  onMounted(___arguments) {
    
  },  
  /* handler:onMounted */
  /* content */
}))

define('./pages/landing/components/cfb590020fdb4f339997e6cbf852e53f/bundle.js', [], () => ({
  /* content */
  /* handler:onContentAssignment */
  onContentAssignment(___arguments) {
    var time;


  time = (___arguments.context.dataModel['time']) * 1000;

  return ([((new Date(time)).toLocaleTimeString()),' ',(___arguments.context.dataModel['message'])].join(''))

  },  
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/landing/components/57ecc035cc7401123c2e0e4ed413fc45/bundle.js', [], () => ({
  /* content */
  /* handler:onContentAssignment */
  onContentAssignment(___arguments) {
      return (String(___arguments.context.getComponentDataStoreByUid('85bca2fbc4ee3a8d6adc7ed882a45ad1')['progress']) + String('%'))

  },  
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/landing/components/dedf17cb4ba461e8f5bfa00f7aef7123/bundle.js', [], () => ({
  /* content */
  /* handler:onContentAssignment */
  onContentAssignment(___arguments) {
      return ((___arguments.context.getComponentDataStoreByUid('85bca2fbc4ee3a8d6adc7ed882a45ad1')['messages']) ? ((___arguments.context.getComponentDataStoreByUid('85bca2fbc4ee3a8d6adc7ed882a45ad1')['progress']) == 100 ? 'INSTALL COMPLETE!' : (((___arguments.context.getComponentDataStoreByUid('85bca2fbc4ee3a8d6adc7ed882a45ad1')['messages']).slice(-1)[0])['message'])) : null)

  },  
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/landing/components/59a9659fc0d9004800bb986754eb6f47/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  onDisplayAssignment(___arguments) {
      return ((___arguments.context.getComponentDataStoreByUid('85bca2fbc4ee3a8d6adc7ed882a45ad1')['progress']) == 100)

  },  
  /* handler:onDisplayAssignment */
  /* handler:onClick */
  async onClick(___arguments) {
    function defineGlobalScope() { const root = (typeof window !== 'undefined' ? window : global);root.codelessScope = root.codelessScope || {};return root.codelessScope;}

function getGlobalEntitiesMap(mapName) { const globalScope = defineGlobalScope();return globalScope[mapName] = globalScope[mapName] || {};}

function stopSetTimeout(timerId) {  const timers = getGlobalEntitiesMap('setIntervals'); if (timerId && timers[timerId]) {    clearInterval(timers[timerId]);    delete timers[timerId]; }}

function runSetTimeout(timerId, callback, delay) {  const timers = getGlobalEntitiesMap('setIntervals'); const timer = setInterval(callback, delay); if (timerId) {  stopSetTimeout(timerId);  timers[timerId] = timer }}


  ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('d0dbef53b8c80847a1ca79a3750cf0f1'))['statusList'] = (await Backendless.Request.get(`${Backendless_appPath}/services/manage/status?date=${new Date()}`).set((function(h){if(!h['user-token']){delete h['user-token']} return h})({ 'user-token': Backendless.getCurrentUserToken() })).send());

  ;(function() {
    const callback = async () => {
        ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('d0dbef53b8c80847a1ca79a3750cf0f1'))['statusList'] = (await Backendless.Request.get(`${Backendless_appPath}/services/manage/status?date=${new Date()}`).set((function(h){if(!h['user-token']){delete h['user-token']} return h})({ 'user-token': Backendless.getCurrentUserToken() })).send());

    };

    const timerId = '';
    const timerDelay = 1000;

    runSetTimeout(timerId, callback, timerDelay)
  })()
  ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('9f14f707ac5a4d7fdcde61783a5293d3', false);
  ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d0dbef53b8c80847a1ca79a3750cf0f1', true);

  },  
  /* handler:onClick */
  /* content */
}))

define('./pages/landing/components/479b2a33da7b6974e864d71afcfcd975/bundle.js', [], () => ({
  /* content */
  /* handler:onIconAssignment */
  onIconAssignment(___arguments) {
    var icon;


  if ((___arguments.context.getComponentDataStoreByUid('457c6629fffdd48c7b8ff32e19c4a0cc')['state']) == 'running') {
    icon = 'arrow circle up';
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('479b2a33da7b6974e864d71afcfcd975'))['color'] = '#009E0F';
  } else if ((___arguments.context.getComponentDataStoreByUid('457c6629fffdd48c7b8ff32e19c4a0cc')['state']) == 'down') {
    icon = 'arrow circle down';
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('479b2a33da7b6974e864d71afcfcd975'))['color'] = '#CF2A27';
  } else if ((___arguments.context.getComponentDataStoreByUid('457c6629fffdd48c7b8ff32e19c4a0cc')['state']) == 'starting') {
    icon = 'pause circle outline';
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('479b2a33da7b6974e864d71afcfcd975'))['color'] = '#009E0F';
  } else if ((___arguments.context.getComponentDataStoreByUid('457c6629fffdd48c7b8ff32e19c4a0cc')['state']) == 'stopping') {
    icon = 'pause circle outline';
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('479b2a33da7b6974e864d71afcfcd975'))['color'] = '#CF2A27';
  } else if ((___arguments.context.getComponentDataStoreByUid('457c6629fffdd48c7b8ff32e19c4a0cc')['state']) == 'disabled') {
    icon = 'stop circle';
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('479b2a33da7b6974e864d71afcfcd975'))['color'] = '#999';
  }

  return icon

  },  
  /* handler:onIconAssignment */
  /* handler:onMouseOver */
  onMouseOver(___arguments) {
      ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('479b2a33da7b6974e864d71afcfcd975'))['tooltipText'] = (___arguments.context.getComponentDataStoreByUid('457c6629fffdd48c7b8ff32e19c4a0cc')['message']);
  ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('479b2a33da7b6974e864d71afcfcd975'))['tooltipPlacement'] = 'top';

  },  
  /* handler:onMouseOver */
  /* content */
}))

define('./pages/landing/components/457c6629fffdd48c7b8ff32e19c4a0cc/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  onDisplayAssignment(___arguments) {
      return ((___arguments.context.dataModel['state']) != 'disabled')

  },  
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/landing/components/711ff4a9a8a495c3a6f58613b8b1c992/bundle.js', [], () => ({
  /* content */
  /* handler:onMouseOver */
  onMouseOver(___arguments) {
      ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('abf2f16d6ac5a18854d3e8b3cc2635a6'))['tooltipText'] = (___arguments.context.getComponentDataStoreByUid('457c6629fffdd48c7b8ff32e19c4a0cc')['message']);
  ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('abf2f16d6ac5a18854d3e8b3cc2635a6'))['tooltipPlacement'] = 'top';

  },  
  /* handler:onMouseOver */
  /* content */
}))

define('./pages/landing/components/7449e3dcdfa88c517a5f189326054e2a/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
      return ((___arguments.context.getComponentDataStoreByUid('457c6629fffdd48c7b8ff32e19c4a0cc')['state']) == 'running' || (___arguments.context.getComponentDataStoreByUid('457c6629fffdd48c7b8ff32e19c4a0cc')['state']) == 'starting' ? [] : ['hidden'])

  },  
  /* handler:onClassListAssignment */
  /* content */
}))

define('./pages/landing/components/6273606ad0c8da6687b596d645d24e1f/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
      return ((___arguments.context.getComponentDataStoreByUid('457c6629fffdd48c7b8ff32e19c4a0cc')['state']) != 'running' && (___arguments.context.getComponentDataStoreByUid('457c6629fffdd48c7b8ff32e19c4a0cc')['state']) != 'starting' ? [] : ['hidden'])

  },  
  /* handler:onClassListAssignment */
  /* content */
}))

define('./pages/landing/components/97c567a4702912bf3ab71859bbe2765a/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      await Backendless.Request.put(`${Backendless_appPath}/services/manage/state`).set('Content-Type', 'application/json').set((function(h){if(!h['user-token']){delete h['user-token']} return h})({ 'user-token': Backendless.getCurrentUserToken() })).send(JSON.stringify(({ 'serviceName': (___arguments.context.getComponentDataStoreByUid('457c6629fffdd48c7b8ff32e19c4a0cc')['name']),'state': 'stop','hidden': false })));

  },  
  /* handler:onClick */
  /* content */
}))

define('./pages/landing/components/9015e93d81e6e3bbd4dbbb490432bdb2/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      await Backendless.Request.put(`${Backendless_appPath}/services/manage/state`).set('Content-Type', 'application/json').set((function(h){if(!h['user-token']){delete h['user-token']} return h})({ 'user-token': Backendless.getCurrentUserToken() })).send(JSON.stringify(({ 'serviceName': (___arguments.context.getComponentDataStoreByUid('457c6629fffdd48c7b8ff32e19c4a0cc')['name']),'state': 'restart','hidden': false })));

  },  
  /* handler:onClick */
  /* content */
}))

define('./pages/landing/components/466b4f2918c95779c4e7f11530b8a988/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      await Backendless.Request.put(`${Backendless_appPath}/services/manage/state`).set('Content-Type', 'application/json').set((function(h){if(!h['user-token']){delete h['user-token']} return h})({ 'user-token': Backendless.getCurrentUserToken() })).send(JSON.stringify(({ 'serviceName': (___arguments.context.getComponentDataStoreByUid('457c6629fffdd48c7b8ff32e19c4a0cc')['name']),'state': 'start','hidden': false })));

  },  
  /* handler:onClick */
  /* content */
}))

define('./pages/landing/components/754bfc61e5c393581b798c31d51ec203/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
      ___arguments.context.getComponentDataStoreByUid('d64762c9751351c6bb8f35ac073c5a17')['version'] = ((___arguments.context.pageData['defaults'])['version']);

  },  
  /* handler:onClick */
  /* content */
}))

define('./pages/landing/components/d56bad183bd940dffcdcab68ad19ce15/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
      ___arguments.context.getComponentDataStoreByUid('d64762c9751351c6bb8f35ac073c5a17')['mountPath'] = ((___arguments.context.pageData['defaults'])['mountPath']);

  },  
  /* handler:onClick */
  /* content */
}))

define('./pages/landing/components/11873449cbdbbbff2b6a4729020ca31b/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
      return ((___arguments.context.getComponentDataStoreByUid('d64762c9751351c6bb8f35ac073c5a17')['version']) ? ['configure__input configure__input-version', 'valid'] : ['configure__input configure__input-version', 'invalid'])

  },  
  /* handler:onClassListAssignment */
  /* content */
}))

define('./pages/landing/components/3e958ac9decced612cb42d1deb42762f/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
      return ((___arguments.context.getComponentDataStoreByUid('d64762c9751351c6bb8f35ac073c5a17')['port']) ? ['configure__input configure__input-port', 'valid'] : ['configure__input configure__input-port', 'invalid'])

  },  
  /* handler:onClassListAssignment */
  /* content */
}))

define('./pages/landing/components/aa0adf05e875f996906a1e8a8dc2f3c8/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
      return ((___arguments.context.getComponentDataStoreByUid('d64762c9751351c6bb8f35ac073c5a17')['mountPath']) ? ['configure__input configure__input-path', 'valid'] : ['configure__input configure__input-path', 'invalid'])

  },  
  /* handler:onClassListAssignment */
  /* content */
}))

define('./pages/landing/components/050dce71f02927316de6f4c574748414/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
      return ((___arguments.context.getComponentDataStoreByUid('d64762c9751351c6bb8f35ac073c5a17')['licence']) ? ['configure__input configure__input-licence', 'valid'] : ['configure__input configure__input-licence', 'invalid'])

  },  
  /* handler:onClassListAssignment */
  /* content */
}))
