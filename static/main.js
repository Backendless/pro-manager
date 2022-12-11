require.config({
    paths: {
        'sdk': uiBuilderSDKPath + '/sdk',
    }
});

define(['sdk'], BackendlessUI => BackendlessUI.startApp());

define('./functions/4f8fe7d853c915840a67685fa058d83f/code.js', () => { 

BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f'] = async function fn_4f8fe7d853c915840a67685fa058d83f(descriptionList, name) {
var item;

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



return (getObjectProperty(((await asyncListFilter(descriptionList, async (item) => {


 return ((getObjectProperty(item, 'name')) == name);
}))[0]), 'description'))
}

})
define('./functions/696a14dd8d2f85be7023c2c4441a65a5/code.js', () => { 

BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5'] = async function fn_696a14dd8d2f85be7023c2c4441a65a5(method, path, body) {
var data, host, currentOrigin, settingsOrigin, error;

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


  currentOrigin = (getObjectProperty(((function () { return window.location })()), 'origin'));
  if (currentOrigin == 'https://teemingkitty.backendless.app') {
    data = (await Backendless.Request[method]((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String((await (async function() {
    	return BackendlessUI.config.settings.proManagerAPIURL || 'http://localhost:5050/services'
    })())) + String(path)))).setEncoding('utf8').send(body));
  } else {
    try {
      if (!((function(){ try { return JSON.parse(localStorage.getItem('originLoad')) } catch(e){ return null }})())) {
        settingsOrigin = (getObjectProperty((await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String(currentOrigin) + String('/settings.json')))).setEncoding('utf8').send()), 'serverURL'));
        localStorage.setItem('originLoad', JSON.stringify(true));
        localStorage.setItem('settingsOrigin', JSON.stringify(settingsOrigin));
      }
      settingsOrigin = ((function(){ try { return JSON.parse(localStorage.getItem('settingsOrigin')) } catch(e){ return null }})());

    } catch (error) {
      console.log(getObjectProperty(error, 'message'));

    }
    if (settingsOrigin) {
      host = settingsOrigin;
    } else {
      host = currentOrigin;
    }
    data = (await Backendless.Request[method]((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})(([host,'/services',path].join('')))).setEncoding('utf8').send(body));
  }

return data
}

})
define('./functions/8f16ba2ef5c9c7a7b32d569b3762f6c4/code.js', () => { 

BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'] = async function fn_8f16ba2ef5c9c7a7b32d569b3762f6c4(pageData, message, color, alert, styleAlert, styleAlertText) {
    pageData['alertMessage'] = message;
  styleAlertText['color'] = color;
  styleAlert['bottom'] = 0;
  await new Promise(r => setTimeout(r, 2000 || 0));
  styleAlert['bottom'] = (String(-(await ( async function (typeSize, component){ return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', alert))) + String('px'));



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

define('./pages/dataService/components/9f186f89932cdfe880554e43f4f916a1/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  async onMounted(___arguments) {
      if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  }
  if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  }
  ___arguments.context.pageData['description'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/data/describe', null));
  ___arguments.context.pageData['dataContainer'] = [(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/data/config', null))];
  if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
  }
  if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'flex';
  }

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/dataService/components/198c9c59e5389ad5ff37a4bb3e22bce5/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'Max page size'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/dataService/components/6ee9263676997e3caaa315452be887df/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'Count for console'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/dataService/components/cb32ffe5c76e4f69d148911494c6952e/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'Default page size'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/dataService/components/cd73b3928006379f77b53b870895e855/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'Max bulk create'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/dataService/components/b11bd95b7c781e9ce31e01ee1b83b966/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'Max counters retrieve size'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/dataService/components/5a537424c7d5f0fa5c2169ba52cdc3b9/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, isValid, item, descriptionItem;


  isValid = true;
  var item_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    var descriptionItem_list = (___arguments.context.pageData['description']);
    for (var descriptionItem_index in descriptionItem_list) {
      descriptionItem = descriptionItem_list[descriptionItem_index];
      if (descriptionItem['required']) {
        if (!(item[(descriptionItem['name'])])) {
          isValid = false;
        }
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveDisabled'] = true;
  ___arguments.context.pageData['btnSave'] = 'Saving...';
  try {
    console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/data/config?restart=false', (((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'))[0])));
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data was saved successfully', '#fff', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  } catch (error) {
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (error['message']), '#ffa500', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/dataService/components/b4ac65b40f178182007af4f16afe24d6/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  onMounted(___arguments) {
      ___arguments.context.pageData['btnSave'] = 'Save';
  ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/dataService/components/33a848b796b77f762a2122974b1af0aa/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, isValid, item, descriptionItem;


  isValid = true;
  var item_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    var descriptionItem_list = (___arguments.context.pageData['description']);
    for (var descriptionItem_index in descriptionItem_list) {
      descriptionItem = descriptionItem_list[descriptionItem_index];
      if (descriptionItem['required']) {
        if (!(item[(descriptionItem['name'])])) {
          isValid = false;
        }
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveRestartDisabled'] = true;
  ___arguments.context.pageData['btnSaveRestart'] = 'Saving...';
  try {
    console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/data/config?restart=true', (((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'))[0])));
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data was saved successfully', '#fff', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  } catch (error) {
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (error['message']), '#ffa500', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/dataService/components/7e1ac109ebbe4db399af721c8b472bd2/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Max page size');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/dataService/components/57c1dbc34b1c989c67cdeee5b059df3e/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Default page size');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('49cfbb2af051f87d5dccc9944ddcb7b2', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('49cfbb2af051f87d5dccc9944ddcb7b2', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/dataService/components/febabf157a01b6cc64e1b8f62b1e1a32/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Max bulk create');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('c37570257cfd551e117c464d74721426', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('c37570257cfd551e117c464d74721426', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/dataService/components/826adfb80e9fa3f9c4d409ef7c4fb6a8/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Max counters retrieve size');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f6024c35a4be53e6b64b776ba73ce95c', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f6024c35a4be53e6b64b776ba73ce95c', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/dataService/components/f6024c35a4be53e6b64b776ba73ce95c/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Max counters retrieve size');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['Max counters retrieve size']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/dataService/components/f2cd77e13a5f3c9633a2a81f62910c09/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Max page size');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['Max page size']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/dataService/components/49cfbb2af051f87d5dccc9944ddcb7b2/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Default page size');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['Default page size']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/dataService/components/c37570257cfd551e117c464d74721426/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Max bulk create');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['Max bulk create']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/dataService/components/da5a9fb94b4e945b59defc3358320e88/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Max relation page size');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('956da196f07cacfdc983a7562c693e0a', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('956da196f07cacfdc983a7562c693e0a', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/dataService/components/956da196f07cacfdc983a7562c693e0a/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var item, visible;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Max relation page size');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['Max relation page size']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/dataService/components/b54572a4aa5d9a730e6821542c7efb6f/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'Max relation page size'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/dataService/components/f509c2ebe2c76cbdccb7691d1526a5f6/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Default relation page size');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('547f9fdb3364fb2edd716f81ac797da7', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('547f9fdb3364fb2edd716f81ac797da7', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/dataService/components/547f9fdb3364fb2edd716f81ac797da7/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var item, visible;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Default relation page size');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['Default relation page size']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/dataService/components/731ff8f7e02b1f1b1ddd65954ca550ae/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'Default relation page size'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/dataService/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* handler:onEnter */
  onEnter(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onEnter */
  /* content */
}))

define('./pages/domainsGeneral/components/9f186f89932cdfe880554e43f4f916a1/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  async ['onMounted'](___arguments) {
    var mainListData, item, dataObject, dataKey, descriptionObject, dataKeys, error;

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


  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  }
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  }
  try {
    descriptionObject = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/domain/describe', null));
    dataObject = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/domain', null));

  } catch (error) {
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), '#ffa500', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));
    if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
    }
    return ;

  }
  dataKeys = (Object.keys(dataObject));
  mainListData = [];
  for (var dataKey_index in dataKeys) {
    dataKey = dataKeys[dataKey_index];
    mainListData.push(({ 'itemName': dataKey,'dataItemList': (await Promise.all((getObjectProperty(descriptionObject, dataKey)).map(async item => {  item['data'] = (getObjectProperty((getObjectProperty(dataObject, dataKey)), (getObjectProperty(item, 'name'))));
      item['isValid'] = true;
    ; return item;}))) }));
  }
  (function (componentUid, listItems) { ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('9f186f89932cdfe880554e43f4f916a1', mainListData);
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
  }
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'flex';
  }

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/domainsGeneral/components/4038f86f5b6cacb8ee37a8efac3527aa/bundle.js', [], () => ({
  /* content */
  /* handler:onContentAssignment */
  ['onContentAssignment'](___arguments) {
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

function textToTitleCase(str) {
 return str.replace(/\S+/g, function(txt) {
   return txt[0].toUpperCase() + txt.substring(1).toLowerCase()
 })
}



  return (textToTitleCase(getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'itemName')))

  },
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/domainsGeneral/components/5a537424c7d5f0fa5c2169ba52cdc3b9/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var dataItem, dataToSave, error, field, isValid;

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


  isValid = true;
  dataToSave = (await (async function() {
  	return {}
  })());
  var dataItem_list = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var dataItem_index in dataItem_list) {
    dataItem = dataItem_list[dataItem_index];
    dataToSave[(getObjectProperty(dataItem, 'itemName'))] = (await (async function() {
    	return {}
    })());
    var field_list = (getObjectProperty(dataItem, 'dataItemList'));
    for (var field_index in field_list) {
      field = field_list[field_index];
      if ((getObjectProperty(field, 'required')) && !(getObjectProperty(field, 'data'))) {
        field['validationMsgContent'] = 'This field is required';
        field['validationMsgVisible'] = true;
        isValid = false;
      }
      if (!(getObjectProperty(field, 'isValid'))) {
        isValid = false;
      }
      (getObjectProperty(dataToSave, (getObjectProperty(dataItem, 'itemName'))))[(getObjectProperty(field, 'name'))] = (getObjectProperty(field, 'data'));
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveDisabled'] = true;
  ___arguments.context.pageData['btnSave'] = 'Saving...';
  try {
    await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/domain?restart=false', dataToSave);
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data was saved successfully', '#fff', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } catch (error) {
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), '#ffa500', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/domainsGeneral/components/b4ac65b40f178182007af4f16afe24d6/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  onMounted(___arguments) {
      ___arguments.context.pageData['btnSave'] = 'Save';
  ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/domainsGeneral/components/33a848b796b77f762a2122974b1af0aa/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, dataToSave, isValid, field, dataItem;

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


  isValid = true;
  dataToSave = (await (async function() {
  	return {}
  })());
  var dataItem_list = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var dataItem_index in dataItem_list) {
    dataItem = dataItem_list[dataItem_index];
    dataToSave[(getObjectProperty(dataItem, 'itemName'))] = (await (async function() {
    	return {}
    })());
    var field_list = (getObjectProperty(dataItem, 'dataItemList'));
    for (var field_index in field_list) {
      field = field_list[field_index];
      if ((getObjectProperty(field, 'required')) && !(getObjectProperty(field, 'data'))) {
        field['validationMsgContent'] = 'This field is required';
        field['validationMsgVisible'] = true;
        isValid = false;
      }
      if (!(getObjectProperty(field, 'isValid'))) {
        isValid = false;
      }
      (getObjectProperty(dataToSave, (getObjectProperty(dataItem, 'itemName'))))[(getObjectProperty(field, 'name'))] = (getObjectProperty(field, 'data'));
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveRestartDisabled'] = true;
  ___arguments.context.pageData['btnSaveRestart'] = 'Saving...';
  try {
    await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/domain?restart=true', dataToSave);
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data was saved successfully', '#fff', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } catch (error) {
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), '#ffa500', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/domainsGeneral/components/7e1ac109ebbe4db399af721c8b472bd2/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  ['onChange'](___arguments) {
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


  if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e'), 'required')) {
    if (___arguments.value) {
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgVisible'] = false;
    } else {
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgContent'] = 'This field is required';
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgVisible'] = true;
      return ;
    }
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e'), 'name')).toLowerCase() == 'port') {
    if ((new RegExp('^\\d+$', '')).test(___arguments.value)) {
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['isValid'] = true;
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgVisible'] = false;
    } else {
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgContent'] = 'This field must contain only numbers';
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['isValid'] = false;
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgVisible'] = true;
    }
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e'), 'name')).toLowerCase() == 'protocol') {
    if ((new RegExp('https$|http$', '')).test(___arguments.value)) {
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['isValid'] = true;
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgVisible'] = false;
    } else {
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgContent'] = 'This field must contain "http" or "https';
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['isValid'] = false;
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgVisible'] = true;
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/domainsGeneral/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* handler:onEnter */
  onEnter(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onEnter */
  /* content */
}))

define('./pages/domainsGeneral/components/3ed8f4e9c52b6277c808d7edf7577e56/bundle.js', [], () => ({
  /* content */
  /* handler:onContentAssignment */
  ['onContentAssignment'](___arguments) {
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

function textToTitleCase(str) {
 return str.replace(/\S+/g, function(txt) {
   return txt[0].toUpperCase() + txt.substring(1).toLowerCase()
 })
}



  return (textToTitleCase(getObjectProperty(___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e'), 'name')))

  },
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/9f186f89932cdfe880554e43f4f916a1/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  async ['onMounted'](___arguments) {
    var dataKey, dataKeys, dataObject, descriptionObject, item, list, mainListData;

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


  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  }
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  }
  descriptionObject = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/domain/describe', null));
  dataObject = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/domain', null));
  dataKeys = (Object.keys(dataObject));
  mainListData = [];
  for (var dataKey_index in dataKeys) {
    dataKey = dataKeys[dataKey_index];
    mainListData.push(({ 'itemName': dataKey,'dataItemList': (await Promise.all((getObjectProperty(descriptionObject, dataKey)).map(async item => {  item[(getObjectProperty(item, 'name'))] = (getObjectProperty((getObjectProperty(dataObject, dataKey)), (getObjectProperty(item, 'name'))));
    ; return item;}))) }));
  }
  console.log(mainListData);
  ___arguments.context.pageData['description'] = (await (async function() {
  	const descr = [
  	    {
  	        "name": "host",
  	        "description": "Host for connection",
  	        "regex": ".*",
  	        "type": "string",
  	        "required": true
  	    },
  	    {
  	        "name": "port",
  	        "description": "Port for connection",
  	        "regex": "[0-9]",
  	        "type": "number",
  	        "required": true
  	    },
  	    {
  	        "name": "protocol",
  	        "description": "protocol",
  	        "regex": ".*",
  	        "type": "string",
  	        "required": true
  	    },
  	    {
  	        "name": "bl-console port",
  	        "description": "bl-console port",
  	        "regex": ".*",
  	        "type": "string",
  	        "required": true
  	    },
  	    {
  	        "name": "type",
  	        "description": "Redis section",
  	        "regex": ".*",
  	        "type": "string",
  	        "required": true
  	    }
  	];
  	return descr
  })());
  (function (componentUid, listItems) { ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('9f186f89932cdfe880554e43f4f916a1', (await (async function() {
  	const data = [
  	    {
  	        "host": "localhost",
  	        "port": "32400",
  	        "protocol": "http",
  	        "pool": "200",
  	        "bl-console port": "32400",
  	        "type": "Console"
  	    },
  	    {
  	        "host": "localhost",
  	        "port": "32300",
  	        "protocol": "http",
  	        "pool": "200",
  	        "bl-console port": "32300",
  	        "type": "API"
  	    },
  	    {
  	        "host": "localhost",
  	        "port": "32200",
  	        "protocol": "http",
  	        "pool": "200",
  	        "bl-console port": "32200",
  	        "type": "RT"
  	    }

  	]
  	return data
  })()));
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
  }
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'flex';
  }

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/4038f86f5b6cacb8ee37a8efac3527aa/bundle.js', [], () => ({
  /* content */
  /* handler:onContentAssignment */
  onContentAssignment(___arguments) {
    function textToTitleCase(str) {
  return str.replace(/\S+/g,
      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});
}



  return (textToTitleCase(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['type']))

  },
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/198c9c59e5389ad5ff37a4bb3e22bce5/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async ['onTooltipTextAssignment'](___arguments) {
    var tooltip;

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


  if (getObjectProperty(___arguments.context.pageData, 'description')) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((getObjectProperty(___arguments.context.pageData, 'description')), 'host'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/cb32ffe5c76e4f69d148911494c6952e/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip, item;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'port'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/cd73b3928006379f77b53b870895e855/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'protocol'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/b11bd95b7c781e9ce31e01ee1b83b966/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'bl-console port'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/5a537424c7d5f0fa5c2169ba52cdc3b9/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, isValid, item, descriptionItem;


  isValid = true;
  var item_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    var descriptionItem_list = (___arguments.context.pageData['description']);
    for (var descriptionItem_index in descriptionItem_list) {
      descriptionItem = descriptionItem_list[descriptionItem_index];
      if (descriptionItem['required']) {
        if (!(item[(descriptionItem['name'])])) {
          isValid = false;
        }
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveDisabled'] = true;
  ___arguments.context.pageData['btnSave'] = 'Saving...';
  try {
    await new Promise(r => setTimeout(r, 1000 || 0));
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data was saved successfully', '#fff', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  } catch (error) {
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (error['message']), '#ffa500', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/b4ac65b40f178182007af4f16afe24d6/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  onMounted(___arguments) {
      ___arguments.context.pageData['btnSave'] = 'Save';
  ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/33a848b796b77f762a2122974b1af0aa/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, isValid, item, descriptionItem;


  isValid = true;
  var item_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    var descriptionItem_list = (___arguments.context.pageData['description']);
    for (var descriptionItem_index in descriptionItem_list) {
      descriptionItem = descriptionItem_list[descriptionItem_index];
      if (descriptionItem['required']) {
        if (!(item[(descriptionItem['name'])])) {
          isValid = false;
        }
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveRestartDisabled'] = true;
  ___arguments.context.pageData['btnSaveRestart'] = 'Saving...';
  try {
    await new Promise(r => setTimeout(r, 1000 || 0));
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data was saved successfully', '#fff', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  } catch (error) {
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (error['message']), '#ffa500', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/7e1ac109ebbe4db399af721c8b472bd2/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async ['onChange'](___arguments) {
    var item;

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


  if (getObjectProperty(((await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'description')), async (item) => {


   return ((getObjectProperty(item, 'name')) == 'host');
  }))[0]), 'required')) {
    if (___arguments.value) {
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', false);
    } else {
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/57c1dbc34b1c989c67cdeee5b059df3e/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async ['onChange'](___arguments) {
    var item;

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


  if (getObjectProperty(((await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'description')), async (item) => {


   return ((getObjectProperty(item, 'name')) == 'port');
  }))[0]), 'required')) {
    if (___arguments.value) {
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('49cfbb2af051f87d5dccc9944ddcb7b2', false);
    } else {
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('49cfbb2af051f87d5dccc9944ddcb7b2', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/febabf157a01b6cc64e1b8f62b1e1a32/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'protocol');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('c37570257cfd551e117c464d74721426', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('c37570257cfd551e117c464d74721426', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/826adfb80e9fa3f9c4d409ef7c4fb6a8/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'bl-console port');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f6024c35a4be53e6b64b776ba73ce95c', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f6024c35a4be53e6b64b776ba73ce95c', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/f6024c35a4be53e6b64b776ba73ce95c/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var vivsible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'bl-console port');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['bl-console port']) {
      vivsible = false;
    } else {
      vivsible = true;
    }
  }

  return vivsible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/f2cd77e13a5f3c9633a2a81f62910c09/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'host');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['host']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/49cfbb2af051f87d5dccc9944ddcb7b2/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'port');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['port']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/c37570257cfd551e117c464d74721426/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'protocol');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['protocol']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/domainsGeneralCopy/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* handler:onEnter */
  onEnter(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onEnter */
  /* content */
}))

define('./pages/home/components/page/bundle.js', [], () => ({
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
  if (getObjectProperty((await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/install/status', null)), 'servicesCreated')) {
    (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('serverStatus', ({ 'pageServerStatus': 'ServerStatus' }));
  } else {
    (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('install', undefined);
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

define('./pages/install/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onEnter */
  async onEnter(___arguments) {
    var error;

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
  try {
    ___arguments.context.pageData['defaults'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/install/default-arguments', null));
    ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['version'] = (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'defaults')), 'version'));
    ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719'))['mountPath'] = (getObjectProperty((getObjectProperty(___arguments.context.pageData, 'defaults')), 'mountPath'));

  } catch (error) {
    await ( async function (message) { alert(message) })((getObjectProperty(error, 'message')));

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

define('./pages/install/components/4726032dbb9b39a30239907c90c2aac7/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error;

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


  try {
    console.log((await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('post', '/install/', ({ 'version': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'version')),'mountPath': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'mountPath')),'license': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'license')),'login': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'login')),'password': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'password')) }))));
    console.log((await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('post', '/user/login/', ({ 'login': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'login')),'password': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'password')) }))));
    (function (pageName, pageData) { BackendlessUI.Navigator.goToPage(pageName, pageData) })('progress', undefined);

  } catch (error) {
    (function (message) { alert(message) })((getObjectProperty(error, 'message')));

  }

  },
  /* handler:onClick */
  /* handler:onDisabledStateAssignment */
  ['onDisabledStateAssignment'](___arguments) {
    var disabled;

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


  if ((getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719')), 'version')) && (getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719')), 'mountPath')) && (getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719')), 'license'))) {
    disabled = false;
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4726032dbb9b39a30239907c90c2aac7'))['opacity'] = 1;
  } else {
    disabled = true;
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4726032dbb9b39a30239907c90c2aac7'))['opacity'] = 0.5;
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

define('./pages/kubernetes/components/9f186f89932cdfe880554e43f4f916a1/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  async onMounted(___arguments) {
      if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  }
  if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  }
  await new Promise(r => setTimeout(r, 1000 || 0));
  ___arguments.context.pageData['description'] = (await (async function() {
  	const description = [

  	  {
  	    'name': 'Config file path',
  	    'description':'Config file path',
  	    'required': true
  	  },

  	  {
  	    'name': 'Namespace',
  	    'description':'Namespace',
  	    'required': true
  	  }
  	]

  	return description
  })());
  ___arguments.context.pageData['kubernetesContainer'] = [(await (async function() {
  	const data = {
  	  'Config file path':'/path-to-k8s/config',
  	  'Namespace':'default'
  	}
  	return data
  })())];
  if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
  }
  if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'flex';
  }

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/kubernetes/components/198c9c59e5389ad5ff37a4bb3e22bce5/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'Config file path'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/kubernetes/components/429dacbd427245ceaee6938829c292ee/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'Namespace'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/kubernetes/components/5a537424c7d5f0fa5c2169ba52cdc3b9/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, isValid, item, descriptionItem;

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


  isValid = true;
  var item_list = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    var descriptionItem_list = (getObjectProperty(___arguments.context.pageData, 'description'));
    for (var descriptionItem_index in descriptionItem_list) {
      descriptionItem = descriptionItem_list[descriptionItem_index];
      if (getObjectProperty(descriptionItem, 'required')) {
        if (!(getObjectProperty(item, (getObjectProperty(descriptionItem, 'name'))))) {
          isValid = false;
        }
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveDisabled'] = true;
  ___arguments.context.pageData['btnSave'] = 'Saving...';
  try {
    await new Promise(r => setTimeout(r, 1000 || 0));
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data was saved successfully', '#fff', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } catch (error) {
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), '#ffa500', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/kubernetes/components/b4ac65b40f178182007af4f16afe24d6/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  onMounted(___arguments) {
      ___arguments.context.pageData['btnSave'] = 'Save';
  ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/kubernetes/components/33a848b796b77f762a2122974b1af0aa/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, isValid, item, descriptionItem;

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


  isValid = true;
  var item_list = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    var descriptionItem_list = (getObjectProperty(___arguments.context.pageData, 'description'));
    for (var descriptionItem_index in descriptionItem_list) {
      descriptionItem = descriptionItem_list[descriptionItem_index];
      if (getObjectProperty(descriptionItem, 'required')) {
        if (!(getObjectProperty(item, (getObjectProperty(descriptionItem, 'name'))))) {
          isValid = false;
        }
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveRestartDisabled'] = true;
  ___arguments.context.pageData['btnSaveRestart'] = 'Saving...';
  try {
    await new Promise(r => setTimeout(r, 1000 || 0));
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data was saved successfully', '#fff', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } catch (error) {
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), '#ffa500', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/kubernetes/components/7e1ac109ebbe4db399af721c8b472bd2/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Config file path');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/kubernetes/components/4864c57e484b278e25943ae40cd58b96/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Namespace');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('989b163823758fbffd4239ef9101b098', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('989b163823758fbffd4239ef9101b098', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/kubernetes/components/f2cd77e13a5f3c9633a2a81f62910c09/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Config file path');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['Config file path']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/kubernetes/components/989b163823758fbffd4239ef9101b098/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'Namespace');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['Namespace']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/kubernetes/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* handler:onEnter */
  onEnter(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onEnter */
  /* content */
}))

define('./pages/mySql/components/9f186f89932cdfe880554e43f4f916a1/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  async onMounted(___arguments) {
      if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  }
  if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  }
  ___arguments.context.pageData['description'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/mysql/describe', null));
  ___arguments.context.pageData['mysqlContainer'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/mysql/shard', null));
  if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
  }
  if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'flex';
  }

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/mySql/components/4038f86f5b6cacb8ee37a8efac3527aa/bundle.js', [], () => ({
  /* content */
  /* handler:onContentAssignment */
  onContentAssignment(___arguments) {
    function textToTitleCase(str) {
  return str.replace(/\S+/g,
      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});
}



  return (textToTitleCase(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['shard']))

  },
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/mySql/components/198c9c59e5389ad5ff37a4bb3e22bce5/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip, item;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'pattern'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/mySql/components/6ee9263676997e3caaa315452be887df/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip, item;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'enabled'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/mySql/components/41bb79be796c056984caaba1dbfa3947/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip, item;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'host'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/mySql/components/cb32ffe5c76e4f69d148911494c6952e/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip, item;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'port'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/mySql/components/cd73b3928006379f77b53b870895e855/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip, item;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'user'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/mySql/components/b11bd95b7c781e9ce31e01ee1b83b966/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip, item;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'password'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/mySql/components/bd0ea983f0e13883fbd30ed292fbaafd/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip, item;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'maxActive'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/mySql/components/429dacbd427245ceaee6938829c292ee/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip, item;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'maxIdle'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/mySql/components/34554bc65ba52e5730d1070950f5862f/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip, item;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'minIdle'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/mySql/components/7c8ed449452a8d2f6b5f821bbc77ab96/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip, item;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'urlTemplate'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/mySql/components/d4d4cd6ab50980f1361d2201a3630184/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (___arguments.value) {
    if ((new RegExp('jdbc:mysql://.*', '')).test(___arguments.value)) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('4ddb9a48191e6aca47bc4ecbb75abe0a', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('4ddb9a48191e6aca47bc4ecbb75abe0a', true);
    }
  } else {
    ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('4ddb9a48191e6aca47bc4ecbb75abe0a', false);
  }
  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'urlTemplate');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('5269130299dddc1234cb309f3437c093', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('5269130299dddc1234cb309f3437c093', true);
    }
  }

  },
  /* handler:onChange */
  /* handler:onFocus */
  onFocus(___arguments) {
      if (!(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['urlTemplate'])) {
    ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['urlTemplate'] = 'jdbc:mysql://';
  }

  },
  /* handler:onFocus */
  /* content */
}))

define('./pages/mySql/components/5a537424c7d5f0fa5c2169ba52cdc3b9/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, isValid, item, descriptionItem;


  isValid = true;
  var item_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    if (item['urlTemplate']) {
      isValid = ((new RegExp('jdbc:mysql://.*', '')).test((item['urlTemplate'])));
    }
    var descriptionItem_list = (___arguments.context.pageData['description']);
    for (var descriptionItem_index in descriptionItem_list) {
      descriptionItem = descriptionItem_list[descriptionItem_index];
      if (descriptionItem['required']) {
        if (!(item[(descriptionItem['name'])])) {
          isValid = false;
        }
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveDisabled'] = true;
  ___arguments.context.pageData['btnSave'] = 'Saving...';
  try {
    console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/mysql/shard?restart=false', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'))));
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data was saved successfully', '#fff', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  } catch (error) {
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (error['message']), '#ffa500', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/mySql/components/b4ac65b40f178182007af4f16afe24d6/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  onMounted(___arguments) {
      ___arguments.context.pageData['btnSave'] = 'Save';
  ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/mySql/components/33a848b796b77f762a2122974b1af0aa/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, isValid, item, descriptionItem;


  isValid = true;
  var item_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    if (item['urlTemplate']) {
      isValid = ((new RegExp('jdbc:mysql://.*', '')).test((item['urlTemplate'])));
    }
    var descriptionItem_list = (___arguments.context.pageData['description']);
    for (var descriptionItem_index in descriptionItem_list) {
      descriptionItem = descriptionItem_list[descriptionItem_index];
      if (descriptionItem['required']) {
        if (!(item[(descriptionItem['name'])])) {
          isValid = false;
        }
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveRestartDisabled'] = true;
  ___arguments.context.pageData['btnSaveRestart'] = 'Saving...';
  try {
    console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/mysql/shard?restart=true', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'))));
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data was saved successfully', '#fff', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  } catch (error) {
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (error['message']), '#ffa500', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/mySql/components/7e1ac109ebbe4db399af721c8b472bd2/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'pattern');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/mySql/components/fbe986386ed891b99ef2e631e208e495/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'host');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('3989f1ccde5d70cf92a5dc8cec2591b6', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('3989f1ccde5d70cf92a5dc8cec2591b6', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/mySql/components/57c1dbc34b1c989c67cdeee5b059df3e/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'port');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('49cfbb2af051f87d5dccc9944ddcb7b2', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('49cfbb2af051f87d5dccc9944ddcb7b2', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/mySql/components/febabf157a01b6cc64e1b8f62b1e1a32/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'user');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('c37570257cfd551e117c464d74721426', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('c37570257cfd551e117c464d74721426', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/mySql/components/826adfb80e9fa3f9c4d409ef7c4fb6a8/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'password');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f6024c35a4be53e6b64b776ba73ce95c', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f6024c35a4be53e6b64b776ba73ce95c', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/mySql/components/322d59330616d696920fec1cba3f5519/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'maxActive');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('2f64e73db50c4814bf82eaa10ad4dee9', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('2f64e73db50c4814bf82eaa10ad4dee9', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/mySql/components/4864c57e484b278e25943ae40cd58b96/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'maxIdle');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('989b163823758fbffd4239ef9101b098', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('989b163823758fbffd4239ef9101b098', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/mySql/components/34d8fb2e194a3b1c5a714e37b36481bf/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'minIdle');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('816a34cf65531e3fdfe61bed31eec1a2', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('816a34cf65531e3fdfe61bed31eec1a2', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/mySql/components/f6024c35a4be53e6b64b776ba73ce95c/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var item, vivsible;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'password');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['password']) {
      vivsible = false;
    } else {
      vivsible = true;
    }
  }

  return vivsible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/mySql/components/f2cd77e13a5f3c9633a2a81f62910c09/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'pattern');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['pattern']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/mySql/components/3989f1ccde5d70cf92a5dc8cec2591b6/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var item, visible;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'host');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['host']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/mySql/components/49cfbb2af051f87d5dccc9944ddcb7b2/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var item, visible;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'port');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['port']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/mySql/components/c37570257cfd551e117c464d74721426/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var item, visible;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'user');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['user']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/mySql/components/2f64e73db50c4814bf82eaa10ad4dee9/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var item, visible;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'maxActive');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['maxActive']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/mySql/components/989b163823758fbffd4239ef9101b098/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var item, visible;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'maxIdle');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['maxIdle']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/mySql/components/816a34cf65531e3fdfe61bed31eec1a2/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var item, visible;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'minIdle');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['minIdle']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/mySql/components/5269130299dddc1234cb309f3437c093/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var item, visible;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'urlTemplate');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['urlTemplate']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/mySql/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* handler:onEnter */
  onEnter(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onEnter */
  /* content */
}))

define('./pages/mysql2/components/4038f86f5b6cacb8ee37a8efac3527aa/bundle.js', [], () => ({
  /* content */
  /* handler:onContentAssignment */
  onContentAssignment(___arguments) {
    function textToTitleCase(str) {
  return str.replace(/\S+/g,
      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});
}



  return (textToTitleCase(___arguments.context.getComponentDataStoreByUid('9f186f89932cdfe880554e43f4f916a1')['shard']))

  },
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/mysql2/components/5a537424c7d5f0fa5c2169ba52cdc3b9/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, isValid, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  isValid = true;
  var item_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    if (item['urlTemplate']) {
      isValid = ((new RegExp('jdbc:mysql://.*', '')).test((item['urlTemplate'])));
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'pattern');
    }))[0])['required']) {
      if (!(item['pattern'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'host');
    }))[0])['required']) {
      if (!(item['host'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'port');
    }))[0])['required']) {
      if (!(item['port'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'user');
    }))[0])['required']) {
      if (!(item['user'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'password');
    }))[0])['required']) {
      if (!(item['password'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'maxActive');
    }))[0])['required']) {
      if (!(item['maxActive'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'maxIdle');
    }))[0])['required']) {
      if (!(item['maxIdle'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'minIdle');
    }))[0])['required']) {
      if (!(item['minIdle'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'urlTemplate');
    }))[0])['required']) {
      if (!(item['urlTemplate'])) {
        isValid = false;
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveDisabled'] = true;
  ___arguments.context.pageData['btnSave'] = 'Saving...';
  try {
    console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/mysql/shard?restart=false', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'))));
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    ___arguments.context.pageData['alertMessage'] = 'The data was saved successfully';
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f'))['color'] = '#fff';
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))['bottom'] = 0;
    await new Promise(r => setTimeout(r, 2000 || 0));
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))['bottom'] = (String(-(await ( async function (typeSize, component){ return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))))) + String('px'));

  } catch (error) {
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    ___arguments.context.pageData['alertMessage'] = (error['message']);
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f'))['color'] = '#ffa500';
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))['bottom'] = 0;
    await new Promise(r => setTimeout(r, 2000 || 0));
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))['bottom'] = (String(-(await ( async function (typeSize, component){ return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))))) + String('px'));

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/mysql2/components/b4ac65b40f178182007af4f16afe24d6/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  onMounted(___arguments) {
      ___arguments.context.pageData['btnSave'] = 'Save';
  ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/mysql2/components/33a848b796b77f762a2122974b1af0aa/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, isValid, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  isValid = true;
  var item_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    if (item['urlTemplate']) {
      isValid = ((new RegExp('jdbc:mysql://.*', '')).test((item['urlTemplate'])));
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'pattern');
    }))[0])['required']) {
      if (!(item['pattern'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'host');
    }))[0])['required']) {
      if (!(item['host'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'port');
    }))[0])['required']) {
      if (!(item['port'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'user');
    }))[0])['required']) {
      if (!(item['user'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'password');
    }))[0])['required']) {
      if (!(item['password'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'maxActive');
    }))[0])['required']) {
      if (!(item['maxActive'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'maxIdle');
    }))[0])['required']) {
      if (!(item['maxIdle'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'minIdle');
    }))[0])['required']) {
      if (!(item['minIdle'])) {
        isValid = false;
      }
    }
    if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


     return ((item['name']) == 'urlTemplate');
    }))[0])['required']) {
      if (!(item['urlTemplate'])) {
        isValid = false;
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveRestartDisabled'] = true;
  ___arguments.context.pageData['btnSaveRestart'] = 'Saving...';
  try {
    console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/mysql/shard?restart=true', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'))));
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    ___arguments.context.pageData['alertMessage'] = 'The data was saved successfully';
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f'))['color'] = '#fff';
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))['bottom'] = 0;
    await new Promise(r => setTimeout(r, 2000 || 0));
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))['bottom'] = (String(-(await ( async function (typeSize, component){ return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))))) + String('px'));

  } catch (error) {
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    ___arguments.context.pageData['alertMessage'] = (error['message']);
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f'))['color'] = '#ffa500';
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))['bottom'] = 0;
    await new Promise(r => setTimeout(r, 2000 || 0));
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))['bottom'] = (String(-(await ( async function (typeSize, component){ return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134'))))) + String('px'));

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/mysql2/components/7e1ac109ebbe4db399af721c8b472bd2/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'pattern');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/mysql2/components/322d59330616d696920fec1cba3f5519/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'maxActive');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('2f64e73db50c4814bf82eaa10ad4dee9', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('2f64e73db50c4814bf82eaa10ad4dee9', true);
    }
  }

  },
  /* handler:onChange */
  /* handler:onValueAssignment */
  onValueAssignment(___arguments) {
      return (___arguments.context.getComponentDataStoreByUid('9f186f89932cdfe880554e43f4f916a1')[(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['name'])])

  },
  /* handler:onValueAssignment */
  /* content */
}))

define('./pages/mysql2/components/f2cd77e13a5f3c9633a2a81f62910c09/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'pattern');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['pattern']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/mysql2/components/2f64e73db50c4814bf82eaa10ad4dee9/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var item, visible;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'maxActive');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['maxActive']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/mysql2/components/5e3f611a895a0c48231e90eda783d117/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  async onMounted(___arguments) {
      ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  ___arguments.context.pageData['description'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/mysql/describe', null));
  ;(function (componentUid, listItems){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('5e3f611a895a0c48231e90eda783d117', (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/mysql/shard', null)));
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'flex';

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/mysql2/components/9f186f89932cdfe880554e43f4f916a1/bundle.js', [], () => ({
  /* content */
  /* handler:onDynamicItemsAssignment */
  onDynamicItemsAssignment(___arguments) {
      return (___arguments.context.pageData['description'])

  },
  /* handler:onDynamicItemsAssignment */
  /* content */
}))

define('./pages/mysql2/components/ef925676496420d56f57345d0dfd424e/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  onDisplayAssignment(___arguments) {
    var visible;


  visible = false;
  if ((___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['name']) == 'pattern') {
    visible = true;
  }
  if ((___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['name']) == 'host') {
    visible = true;
  }
  if ((___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['name']) == 'user') {
    visible = true;
  }
  if ((___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['name']) == 'password') {
    visible = true;
  }
  if ((___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['name']) == 'urlTemplate') {
    visible = true;
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/mysql2/components/f5c48fa916fb2cbc6ffa89cc1a7213a1/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  onDisplayAssignment(___arguments) {
      return ((___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['name']) == 'enabled')

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/mysql2/components/e42148c2a25d4b52cd0dab7ff8f9ca6a/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  onDisplayAssignment(___arguments) {
    var visible;


  visible = false;
  if ((___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['name']) == 'port') {
    visible = true;
  }
  if ((___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['name']) == 'maxActive') {
    visible = true;
  }
  if ((___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['name']) == 'maxIdle') {
    visible = true;
  }
  if ((___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['name']) == 'minIdle') {
    visible = true;
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/mysql2/components/ffb46f1e64ca651da533c08c9633f67d/bundle.js', [], () => ({
  /* content */
  /* handler:onCheckedStateAssignment */
  onCheckedStateAssignment(___arguments) {
      return (___arguments.context.getComponentDataStoreByUid('9f186f89932cdfe880554e43f4f916a1')[(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['name'])])

  },
  /* handler:onCheckedStateAssignment */
  /* content */
}))

define('./pages/mysql2/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* handler:onEnter */
  onEnter(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onEnter */
  /* content */
}))

define('./pages/progress/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onEnter */
  async onEnter(___arguments) {
    var error, statusInit, pollingIntervalMS;

function defineGlobalScope() { const root = (typeof window !== 'undefined' ? window : global);root.codelessScope = root.codelessScope || {};return root.codelessScope;}

function getGlobalEntitiesMap(mapName) { const globalScope = defineGlobalScope();return globalScope[mapName] = globalScope[mapName] || {};}

function stopSetTimeout(timerId) {  const timers = getGlobalEntitiesMap('setIntervals'); if (timerId && timers[timerId]) {    clearInterval(timers[timerId]);    delete timers[timerId]; }}

function runSetTimeout(timerId, callback, delay) {  const timers = getGlobalEntitiesMap('setIntervals'); const timer = setInterval(callback, delay); if (timerId) {  stopSetTimeout(timerId);  timers[timerId] = timer }}


  localStorage.removeItem('originLoad');
  try {
    statusInit = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/install/status', null));
    pollingIntervalMS = ((await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String((await ( async function (){ return window.location })())['origin']) + String('/settings.json')))).setEncoding('utf8').send())['pollingIntervalMS']);
    if (!(typeof pollingIntervalMS === 'number' && !isNaN(pollingIntervalMS))) {
      pollingIntervalMS = 2000;
    }

  } catch (error) {
    ___arguments.context.pageData['status'] = (error['message']);
    return false;

  }
  if (!(statusInit['servicesCreated'])) {
    if ((((statusInit['messages']).slice(-1)[0])['level']) == 'error') {
      ___arguments.context.pageData['status'] = (((statusInit['messages']).slice(-1)[0])['message']);
      return false;
    }
    ___arguments.context.pageData['status'] = (((statusInit['messages']).slice(-1)[0])['message']);
  }
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
      await ( async function (pageName, pageData) { BackendlessUI.goToPage(pageName, pageData) })('serverStatus', ({ 'pageServerStatus': 'ServerStatus' }));

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/redis/components/9f186f89932cdfe880554e43f4f916a1/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  async ['onMounted'](___arguments) {
      if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  }
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  }
  ___arguments.context.pageData['description'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/redis/describe', null));
  ___arguments.context.pageData['redisContainer'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/redis/config', null));
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
  }
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'flex';
  }

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/redis/components/4038f86f5b6cacb8ee37a8efac3527aa/bundle.js', [], () => ({
  /* content */
  /* handler:onContentAssignment */
  ['onContentAssignment'](___arguments) {
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

function textToTitleCase(str) {
 return str.replace(/\S+/g, function(txt) {
   return txt[0].toUpperCase() + txt.substring(1).toLowerCase()
 })
}



  return (textToTitleCase(getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'type')))

  },
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/redis/components/198c9c59e5389ad5ff37a4bb3e22bce5/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'host'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/redis/components/6ee9263676997e3caaa315452be887df/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'ssl'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/redis/components/cb32ffe5c76e4f69d148911494c6952e/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip, item;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'port'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/redis/components/cd73b3928006379f77b53b870895e855/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'pool'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/redis/components/b11bd95b7c781e9ce31e01ee1b83b966/bundle.js', [], () => ({
  /* content */
  /* handler:onTooltipTextAssignment */
  async onTooltipTextAssignment(___arguments) {
    var tooltip, item;


  if (___arguments.context.pageData['description']) {
    tooltip = (await BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f']((___arguments.context.pageData['description']), 'password'));
  }

  return tooltip

  },
  /* handler:onTooltipTextAssignment */
  /* content */
}))

define('./pages/redis/components/5a537424c7d5f0fa5c2169ba52cdc3b9/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, isValid, item, descriptionItem;

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


  isValid = true;
  var item_list = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    var descriptionItem_list = (getObjectProperty(___arguments.context.pageData, 'description'));
    for (var descriptionItem_index in descriptionItem_list) {
      descriptionItem = descriptionItem_list[descriptionItem_index];
      if (getObjectProperty(descriptionItem, 'required')) {
        if (!(getObjectProperty(item, (getObjectProperty(descriptionItem, 'name'))))) {
          isValid = false;
        }
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveDisabled'] = true;
  ___arguments.context.pageData['btnSave'] = 'Saving...';
  try {
    console.log((await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/redis/config?restart=false', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1')))));
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data was saved successfully', '#fff', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } catch (error) {
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), '#ffa500', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/redis/components/b4ac65b40f178182007af4f16afe24d6/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  onMounted(___arguments) {
      ___arguments.context.pageData['btnSave'] = 'Save';
  ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/redis/components/33a848b796b77f762a2122974b1af0aa/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, isValid, item, descriptionItem;

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


  isValid = true;
  var item_list = ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    var descriptionItem_list = (getObjectProperty(___arguments.context.pageData, 'description'));
    for (var descriptionItem_index in descriptionItem_list) {
      descriptionItem = descriptionItem_list[descriptionItem_index];
      if (getObjectProperty(descriptionItem, 'required')) {
        if (!(getObjectProperty(item, (getObjectProperty(descriptionItem, 'name'))))) {
          isValid = false;
        }
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveRestartDisabled'] = true;
  ___arguments.context.pageData['btnSaveRestart'] = 'Saving...';
  try {
    console.log((await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/redis/config?restart=true', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1')))));
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data was saved successfully', '#fff', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } catch (error) {
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), '#ffa500', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/redis/components/7e1ac109ebbe4db399af721c8b472bd2/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async ['onChange'](___arguments) {
    var item;

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


  if (getObjectProperty(((await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'description')), async (item) => {


   return ((getObjectProperty(item, 'name')) == 'host');
  }))[0]), 'required')) {
    if (___arguments.value) {
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', false);
    } else {
      (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/redis/components/57c1dbc34b1c989c67cdeee5b059df3e/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'port');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('49cfbb2af051f87d5dccc9944ddcb7b2', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('49cfbb2af051f87d5dccc9944ddcb7b2', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/redis/components/febabf157a01b6cc64e1b8f62b1e1a32/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'pool');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('c37570257cfd551e117c464d74721426', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('c37570257cfd551e117c464d74721426', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/redis/components/826adfb80e9fa3f9c4d409ef7c4fb6a8/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'password');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f6024c35a4be53e6b64b776ba73ce95c', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f6024c35a4be53e6b64b776ba73ce95c', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/redis/components/f6024c35a4be53e6b64b776ba73ce95c/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var vivsible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'password');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['password']) {
      vivsible = false;
    } else {
      vivsible = true;
    }
  }

  return vivsible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/redis/components/f2cd77e13a5f3c9633a2a81f62910c09/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async ['onDisplayAssignment'](___arguments) {
    var visible, item;

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


  if (getObjectProperty(((await asyncListFilter((getObjectProperty(___arguments.context.pageData, 'description')), async (item) => {


   return ((getObjectProperty(item, 'name')) == 'host');
  }))[0]), 'required')) {
    if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'host')) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/redis/components/49cfbb2af051f87d5dccc9944ddcb7b2/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'port');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['port']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/redis/components/c37570257cfd551e117c464d74721426/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'pool');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['pool']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/redis/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* handler:onEnter */
  onEnter(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onEnter */
  /* content */
}))

define('./pages/serverStatus/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onEnter */
  async ['onEnter'](___arguments) {
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


  localStorage.removeItem('originLoad');
  ___arguments.context.pageData['groupActionList'] = [];
  try {
    pollingIntervalMS = (getObjectProperty((await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String(getObjectProperty(((function () { return window.location })()), 'origin')) + String('/settings.json')))).setEncoding('utf8').send()), 'pollingIntervalMS'));
    if (!(typeof pollingIntervalMS === 'number' && !isNaN(pollingIntervalMS))) {
      pollingIntervalMS = 2000;
    }

    ;(function() {
      const callback = async () => {
          ___arguments.context.appData['statusData'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/status', null));

      };

      const timerId = 'timer';
      const timerDelay = pollingIntervalMS;

      runSetTimeout(timerId, callback, timerDelay)
    })()

  } catch (error) {
    (function (message) { alert(message) })((getObjectProperty(error, 'message')));

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

define('./pages/serverStatus/components/0742b98a516b8b31e62c9cfd5f371619/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  ['onClassListAssignment'](___arguments) {
    var classes;

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


  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'running') {
    classes = ['ServerStatus__ItemStatusName', 'ServerStatus__ItemStatusName--running'];
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'complete') {
    classes = ['ServerStatus__ItemStatusName', 'ServerStatus__ItemStatusName--complete'];
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'notInstalled') {
    classes = ['ServerStatus__ItemStatusName', 'ServerStatus__ItemStatusName--notInstalled'];
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'changing') {
    classes = ['ServerStatus__ItemStatusName', 'ServerStatus__ItemStatusName--changing'];
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651'), 'status')) == 'stopped') {
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
    var i;


  if ((___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'running' || (___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['status']) == 'changing') {
    console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (___arguments.context.getComponentDataStoreByUid('e9118d25f3628ca2aa41dd74e6510651')['name']),'state': 'stop','hidden': false })));
    for (var count = 0; count < 3; count++) {
      ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('24bf7b1a72e1b311f2ad3fe693ce165e'))['border'] = '3px solid blue';
      await new Promise(r => setTimeout(r, 500 || 0));
      ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('24bf7b1a72e1b311f2ad3fe693ce165e'))['border'] = '';
      await new Promise(r => setTimeout(r, 500 || 0));
    }
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
    for (var count = 0; count < 3; count++) {
      ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('ff5a02b652d4cb723ed798626a4de138'))['border'] = '3px solid blue';
      await new Promise(r => setTimeout(r, 500 || 0));
      ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('ff5a02b652d4cb723ed798626a4de138'))['border'] = '';
      await new Promise(r => setTimeout(r, 500 || 0));
    }
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
    for (var count = 0; count < 3; count++) {
      ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('637d6837ca5552e26e13e3fc9ed73b35'))['border'] = '3px solid blue';
      await new Promise(r => setTimeout(r, 500 || 0));
      ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('637d6837ca5552e26e13e3fc9ed73b35'))['border'] = '';
      await new Promise(r => setTimeout(r, 500 || 0));
    }
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


  classList = ['ServerStatus__StopAllBtn'];
  if (getObjectProperty(___arguments.context.pageData, 'groupActionList')) {
    if ((getObjectProperty(___arguments.context.pageData, 'groupActionList')).length != 0) {
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


  classList = ['ServerStatus__RestartAllBtn'];
  if (getObjectProperty(___arguments.context.pageData, 'groupActionList')) {
    if ((getObjectProperty(___arguments.context.pageData, 'groupActionList')).length != 0) {
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
    var error, pollingIntervalMS;

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
    pollingIntervalMS = ((await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String((await ( async function (){ return window.location })())['origin']) + String('/settings.json')))).setEncoding('utf8').send())['pollingIntervalMS']);
    if (!(typeof pollingIntervalMS === 'number' && !isNaN(pollingIntervalMS))) {
      pollingIntervalMS = 2000;
    }

    ;(function() {
      const callback = async () => {
          ___arguments.context.dataModel['statusData'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/status', null));

      };

      const timerId = 'timerStatusData';
      const timerDelay = pollingIntervalMS;

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
    var visible, currentStatus, currentService, service;

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
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['stopBtnLabel'] = 'Stop';
      visible = false;
    }
    if (currentStatus == 'notInstalled') {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['stopBtnLabel'] = 'Stop';
      visible = false;
    }
    if (currentStatus == 'complete') {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['stopBtnLabel'] = 'Stop';
      visible = false;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* handler:onClick */
  async onClick(___arguments) {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['stopBtnLabel'] = 'Stopping...';
  ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['restartBtnLabel'] = 'Restart';
  console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (___arguments.context.pageData['serviceName']),'state': 'stop','hidden': false })));

  },
  /* handler:onClick */
  /* handler:onMounted */
  onMounted(___arguments) {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['stopBtnLabel'] = 'Stop';

  },
  /* handler:onMounted */
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
    var visible, currentStatus, currentService, service;

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
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['restartBtnLabel'] = 'Restart';
      visible = false;
    }
    if (currentStatus == 'notInstalled') {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['restartBtnLabel'] = 'Restart';
      visible = false;
    }
    if (currentStatus == 'complete') {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['restartBtnLabel'] = 'Restart';
      visible = false;
    }
    if (___arguments.context.pageData['restarting']) {
      if (currentStatus == 'changing') {
        ___arguments.context.pageData['changed'] = true;
      }
      if (currentStatus == 'running') {
        if (___arguments.context.pageData['changed']) {
          ___arguments.context.pageData['restarting'] = false;
          ___arguments.context.pageData['changed'] = false;
          ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['restartBtnLabel'] = 'Restart';
        }
      }
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* handler:onClick */
  async onClick(___arguments) {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['stopBtnLabel'] = 'Stop';
  ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['restartBtnLabel'] = 'Restarting...';
  ___arguments.context.pageData['restarting'] = true;
  console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (___arguments.context.pageData['serviceName']),'state': 'restart','hidden': false })));

  },
  /* handler:onClick */
  /* handler:onMounted */
  onMounted(___arguments) {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['restartBtnLabel'] = 'Restart';

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/serviceLogs/components/17e15d26a59d2afecccd78a80f2b5081/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, currentStatus, currentService, service;

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
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['startBtnLabel'] = 'Start';
      visible = false;
    }
    if (currentStatus == 'notInstalled') {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['startBtnLabel'] = 'Start';
      visible = false;
    }
    if (currentStatus == 'complete') {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['startBtnLabel'] = 'Start';
      visible = false;
    }
    if (currentStatus == 'changing') {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['startBtnLabel'] = 'Start';
      visible = false;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* handler:onClick */
  async onClick(___arguments) {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['startBtnLabel'] = 'Starting...';
  console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/state', ({ 'serviceName': (___arguments.context.pageData['serviceName']),'state': 'start','hidden': false })));

  },
  /* handler:onClick */
  /* handler:onMounted */
  onMounted(___arguments) {
      ___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6')['startBtnLabel'] = 'Start';

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/serviceLogs/components/9051123f6b4f94ef192265039293d4cd/bundle.js', [], () => ({
  /* content */
  /* handler:onDynamicItemsAssignment */
  onDynamicItemsAssignment(___arguments) {
      return (___arguments.context.appData['logData'])

  },
  /* handler:onDynamicItemsAssignment */
  /* handler:onBeforeUnmount */
  async onBeforeUnmount(___arguments) {
      if (___arguments.context.appData['previousService']) {
    if ((___arguments.context.appData['openSocket'])['connected']) {
      await (async function(serviceName) {

      	  socket.emit ('service-logs:unsubscribe', {
      	    "serviceName":`${serviceName}`,
      	    "channelName":`${serviceName}-logs`
      	  });

      	  socket.disconnect();


      })((___arguments.context.appData['previousService']));
    }
  }

  },
  /* handler:onBeforeUnmount */
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
      localStorage.removeItem('originLoad');
  if (!(___arguments.context.pageData['serviceName'])) {
    ___arguments.context.pageData['serviceName'] = 'bl-server';
  }
  if (!(___arguments.context.appData['logData'])) {
    ___arguments.context.appData['logData'] = [];
    ___arguments.context.appData['openSocket'] = (await (async function(serviceName, logsArray) {
    	const io = await BackendlessUI.requireModule('https://cdn.jsdelivr.net/npm/socket.io-client@4.4.0/dist/socket.io.min.js');

    	 socket = io.connect('http://localhost:5051', { transports : ['websocket'] });


    	  socket.on (`${serviceName}-logs`, function (data) {
    	    logsArray.push (data);
    	  });

    	  socket.emit ('service-logs:subscribe', {
    	    "serviceName":`${serviceName}`,
    	    "channelName": `${serviceName}-logs`
    	  });

    	  return socket








    })((___arguments.context.pageData['serviceName']), (___arguments.context.appData['logData'])));
    ___arguments.context.appData['previousService'] = (___arguments.context.pageData['serviceName']);
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

define('./pages/ssl/components/9f186f89932cdfe880554e43f4f916a1/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  async onMounted(___arguments) {
      if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  }
  if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  }
  await new Promise(r => setTimeout(r, 1000 || 0));
  ___arguments.context.pageData['description'] = (await (async function() {
  	const description = [

  	  {
  	    'name': 'enabled',
  	    'required': true
  	  },

  	  {
  	    'name': 'console domain',
  	    'required': true
  	  },

  	  {
  	    'name': 'api domain',
  	    'required': true
  	  },

  	  {
  	    'name': 'rt domain',
  	    'required': true
  	  }

  	]

  	return description
  })());
  ___arguments.context.pageData['sslNginxContainer'] = (await (async function() {

  	const data = [
  	  {
  	    'enabled': true,
  	    'console domain': 'console.my-company.com',
  	    'api domain': 'api.my-company.com',
  	    'rt domain': 'rt.my-company.com'
  	  }

  	  ]

  	  return data
  })());
  if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
  }
  if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'flex';
  }

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/ssl/components/5a537424c7d5f0fa5c2169ba52cdc3b9/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, isValid, item, descriptionItem;


  isValid = true;
  var item_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    var descriptionItem_list = (___arguments.context.pageData['description']);
    for (var descriptionItem_index in descriptionItem_list) {
      descriptionItem = descriptionItem_list[descriptionItem_index];
      if (descriptionItem['required']) {
        if (!(item[(descriptionItem['name'])])) {
          isValid = false;
        }
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveDisabled'] = true;
  ___arguments.context.pageData['btnSave'] = 'Saving...';
  try {
    await new Promise(r => setTimeout(r, 1000 || 0));
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data was saved successfully', '#fff', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  } catch (error) {
    ___arguments.context.pageData['btnSave'] = 'Save';
    ___arguments.context.pageData['btnSaveDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (error['message']), '#ffa500', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/ssl/components/b4ac65b40f178182007af4f16afe24d6/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  onMounted(___arguments) {
      ___arguments.context.pageData['btnSave'] = 'Save';
  ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/ssl/components/33a848b796b77f762a2122974b1af0aa/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, isValid, item, descriptionItem;


  isValid = true;
  var item_list = ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'));
  for (var item_index in item_list) {
    item = item_list[item_index];
    var descriptionItem_list = (___arguments.context.pageData['description']);
    for (var descriptionItem_index in descriptionItem_list) {
      descriptionItem = descriptionItem_list[descriptionItem_index];
      if (descriptionItem['required']) {
        if (!(item[(descriptionItem['name'])])) {
          isValid = false;
        }
      }
    }
  }
  if (!isValid) {
    return ;
  }
  ___arguments.context.pageData['btnSaveRestartDisabled'] = true;
  ___arguments.context.pageData['btnSaveRestart'] = 'Saving...';
  try {
    await new Promise(r => setTimeout(r, 1000 || 0));
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'The data was saved successfully', '#fff', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  } catch (error) {
    ___arguments.context.pageData['btnSaveRestart'] = 'Save and Restart';
    ___arguments.context.pageData['btnSaveRestartDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (error['message']), '#ffa500', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/ssl/components/7e1ac109ebbe4db399af721c8b472bd2/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'console domain');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/ssl/components/febabf157a01b6cc64e1b8f62b1e1a32/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'api domain');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('c37570257cfd551e117c464d74721426', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('c37570257cfd551e117c464d74721426', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/ssl/components/826adfb80e9fa3f9c4d409ef7c4fb6a8/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  async onChange(___arguments) {
    var item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'rt domain');
  }))[0])['required']) {
    if (___arguments.value) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f6024c35a4be53e6b64b776ba73ce95c', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f6024c35a4be53e6b64b776ba73ce95c', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/ssl/components/f6024c35a4be53e6b64b776ba73ce95c/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var vivsible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'rt domain');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['rt domain']) {
      vivsible = false;
    } else {
      vivsible = true;
    }
  }

  return vivsible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/ssl/components/f2cd77e13a5f3c9633a2a81f62910c09/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'console domain');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['console domain']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/ssl/components/c37570257cfd551e117c464d74721426/bundle.js', [], () => ({
  /* content */
  /* handler:onDisplayAssignment */
  async onDisplayAssignment(___arguments) {
    var visible, item;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  if (((await asyncListFilter((___arguments.context.pageData['description']), async (item) => {


   return ((item['name']) == 'api domain');
  }))[0])['required']) {
    if (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['api domain']) {
      visible = false;
    } else {
      visible = true;
    }
  }

  return visible

  },
  /* handler:onDisplayAssignment */
  /* content */
}))

define('./pages/ssl/components/924202b19f0ef683e3940a99b258d565/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  onMounted(___arguments) {
      ___arguments.context.pageData['sslTabsControlsClassList'] = [((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('7d97d60a1f160c6604a8db8ab50c3281')), ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('b75382fe405e12aee1f1100fcbcf26d2')), ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('0e6838cfa79de1a440dc2fd9ac29be19')), ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('35cf683c8b6df21bdab6d8418ca6285a')), ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('e846d674758698765e28762f57b71a46'))];
  ___arguments.context.pageData['sslTabsClassList'] = [((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('bc363b1267216ba7fa3847177128a06a')), ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('164cfbd566af90c36cb55581c799fced')), ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('8af5b433d6e758a12aac416fe632bfc2')), ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('062ce57f4dfb9b98fc6f6af57eef8116')), ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('8acc8597ccc851b89eed36c68d48d033'))];

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/ssl/components/b75382fe405e12aee1f1100fcbcf26d2/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
    var tabClasses, tabControlsClasses, list;

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  var tabControlsClasses_list = (___arguments.context.pageData['sslTabsControlsClassList']);
  for (var tabControlsClasses_index in tabControlsClasses_list) {
    tabControlsClasses = tabControlsClasses_list[tabControlsClasses_index];
    if (tabControlsClasses.length > 1) {
      tabControlsClasses.pop();
    }
  }
  addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('b75382fe405e12aee1f1100fcbcf26d2')), 'ssl__TabsItem--active');
  var tabClasses_list = (___arguments.context.pageData['sslTabsClassList']);
  for (var tabClasses_index in tabClasses_list) {
    tabClasses = tabClasses_list[tabClasses_index];
    if (tabClasses.length == 1) {
      addItemToList(tabClasses, 'ssl__hide');
    }
  }
  ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('164cfbd566af90c36cb55581c799fced')).pop();

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/ssl/components/7d97d60a1f160c6604a8db8ab50c3281/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
    var tabClasses, tabControlsClasses;

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  var tabControlsClasses_list = (___arguments.context.pageData['sslTabsControlsClassList']);
  for (var tabControlsClasses_index in tabControlsClasses_list) {
    tabControlsClasses = tabControlsClasses_list[tabControlsClasses_index];
    if (tabControlsClasses.length > 1) {
      tabControlsClasses.pop();
    }
  }
  addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('7d97d60a1f160c6604a8db8ab50c3281')), 'ssl__TabsItem--active');
  var tabClasses_list = (___arguments.context.pageData['sslTabsClassList']);
  for (var tabClasses_index in tabClasses_list) {
    tabClasses = tabClasses_list[tabClasses_index];
    if (tabClasses.length == 1) {
      addItemToList(tabClasses, 'ssl__hide');
    }
  }
  ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('bc363b1267216ba7fa3847177128a06a')).pop();

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/ssl/components/0e6838cfa79de1a440dc2fd9ac29be19/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
    var tabClasses, tabControlsClasses;

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  var tabControlsClasses_list = (___arguments.context.pageData['sslTabsControlsClassList']);
  for (var tabControlsClasses_index in tabControlsClasses_list) {
    tabControlsClasses = tabControlsClasses_list[tabControlsClasses_index];
    if (tabControlsClasses.length > 1) {
      tabControlsClasses.pop();
    }
  }
  addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('0e6838cfa79de1a440dc2fd9ac29be19')), 'ssl__TabsItem--active');
  var tabClasses_list = (___arguments.context.pageData['sslTabsClassList']);
  for (var tabClasses_index in tabClasses_list) {
    tabClasses = tabClasses_list[tabClasses_index];
    if (tabClasses.length == 1) {
      addItemToList(tabClasses, 'ssl__hide');
    }
  }
  ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('8af5b433d6e758a12aac416fe632bfc2')).pop();

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/ssl/components/35cf683c8b6df21bdab6d8418ca6285a/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
    var tabClasses, tabControlsClasses;

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  var tabControlsClasses_list = (___arguments.context.pageData['sslTabsControlsClassList']);
  for (var tabControlsClasses_index in tabControlsClasses_list) {
    tabControlsClasses = tabControlsClasses_list[tabControlsClasses_index];
    if (tabControlsClasses.length > 1) {
      tabControlsClasses.pop();
    }
  }
  addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('35cf683c8b6df21bdab6d8418ca6285a')), 'ssl__TabsItem--active');
  var tabClasses_list = (___arguments.context.pageData['sslTabsClassList']);
  for (var tabClasses_index in tabClasses_list) {
    tabClasses = tabClasses_list[tabClasses_index];
    if (tabClasses.length == 1) {
      addItemToList(tabClasses, 'ssl__hide');
    }
  }
  ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('062ce57f4dfb9b98fc6f6af57eef8116')).pop();

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/ssl/components/e846d674758698765e28762f57b71a46/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
    var tabClasses, tabControlsClasses;

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  var tabControlsClasses_list = (___arguments.context.pageData['sslTabsControlsClassList']);
  for (var tabControlsClasses_index in tabControlsClasses_list) {
    tabControlsClasses = tabControlsClasses_list[tabControlsClasses_index];
    if (tabControlsClasses.length > 1) {
      tabControlsClasses.pop();
    }
  }
  addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('e846d674758698765e28762f57b71a46')), 'ssl__TabsItem--active');
  var tabClasses_list = (___arguments.context.pageData['sslTabsClassList']);
  for (var tabClasses_index in tabClasses_list) {
    tabClasses = tabClasses_list[tabClasses_index];
    if (tabClasses.length == 1) {
      addItemToList(tabClasses, 'ssl__hide');
    }
  }
  ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('8acc8597ccc851b89eed36c68d48d033')).pop();

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/ssl/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* handler:onEnter */
  onEnter(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onEnter */
  /* content */
}))

define('./pages/upgrade/components/9051123f6b4f94ef192265039293d4cd/bundle.js', [], () => ({
  /* content */
  /* handler:onDynamicItemsAssignment */
  onDynamicItemsAssignment(___arguments) {
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



  return (getObjectProperty(___arguments.context.appData, 'logСurrentUpgradeData'))

  },
  /* handler:onDynamicItemsAssignment */
  /* handler:onBeforeUnmount */
  async onBeforeUnmount(___arguments) {
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


  if (getObjectProperty(___arguments.context.appData, 'previousUpgrade')) {
    if (getObjectProperty((getObjectProperty(___arguments.context.appData, 'opensSoketCurrentUpgrade')), 'connected')) {
      await (async function(serviceName) {

      	  socketCurrentUpgrade.emit ('service-logs:unsubscribe', {
      	    "serviceName":`${serviceName}`,
      	    "channelName":`${serviceName}-log`
      	  });

      	  socketCurrentUpgrade.disconnect();



      })((getObjectProperty(___arguments.context.appData, 'previousUpgrade')));
    }
  }

  },
  /* handler:onBeforeUnmount */
  /* handler:onBeforeMount */
  onBeforeMount(___arguments) {
      ___arguments.context.appData['logСurrentUpgradeData'] = [];

  },
  /* handler:onBeforeMount */
  /* content */
}))

define('./pages/upgrade/components/8bc4792e519b80bac6992c938c05b82a/bundle.js', [], () => ({
  /* content */
  /* handler:onContentAssignment */
  onContentAssignment(___arguments) {
      return ___arguments.context.dataModel

  },
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/upgrade/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onEnter */
  onEnter(___arguments) {
      localStorage.removeItem('originLoad');
  ___arguments.context.pageData['btnUpgradeLabel'] = 'Upgrade';
  ___arguments.context.pageData['btnUpgradeDisabled'] = true;
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '0.5';

  },
  /* handler:onEnter */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* content */
}))

define('./pages/upgrade/components/27d5660e3277d76c390ef4d5ebc32019/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      await ( async function (component) { component.focus() })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('f0e46aefb9a7b07518bb18eea4713526')));

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/upgrade/components/f0e46aefb9a7b07518bb18eea4713526/bundle.js', [], () => ({
  /* content */
  /* handler:onFocus */
  async onFocus(___arguments) {
    var error;

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}

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

function removeItemInList(l, i, c) {   const index = c ? l.findIndex(el => el[c] === i[c]) : l.indexOf(i);  if (index >= 0) { l.splice(index, 1); }  return l;}


  addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('27d5660e3277d76c390ef4d5ebc32019')), 'UpgradeControl__icon--rotated');
  if (!(getObjectProperty(___arguments.context.pageData, 'versions'))) {
    ___arguments.context.pageData['versions'] = ({ 'results': [({ 'name': 'Loading...' })] });
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('e53b33b5ec0d46efbc5dda17843838aa')), 'UpgradeControl__results--open');
    try {
      ___arguments.context.pageData['versions'] = (await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})('http://localhost:5050/services/version/docker-hub/v2/repositories/backendless/bl-server/tags/')).query(({ 'page_size': 20,'page': 1,'ordering': 'last_updated' })).setEncoding('utf8').send());

    } catch (error) {
      await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), '#ffa500', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('1921a9cd7ebbed5892b11a47806e6baa')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1921a9cd7ebbed5892b11a47806e6baa')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4eda51021b746238c2714d9f1947b5c5')));
      ___arguments.context.pageData['versions'] = '';
      removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('e53b33b5ec0d46efbc5dda17843838aa')), 'UpgradeControl__results--open', '');
      removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('27d5660e3277d76c390ef4d5ebc32019')), 'UpgradeControl__icon--rotated', '');

    }
  } else {
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('e53b33b5ec0d46efbc5dda17843838aa')), 'UpgradeControl__results--open');
  }

  },
  /* handler:onFocus */
  /* handler:onBlur */
  onBlur(___arguments) {
    function removeItemInList(l, i, c) {   const index = c ? l.findIndex(el => el[c] === i[c]) : l.indexOf(i);  if (index >= 0) { l.splice(index, 1); }  return l;}


  removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('e53b33b5ec0d46efbc5dda17843838aa')), 'UpgradeControl__results--open', '');
  removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('27d5660e3277d76c390ef4d5ebc32019')), 'UpgradeControl__icon--rotated', '');

  },
  /* handler:onBlur */
  /* handler:onChange */
  async onChange(___arguments) {
    var versionsData;

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


  if (!___arguments.value) {
    ___arguments.context.pageData['btnUpgradeDisabled'] = true;
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '0.5';
  } else {
    ___arguments.context.pageData['btnUpgradeDisabled'] = false;
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '1';
    versionsData = (await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})('http://localhost:5050/services/version/docker-hub/v2/repositories/backendless/bl-server/tags/')).query(({ 'page_size': 100,'page': 1,'ordering': 'last_updated','name': ___arguments.value })).setEncoding('utf8').send());
    if ((getObjectProperty(versionsData, 'results')).length == 0) {
      ___arguments.context.pageData['versions'] = ({ 'results': [({ 'name': 'Nothing found' })] });
    } else {
      ___arguments.context.pageData['versions'] = versionsData;
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/upgrade/components/d61f05ceb764b89f8c44a8c320457ad6/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
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


  ___arguments.context.pageData['btnUpgradeDisabled'] = true;
  ___arguments.context.pageData['btnUpgradeLabel'] = 'Upgrading...';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '0.5';
  ___arguments.context.appData['logСurrentUpgradeData'] = ['Loading...'];
  try {
    currentUpgradeJob = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/upgrade', ({ 'version': (getObjectProperty(___arguments.context.pageData, 'version')) })));
    ___arguments.context.pageData['startUpdateMenu'] = true;
    ___arguments.context.appData['jobsList'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/upgrade/jobs', null));

  } catch (error) {
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), '#ffa500', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('1921a9cd7ebbed5892b11a47806e6baa')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1921a9cd7ebbed5892b11a47806e6baa')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4eda51021b746238c2714d9f1947b5c5')));

  } finally {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '1';
    ___arguments.context.pageData['btnUpgradeLabel'] = 'Upgrade';
    ___arguments.context.pageData['btnUpgradeDisabled'] = false;
    ___arguments.context.pageData['startUpdateMenu'] = false;

  }
  await new Promise(r => setTimeout(r, 500 || 0));
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
  await new Promise(r => setTimeout(r, 1000 || 0));
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

define('./pages/upgrade/components/924202b19f0ef683e3940a99b258d565/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  async onClassListAssignment(___arguments) {
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


  if (getObjectProperty(___arguments.context.pageData, 'menuError')) {
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(___arguments.context.pageData, 'menuError')), '#ffa500', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('1921a9cd7ebbed5892b11a47806e6baa')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('1921a9cd7ebbed5892b11a47806e6baa')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4eda51021b746238c2714d9f1947b5c5')));
  }

  return ['ServerLogs']

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./pages/upgrade/components/ea569f4f8251b46dc33c1bd6e0ce4a87/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
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


  if ((getObjectProperty(___arguments.context.dataModel, 'name')) != 'Loading...' && (getObjectProperty(___arguments.context.dataModel, 'name')) != 'Nothing found') {
    ___arguments.context.pageData['version'] = (getObjectProperty(___arguments.context.dataModel, 'name'));
    ___arguments.context.pageData['btnUpgradeDisabled'] = false;
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '1';
  } else {
    ___arguments.context.pageData['btnUpgradeDisabled'] = true;
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('d61f05ceb764b89f8c44a8c320457ad6'))['opacity'] = '0.5';
  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/upgrade/components/eb6434e79025bd9d9718d195450cb59b/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/upgrade/jobs', null));

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/upgradeLogs/components/9051123f6b4f94ef192265039293d4cd/bundle.js', [], () => ({
  /* content */
  /* handler:onDynamicItemsAssignment */
  onDynamicItemsAssignment(___arguments) {
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



  return (getObjectProperty(___arguments.context.appData, 'logUpgradeData'))

  },
  /* handler:onDynamicItemsAssignment */
  /* handler:onBeforeUnmount */
  async onBeforeUnmount(___arguments) {
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

  },
  /* handler:onBeforeUnmount */
  /* content */
}))

define('./pages/upgradeLogs/components/8bc4792e519b80bac6992c938c05b82a/bundle.js', [], () => ({
  /* content */
  /* handler:onContentAssignment */
  onContentAssignment(___arguments) {
      return ___arguments.context.dataModel

  },
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/upgradeLogs/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onEnter */
  async onEnter(___arguments) {
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
  if (!(getObjectProperty(___arguments.context.appData, 'logUpgradeData')) && (getObjectProperty(___arguments.context.pageData, 'jobName'))) {
    ___arguments.context.appData['logUpgradeData'] = [];
    ___arguments.context.appData['opensScketUpgrade'] = (await (async function(logsArray, serviceName, podName) {
    	const io = await BackendlessUI.requireModule('https://cdn.jsdelivr.net/npm/socket.io-client@4.4.0/dist/socket.io.min.js');

    	  socketUpgrade = io.connect('http://localhost:5051', { transports : ['websocket'] });

    	  socketUpgrade.on (`${serviceName}-log`, function (data) {
    	    logsArray.push (data);
    	  });

    	  socketUpgrade.emit ('service-logs:subscribe', {
    	    "serviceName":`${serviceName}`,
    	    "podName":`${podName}`,
    	    "channelName": `${serviceName}-log`
    	  });


    	  return socketUpgrade
    })((getObjectProperty(___arguments.context.appData, 'logUpgradeData')), (getObjectProperty(___arguments.context.pageData, 'jobName')), (getObjectProperty(___arguments.context.pageData, 'podName'))));
    ___arguments.context.appData['previousServiceUpgrade'] = (getObjectProperty(___arguments.context.pageData, 'jobName'));
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

define('./pages/upgradeLogs/components/924202b19f0ef683e3940a99b258d565/bundle.js', [], () => ({
  /* content */
  /* handler:onClassListAssignment */
  async onClassListAssignment(___arguments) {
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


  if (getObjectProperty(___arguments.context.pageData, 'menuError')) {
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(___arguments.context.pageData, 'menuError')), '#ffa500', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('1921a9cd7ebbed5892b11a47806e6baa')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('1921a9cd7ebbed5892b11a47806e6baa')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4eda51021b746238c2714d9f1947b5c5')));
  }

  return ['ServerLogs']

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./pages/userManagement/components/9f186f89932cdfe880554e43f4f916a1/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  async ['onMounted'](___arguments) {
      if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  }
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  }
  (function (componentUid, listItems) { ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('9f186f89932cdfe880554e43f4f916a1', (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/user', null)));
  ___arguments.context.pageData['noUserMessage'] = (((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1')).length == 0);
  ___arguments.context.pageData['userManagement'] = true;
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
  }
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'flex';
  }

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/userManagement/components/5a537424c7d5f0fa5c2169ba52cdc3b9/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
    var error, userName, user;

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


  (function (componentUid, dataModel) { ___arguments.context.setComponentDataStoreByUid(componentUid, dataModel) })('bff4d8ac579f78a648132998464e4919', ({ 'id': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'id')),'btnLabel': 'Delete','login': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'login')) }));
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bff4d8ac579f78a648132998464e4919'))['visibility'] = 'visible';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bff4d8ac579f78a648132998464e4919'))['opacity'] = 1;

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/userManagement/components/b4ac65b40f178182007af4f16afe24d6/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  onMounted(___arguments) {
      ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['btnSetPassword'] = 'Set password';
  ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['btnDelete'] = 'Delete';

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/userManagement/components/33a848b796b77f762a2122974b1af0aa/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
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


  ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['modalTitle'] = 'Set password';
  ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['userName'] = (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'login'));
  ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['userId'] = (getObjectProperty(___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c'), 'id'));
  ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['userNameDisabled'] = true;
  ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['createBtn'] = 'Set password';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'visible';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 1;

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/userManagement/components/ea1df98b3023353c2169a1abea133c3b/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
      ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['userName'] = '';
  ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['password'] = '';
  ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['confirmPassword'] = '';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'hidden';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 0;
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('42fc2f835fa3bf01cbaf06e27b5b5e3b', false);
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d50a1aa5921ba06c583457a897f2a8f7', false);
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('400fba0802880a93bb759cb7cbb9123f', false);
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('76b375976525da5784a688f366843054', false);

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/userManagement/components/8f4c69df692fc0b15ebc79a8b25418e6/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
      ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['modalTitle'] = 'Create User';
  ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['userNameDisabled'] = false;
  ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['createBtn'] = 'Create';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'visible';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 1;

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/userManagement/components/363a0a2a92aa5bcb62b17eba85b1d7a8/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, currentMessage, userData, newUser, isValid;

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

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  isValid = true;
  if (!(getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'userName'))) {
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('42fc2f835fa3bf01cbaf06e27b5b5e3b', true);
    isValid = false;
  }
  if (!(getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'password'))) {
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d50a1aa5921ba06c583457a897f2a8f7', true);
    isValid = false;
  }
  if (!(getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'confirmPassword'))) {
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('400fba0802880a93bb759cb7cbb9123f', true);
    isValid = false;
  }
  if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'confirmPassword')) {
    if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'confirmPassword')) != (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'password'))) {
      isValid = false;
    }
  }
  if (!isValid) {
    return false;
  }
  ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['createBtnDisabled'] = true;
  userData = ({ 'login': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'userName')),'password': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'password')) });
  try {
    if (!(getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'userNameDisabled'))) {
      ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['createBtn'] = 'Creating...';
      newUser = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('post', '/user/register', userData));
      userData['id'] = (getObjectProperty(newUser, 'id'));
    } else {
      ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['createBtn'] = 'Setting...';
      await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', (String('/user/') + String(getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'userId'))), userData);
    }
    if (!(getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'userNameDisabled'))) {
      addItemToList(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1')), userData);
      ___arguments.context.pageData['noUserMessage'] = false;
      currentMessage = 'User has been successfully created';
    } else {
      currentMessage = 'Password was set successfully';
    }
    ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['userName'] = '';
    ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['password'] = '';
    ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['confirmPassword'] = '';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'hidden';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 0;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, currentMessage, '#fff', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } catch (error) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'hidden';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 0;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (getObjectProperty(error, 'message')), '#ffa500', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));

  } finally {
    if (!(getObjectProperty(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11'), 'userNameDisabled'))) {
      ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['createBtn'] = 'Create';
    } else {
      ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['createBtn'] = 'Set password';
    }
    ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['createBtnDisabled'] = false;

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/userManagement/components/0681c698ed65058599f21cdecce92e8d/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  onChange(___arguments) {
      if (!___arguments.value) {
    ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('42fc2f835fa3bf01cbaf06e27b5b5e3b', true);
  } else {
    ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('42fc2f835fa3bf01cbaf06e27b5b5e3b', false);
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/userManagement/components/a6868ac85ed520f809ceb0b4830d26ed/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  onChange(___arguments) {
      if (!___arguments.value) {
    ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d50a1aa5921ba06c583457a897f2a8f7', true);
  } else {
    ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d50a1aa5921ba06c583457a897f2a8f7', false);
  }
  if (___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['confirmPassword']) {
    if ((___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['password']) != (___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['confirmPassword'])) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('76b375976525da5784a688f366843054', true);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('76b375976525da5784a688f366843054', false);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/userManagement/components/45d92809be072fc19a6f16beadcb1cd3/bundle.js', [], () => ({
  /* content */
  /* handler:onChange */
  onChange(___arguments) {
      if (!___arguments.value) {
    ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('400fba0802880a93bb759cb7cbb9123f', true);
  } else {
    ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('400fba0802880a93bb759cb7cbb9123f', false);
  }
  if (___arguments.value) {
    if ((___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['password']) != (___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['confirmPassword'])) {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('76b375976525da5784a688f366843054', true);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('76b375976525da5784a688f366843054', false);
    }
  } else {
    ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('76b375976525da5784a688f366843054', false);
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/userManagement/components/b4398d5c0048d80587b9664d8f5eac11/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  onMounted(___arguments) {
      ___arguments.context.dataModel['createBtn'] = 'Create';

  },
  /* handler:onMounted */
  /* content */
}))

define('./pages/userManagement/components/page/bundle.js', [], () => ({
  /* content */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* handler:onEnter */
  onEnter(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onEnter */
  /* content */
}))

define('./pages/userManagement/components/8927183bdee3889fa44288bf76731ebd/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bff4d8ac579f78a648132998464e4919'))['visibility'] = 'hidden';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bff4d8ac579f78a648132998464e4919'))['opacity'] = 0;

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/userManagement/components/8238b1fa04db49ac4312630541517244/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bff4d8ac579f78a648132998464e4919'))['visibility'] = 'hidden';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bff4d8ac579f78a648132998464e4919'))['opacity'] = 0;

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/userManagement/components/e27668188bad5334c6aa19d148437bbe/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    var error, user, color, message;

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

/**
 * Describe this function...
 */
async function closeModal(message, color) {
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bff4d8ac579f78a648132998464e4919'))['visibility'] = 'hidden';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bff4d8ac579f78a648132998464e4919'))['opacity'] = 0;
  await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, message, color, ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')));
}


  ___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919')['btnDeleteDisabled'] = true;
  ___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919')['btnLabel'] = 'Deleting...';
  try {
    await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('delete', '/user', ({ 'id': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919'), 'id')) }));
    (function (componentUid, listItems) { ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('9f186f89932cdfe880554e43f4f916a1', (await asyncListFilter(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1')), async (user) => {


     return ((getObjectProperty(user, 'id')) != (getObjectProperty(___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919'), 'id')));
    })));
    if (((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1')).length == 0) {
      ___arguments.context.pageData['noUserMessage'] = true;
    }
    await closeModal('User deleted successfully', '#fff');

  } catch (error) {
    await closeModal((getObjectProperty(error, 'message')), '#ff0000');

  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/userManagement/components/bff4d8ac579f78a648132998464e4919/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
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


  if ((getObjectProperty(___arguments.event, 'target')) == (getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('bff4d8ac579f78a648132998464e4919')), 'el'))) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bff4d8ac579f78a648132998464e4919'))['visibility'] = 'hidden';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('bff4d8ac579f78a648132998464e4919'))['opacity'] = 0;
  }

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/userManagement/components/6b0596ebe49ddb2479778e1710a582ae/bundle.js', [], () => ({
  /* content */
  /* handler:onContentAssignment */
  ['onContentAssignment'](___arguments) {
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



  return (['Are you sure you want to delete user: ',(getObjectProperty(___arguments.context.getComponentDataStoreByUid('bff4d8ac579f78a648132998464e4919'), 'login')),'?'].join(''))

  },
  /* handler:onContentAssignment */
  /* content */
}))

define('./pages/userManagement/components/1744db9f250d6ba85e3435fc3be3660e/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
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


  if ((getObjectProperty(___arguments.event, 'target')) == (getObjectProperty(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e')), 'el'))) {
    ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['userName'] = '';
    ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['password'] = '';
    ((function (componentUid) { return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['confirmPassword'] = '';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'hidden';
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 0;
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('42fc2f835fa3bf01cbaf06e27b5b5e3b', false);
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d50a1aa5921ba06c583457a897f2a8f7', false);
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('400fba0802880a93bb759cb7cbb9123f', false);
    (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('76b375976525da5784a688f366843054', false);
  }

  },
  /* handler:onClick */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/1fed8d3527f135219fb66d9de15adb04/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if ((await ( async function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df')))) == 0) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = (String((await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))))) + String('px'));
    while (((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('1fed8d3527f135219fb66d9de15adb04')).length > 2) {
      ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('1fed8d3527f135219fb66d9de15adb04')).pop();
    }
  } else {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = (String(0) + String('px'));
    addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('1fed8d3527f135219fb66d9de15adb04')), 'aside__TabHeader--rotated');
  }

  },
  /* handler:onClick */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/941dd0cd3b6497a91648a63b0e7bbec7/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
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


  if (getObjectProperty(___arguments.context.appData, 'previousService')) {
    if (getObjectProperty((getObjectProperty(___arguments.context.appData, 'openSocket')), 'connected')) {
      await (async function(serviceName) {

      	  socket.emit ('service-logs:unsubscribe', {
      	    "serviceName":`${serviceName}`,
      	    "channelName":`${serviceName}-logs`
      	  });

      	  socket.disconnect();



      })((getObjectProperty(___arguments.context.appData, 'previousService')));
    }
  }
  await ( async function (pageName, pageData) { BackendlessUI.goToPage(pageName, pageData) })('serviceLogs', ({ 'serviceName': (getObjectProperty(___arguments.context.dataModel, 'name')),'pageServerStatus': 'ServerLogs' }));
  ___arguments.context.appData['logData'] = [];
  ___arguments.context.appData['openSocket'] = (await (async function(serviceName, logsArray) {
  	const io = await BackendlessUI.requireModule('https://cdn.jsdelivr.net/npm/socket.io-client@4.4.0/dist/socket.io.min.js');

  	  socket = io.connect('http://localhost:5051', { transports : ['websocket'] });

  	  socket.on (`${serviceName}-logs`, function (data) {
  	    logsArray.push (data);
  	  });

  	  socket.emit ('service-logs:subscribe', {
  	    "serviceName":`${serviceName}`,
  	    "channelName": `${serviceName}-logs`
  	  });


  	  return socket


  })((getObjectProperty(___arguments.context.dataModel, 'name')), (getObjectProperty(___arguments.context.appData, 'logData'))));
  ___arguments.context.appData['previousService'] = (getObjectProperty(___arguments.context.dataModel, 'name'));

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList;


  classList = ['aside__TabContentItem'];
  if ((___arguments.context.dataModel['name']) == (___arguments.context.pageData['serviceName'])) {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/02f59a618f63b16eab9c8fcf60ac6e41/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if ((await ( async function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb')))) == 0) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))['maxHeight'] = (String((await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))))) + String('px'));
    addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('02f59a618f63b16eab9c8fcf60ac6e41')), 'aside__TabHeader--rotated');
  } else {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))['maxHeight'] = (String(0) + String('px'));
    while (((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('02f59a618f63b16eab9c8fcf60ac6e41')).length > 2) {
      ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('02f59a618f63b16eab9c8fcf60ac6e41')).pop();
    }
  }

  },
  /* handler:onClick */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/c9ab1739404cb44b5b1b8bc263b8f966/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if ((await ( async function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('82bfb23351e9fb6b2b482c3d040db27a')))) == 0) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('82bfb23351e9fb6b2b482c3d040db27a'))['maxHeight'] = (String((await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('82bfb23351e9fb6b2b482c3d040db27a'))))) + String('px'));
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))['maxHeight'] = (String((await ( async function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb')))) + (await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('82bfb23351e9fb6b2b482c3d040db27a'))))) + String('px'));
    addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('c9ab1739404cb44b5b1b8bc263b8f966')), 'aside__TabHeader--rotated');
  } else {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('82bfb23351e9fb6b2b482c3d040db27a'))['maxHeight'] = (String(0) + String('px'));
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))['maxHeight'] = (String(await ( async function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb')))) + String('px'));
    while (((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('c9ab1739404cb44b5b1b8bc263b8f966')).length > 2) {
      ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('c9ab1739404cb44b5b1b8bc263b8f966')).pop();
    }
  }

  },
  /* handler:onClick */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/3c48282edad672c3a97414a89b3c15df/bundle.js', [], () => ({
  /* content */
  /* handler:onBeforeMount */
  async ['onBeforeMount'](___arguments) {
    var error;

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

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  try {
    if (!(getObjectProperty(___arguments.context.appData, 'statusData'))) {
      ___arguments.context.appData['statusData'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/status', null));
      await new Promise(r => setTimeout(r, 20 || 0));
      ___arguments.context.appData['height'] = (String((await (async function(element) {
      	return element.el.scrollHeight
      })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))))) + String('px'));
    }
    if (getObjectProperty(___arguments.context.pageData, 'pageServerStatus')) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = (getObjectProperty(___arguments.context.appData, 'height'));
    } else {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = 0;
      addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('1fed8d3527f135219fb66d9de15adb04')), 'aside__TabHeader--rotated');
    }

  } catch (error) {
    (function (message) { alert(message) })((getObjectProperty(error, 'message')));

  }

  },
  /* handler:onBeforeMount */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/242a605e5b9ad51d7db207da080446ef/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
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


  if ((getObjectProperty(___arguments.context.pageData, 'pageServerStatus')) != 'ServerStatus') {
    await ( async function (pageName, pageData) { BackendlessUI.goToPage(pageName, pageData) })('serverStatus', ({ 'pageServerStatus': 'ServerStatus' }));
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
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
  if ((getObjectProperty(___arguments.context.pageData, 'pageServerStatus')) == 'ServerStatus') {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/eabb8cf45a71bcf1946dc53f30c31b8e/bundle.js', [], () => ({
  /* content */
  /* handler:onDynamicItemsAssignment */
  onDynamicItemsAssignment(___arguments) {
      return (___arguments.context.appData['statusData'])

  },
  /* handler:onDynamicItemsAssignment */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/14ec284f978d75e2cd75db678d46df17/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
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


  if ((getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) != 'mySql') {
    await ( async function (pageName, pageData) { BackendlessUI.goToPage(pageName, pageData) })('mySql', ({ 'pageConfiguration': 'mySql' }));
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
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
  if ((getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) == 'mySql') {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/e18fe2c44deb374fbddc1d8bc3f2848b/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
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


  if ((getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) != 'redis') {
    await ( async function (pageName, pageData) { BackendlessUI.goToPage(pageName, pageData) })('redis', ({ 'pageConfiguration': 'redis' }));
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
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
  if ((getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) == 'redis') {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/01553a7c2d381aa60e5ccf3789f368d7/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
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


  if ((getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) != 'dataService') {
    await ( async function (pageName, pageData) { BackendlessUI.goToPage(pageName, pageData) })('dataService', ({ 'pageConfiguration': 'dataService' }));
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
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
  if ((getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) == 'dataService') {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/4f8a44592e064cf3cf6c686767b9b44a/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
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


  if ((getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) != 'domainsGeneral') {
    await ( async function (pageName, pageData) { BackendlessUI.goToPage(pageName, pageData) })('domainsGeneral', ({ 'pageConfiguration': 'domainsGeneral' }));
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
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
  if ((getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) == 'domainsGeneral') {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/82bfb23351e9fb6b2b482c3d040db27a/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  async ['onMounted'](___arguments) {
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

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if ((getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) == 'domainsGeneral' || (getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) == 'ssl') {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('82bfb23351e9fb6b2b482c3d040db27a'))['maxHeight'] = (await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('82bfb23351e9fb6b2b482c3d040db27a'))));
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))['maxHeight'] = (String(((function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb')))) + (await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('82bfb23351e9fb6b2b482c3d040db27a'))))) + String('px'));
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('c9ab1739404cb44b5b1b8bc263b8f966')), 'aside__TabHeader--rotated');
  } else {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('82bfb23351e9fb6b2b482c3d040db27a'))['maxHeight'] = 0;
  }

  },
  /* handler:onMounted */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/ca8df858b6abfa78f849814f98cbadeb/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  async ['onMounted'](___arguments) {
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

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if (getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))['maxHeight'] = (String((await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))))) + String('px'));
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('02f59a618f63b16eab9c8fcf60ac6e41')), 'aside__TabHeader--rotated');
  } else {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('ca8df858b6abfa78f849814f98cbadeb'))['maxHeight'] = 0;
  }

  },
  /* handler:onMounted */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/6cab43b49cea42f97ae16e6befa3a51e/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
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


  if ((getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) != 'ssl') {
    await ( async function (pageName, pageData) { BackendlessUI.goToPage(pageName, pageData) })('ssl', ({ 'pageConfiguration': 'ssl' }));
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
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
  if ((getObjectProperty(___arguments.context.pageData, 'pageConfiguration')) == 'ssl') {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/03f4bd550b65418c743e04afe3aab9d9/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if ((await ( async function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('b18be6db888c37d656d8a09b4db77b43')))) == 0) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('b18be6db888c37d656d8a09b4db77b43'))['maxHeight'] = (String((await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('b18be6db888c37d656d8a09b4db77b43'))))) + String('px'));
    addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('03f4bd550b65418c743e04afe3aab9d9')), 'aside__TabHeader--rotated');
  } else {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('b18be6db888c37d656d8a09b4db77b43'))['maxHeight'] = (String(0) + String('px'));
    while (((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('03f4bd550b65418c743e04afe3aab9d9')).length > 2) {
      ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('03f4bd550b65418c743e04afe3aab9d9')).pop();
    }
  }

  },
  /* handler:onClick */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/b18be6db888c37d656d8a09b4db77b43/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  async ['onMounted'](___arguments) {
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

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if (getObjectProperty(___arguments.context.pageData, 'pageSettings')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('b18be6db888c37d656d8a09b4db77b43'))['maxHeight'] = (String((await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('b18be6db888c37d656d8a09b4db77b43'))))) + String('px'));
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('03f4bd550b65418c743e04afe3aab9d9')), 'aside__TabHeader--rotated');
  } else {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('b18be6db888c37d656d8a09b4db77b43'))['maxHeight'] = 0;
  }

  },
  /* handler:onMounted */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/5478c0a1f053be3a3702c49522bc3f9f/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
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


  if ((getObjectProperty(___arguments.context.pageData, 'pageSettings')) != 'userManagement') {
    await ( async function (pageName, pageData) { BackendlessUI.goToPage(pageName, pageData) })('userManagement', ({ 'pageSettings': 'userManagement' }));
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList;


  classList = ['aside__TabContentItem'];
  if ((___arguments.context.pageData['pageSettings']) == 'userManagement') {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/28ba1a8199a4eecb2cd95d94ca4c9b79/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
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


  if ((getObjectProperty(___arguments.context.pageData, 'pageSettings')) != 'kubernetes') {
    await ( async function (pageName, pageData) { BackendlessUI.goToPage(pageName, pageData) })('kubernetes', ({ 'pageSettings': 'kubernetes' }));
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList;


  classList = ['aside__TabContentItem'];
  if ((___arguments.context.pageData['pageSettings']) == 'kubernetes') {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/7d9115a5d5fa680bccbf5b04e8670af9/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if ((await ( async function (typeSize, component) { return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c')))) == 0) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))['maxHeight'] = (String((await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))))) + String('px'));
    addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('7d9115a5d5fa680bccbf5b04e8670af9')), 'aside__TabHeader--rotated');
  } else {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))['maxHeight'] = (String(0) + String('px'));
    while (((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('7d9115a5d5fa680bccbf5b04e8670af9')).length > 2) {
      ((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('7d9115a5d5fa680bccbf5b04e8670af9')).pop();
    }
  }

  },
  /* handler:onClick */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/a0ee549c33148fbe32998507d3e95d7c/bundle.js', [], () => ({
  /* content */
  /* handler:onBeforeMount */
  async ['onBeforeMount'](___arguments) {
    var error;

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

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  try {
    if (!(getObjectProperty(___arguments.context.appData, 'jobsList'))) {
      ___arguments.context.appData['jobsList'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/upgrade/jobs', null));
      await new Promise(r => setTimeout(r, 20 || 0));
      ___arguments.context.appData['heightUpgradeContent'] = (String((await (async function(element) {
      	return element.el.scrollHeight
      })(((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))))) + String('px'));
    }

  } catch (error) {
    ___arguments.context.pageData['menuError'] = (getObjectProperty(error, 'message'));

  }
  if (getObjectProperty(___arguments.context.pageData, 'pageUpgrade')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))['maxHeight'] = (getObjectProperty(___arguments.context.appData, 'heightUpgradeContent'));
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('7d9115a5d5fa680bccbf5b04e8670af9')), 'aside__TabHeader--rotated');
  } else {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))['maxHeight'] = 0;
  }

  },
  /* handler:onBeforeMount */
  /* handler:onClassListAssignment */
  async onClassListAssignment(___arguments) {
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


  if (getObjectProperty(___arguments.context.pageData, 'startUpdateMenu')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))['maxHeight'] = (String((await (async function(element) {
    	return element.el.scrollHeight
    })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('a0ee549c33148fbe32998507d3e95d7c'))))) + String('px'));
  }

  return ['aside__TabContent', 'aside__TabContentUpgrade']

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/5c9dbfe9dbd831d9236cdced4d2ee75e/bundle.js', [], () => ({
  /* content */
  /* handler:onContentAssignment */
  async onContentAssignment(___arguments) {
    var date, month, day, seconds, minutes, hours, outputTimeItem, timeItem;

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
async function formatTimeItem(timeItem) {
  if (timeItem < 10) {
    outputTimeItem = String(0) + String(timeItem);
  } else {
    outputTimeItem = timeItem;
  }
  return outputTimeItem
}


  date = (new Date((getObjectProperty(___arguments.context.getComponentDataStoreByUid('17ba156b5b49eae93175d437c9e8c1c2'), 'creationTimestamp'))));
  day = await formatTimeItem((new Date(date).getDate()));
  month = await formatTimeItem((new Date(date).getMonth() + 1));
  hours = await formatTimeItem((new Date(date).getHours()));
  minutes = await formatTimeItem((new Date(date).getMinutes()));
  seconds = await formatTimeItem((new Date(date).getSeconds()));

  return ([day,'/',month,'/',(new Date(date).getFullYear()),' ','v. ',(getObjectProperty(___arguments.context.getComponentDataStoreByUid('17ba156b5b49eae93175d437c9e8c1c2'), 'version'))].join(''))

  },
  /* handler:onContentAssignment */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/17ba156b5b49eae93175d437c9e8c1c2/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
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
  ___arguments.context.appData['logUpgradeData'] = [];
  ___arguments.context.appData['opensScketUpgrade'] = (await (async function(logsArray, serviceName, podName) {
  	const io = await BackendlessUI.requireModule('https://cdn.jsdelivr.net/npm/socket.io-client@4.4.0/dist/socket.io.min.js');

  	  socketUpgrade = io.connect('http://localhost:5051', { transports : ['websocket'] });

  	  socketUpgrade.on (`${serviceName}-log`, function (data) {
  	    logsArray.push (data);
  	  });

  	  socketUpgrade.emit ('service-logs:subscribe', {
  	    "serviceName":`${serviceName}`,
  	    "podName":`${podName}`,
  	    "channelName": `${serviceName}-log`
  	  });


  	  return socketUpgrade
  })((getObjectProperty(___arguments.context.appData, 'logUpgradeData')), (getObjectProperty(___arguments.context.dataModel, 'jobName')), (getObjectProperty(___arguments.context.dataModel, 'podName'))));
  ___arguments.context.appData['previousServiceUpgrade'] = (getObjectProperty(___arguments.context.dataModel, 'jobName'));

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
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

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/d03b9242444bed493a3f71c94029bfcc/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
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


  if ((getObjectProperty(___arguments.context.pageData, 'pageUpgrade')) != 'upgrade') {
    await ( async function (pageName, pageData) { BackendlessUI.goToPage(pageName, pageData) })('upgrade', ({ 'pageUpgrade': 'upgrade' }));
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
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
  if ((getObjectProperty(___arguments.context.pageData, 'pageUpgrade')) == 'upgrade') {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))

define('./components/reusable/r_dcac843a154c1eb2e28a4a08b5d34fec/logic/3d81f4e11ffb3b99c18f1b83c9cfa36d/bundle.js', [], () => ({
  /* content */
  /* handler:onDynamicItemsAssignment */
  onDynamicItemsAssignment(___arguments) {
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



  return (getObjectProperty(___arguments.context.appData, 'jobsList'))

  },
  /* handler:onDynamicItemsAssignment */
  /* content */
}))

define('./components/reusable/r_eecdebf7a73f3c5e1cffd6bc92dbd289/logic/acafba620bdcd139813c3e2a3613dfaf/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
      if ((((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('62182e6e6db9aecf974c9c65dfaea369'))['left']) != '0px') {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('62182e6e6db9aecf974c9c65dfaea369'))['left'] = (String(0) + String('px'));
  } else {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('62182e6e6db9aecf974c9c65dfaea369'))['left'] = (String(-260) + String('px'));
  }

  },
  /* handler:onClick */
  /* content */
}))

define('./components/reusable/r_eecdebf7a73f3c5e1cffd6bc92dbd289/logic/a3dabbfae89a23b9e315d15d59f36ec7/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
      if (((function (typeSize) { return document.documentElement[`${typeSize}`] })('clientWidth')) > 750) {
    (function (url, isExternal, params) { BackendlessUI.Navigator.openWebPage(url, isExternal, params); })('https://backendless.com', true, undefined);
  }

  },
  /* handler:onClick */
  /* content */
}))

