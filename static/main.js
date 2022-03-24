require.config({
    waitSeconds: 60,
    paths: {
        'sdk': uiBuilderSDKPath + '/sdk',
    }
});

define(['sdk'], BackendlessUI => BackendlessUI.startApp());

define('./functions/4f8fe7d853c915840a67685fa058d83f/code.js', () => { 

var item, tooltip;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}



BackendlessUI.Functions.Custom['fn_4f8fe7d853c915840a67685fa058d83f'] = async function fn_4f8fe7d853c915840a67685fa058d83f(descriptionList, name) {


  return (((await asyncListFilter(descriptionList, async (item) => {


 return ((item['name']) == name);
}))[0])['description'])
}

})
define('./functions/696a14dd8d2f85be7023c2c4441a65a5/code.js', () => { 

var data, host, currentOrigin, settingsOrigin, error;



BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5'] = async function fn_696a14dd8d2f85be7023c2c4441a65a5(method, path, body) {
    currentOrigin = ((await ( async function (){ return window.location })())['origin']);
  if (currentOrigin == 'https://teemingkitty.backendless.app') {
    data = (await Backendless.Request[method]((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String((await (async function() {
    	return BackendlessUI.config.settings.proManagerAPIURL || 'http://localhost:5050/services'
    })())) + String(path)))).setEncoding('utf8').send(body));
  } else {
    try {
      if (!((function(){ try { return JSON.parse(localStorage.getItem('originLoad')) } catch(e){ return null }})())) {
        settingsOrigin = ((await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String(currentOrigin) + String('/settings.json')))).setEncoding('utf8').send())['serverURL']);
        localStorage.setItem('originLoad', JSON.stringify(true));
        localStorage.setItem('settingsOrigin', JSON.stringify(settingsOrigin));
      }
      settingsOrigin = ((function(){ try { return JSON.parse(localStorage.getItem('settingsOrigin')) } catch(e){ return null }})());

    } catch (error) {
      console.log(error['message']);

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
  async onMounted(___arguments) {
      if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  }
  if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  }
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
  ;(function (componentUid, listItems){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('9f186f89932cdfe880554e43f4f916a1', (await (async function() {
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

define('./pages/domainsGeneral/components/4038f86f5b6cacb8ee37a8efac3527aa/bundle.js', [], () => ({
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

define('./pages/domainsGeneral/components/198c9c59e5389ad5ff37a4bb3e22bce5/bundle.js', [], () => ({
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

define('./pages/domainsGeneral/components/cb32ffe5c76e4f69d148911494c6952e/bundle.js', [], () => ({
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

define('./pages/domainsGeneral/components/cd73b3928006379f77b53b870895e855/bundle.js', [], () => ({
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

define('./pages/domainsGeneral/components/b11bd95b7c781e9ce31e01ee1b83b966/bundle.js', [], () => ({
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

define('./pages/domainsGeneral/components/5a537424c7d5f0fa5c2169ba52cdc3b9/bundle.js', [], () => ({
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

define('./pages/domainsGeneral/components/7e1ac109ebbe4db399af721c8b472bd2/bundle.js', [], () => ({
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
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', true);
    }
  }

  },
  /* handler:onChange */
  /* content */
}))

define('./pages/domainsGeneral/components/57c1dbc34b1c989c67cdeee5b059df3e/bundle.js', [], () => ({
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

define('./pages/domainsGeneral/components/febabf157a01b6cc64e1b8f62b1e1a32/bundle.js', [], () => ({
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

define('./pages/domainsGeneral/components/826adfb80e9fa3f9c4d409ef7c4fb6a8/bundle.js', [], () => ({
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

define('./pages/domainsGeneral/components/f6024c35a4be53e6b64b776ba73ce95c/bundle.js', [], () => ({
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

define('./pages/domainsGeneral/components/f2cd77e13a5f3c9633a2a81f62910c09/bundle.js', [], () => ({
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

define('./pages/domainsGeneral/components/49cfbb2af051f87d5dccc9944ddcb7b2/bundle.js', [], () => ({
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

define('./pages/domainsGeneral/components/c37570257cfd551e117c464d74721426/bundle.js', [], () => ({
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

define('./pages/home/components/page/bundle.js', [], () => ({
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
  if (getObjectProperty((await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/install/status', null)), 'servicesCreated')) {
    await ( async function (pageName, pageData) { BackendlessUI.goToPage(pageName, pageData) })('serverStatus', undefined);
  } else {
    await ( async function (pageName, pageData) { BackendlessUI.goToPage(pageName, pageData) })('install', undefined);
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
  async onClick(___arguments) {
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
    console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('post', '/install/', ({ 'version': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'version')),'mountPath': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'mountPath')),'licence': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'licence')),'login': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'login')),'password': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'password')) })));
    console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('post', '/user/login/', ({ 'login': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'login')),'password': (getObjectProperty(___arguments.context.getComponentDataStoreByUid('f6d6870f84ff49e3e53742fc6cf65719'), 'password')) })));
    await ( async function (pageName, pageData) { BackendlessUI.goToPage(pageName, pageData) })('progress', undefined);

  } catch (error) {
    await ( async function (message) { alert(message) })((getObjectProperty(error, 'message')));

  }

  },
  /* handler:onClick */
  /* handler:onDisabledStateAssignment */
  onDisabledStateAssignment(___arguments) {
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


  if ((getObjectProperty(((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719')), 'version')) && (getObjectProperty(((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719')), 'mountPath')) && (getObjectProperty(((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('f6d6870f84ff49e3e53742fc6cf65719')), 'licence'))) {
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
      ;await ( async function (pageName, pageData){ BackendlessUI.goToPage(pageName, pageData) })('serverStatus', null);

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/redis/components/9f186f89932cdfe880554e43f4f916a1/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  async onMounted(___arguments) {
      if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  }
  if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  }
  ___arguments.context.pageData['description'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/redis/describe', null));
  ___arguments.context.pageData['redisContainer'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/redis/config', null));
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

define('./pages/redis/components/4038f86f5b6cacb8ee37a8efac3527aa/bundle.js', [], () => ({
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
    console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/redis/config?restart=false', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'))));
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
    console.log(await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('put', '/manage/configuration/redis/config?restart=true', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1'))));
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

define('./pages/redis/components/7e1ac109ebbe4db399af721c8b472bd2/bundle.js', [], () => ({
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
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', false);
    } else {
      ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('f2cd77e13a5f3c9633a2a81f62910c09', true);
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
  async onEnter(___arguments) {
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
    pollingIntervalMS = (getObjectProperty((await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String(getObjectProperty((await ( async function () { return window.location })()), 'origin')) + String('/settings.json')))).setEncoding('utf8').send()), 'pollingIntervalMS'));
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
    await ( async function (message) { alert(message) })((getObjectProperty(error, 'message')));

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

define('./pages/userManagement/components/9f186f89932cdfe880554e43f4f916a1/bundle.js', [], () => ({
  /* content */
  /* handler:onMounted */
  async onMounted(___arguments) {
      if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  }
  if ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  }
  ___arguments.context.pageData['userManagement'] = true;
  ___arguments.context.pageData['managementContainer'] = (await (async function() {
  	const data = [

  	  {'userName':'admin',
  	   'password':'111'
  	  },
  	  {'userName':'other_user',
  	   'password':'111'
  	  },
  	  {'userName':'admin2',
  	   'password':'111'
  	  }


  	]
  	return data
  })());
  await new Promise(r => setTimeout(r, 1000 || 0));
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

define('./pages/userManagement/components/5a537424c7d5f0fa5c2169ba52cdc3b9/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, userName, user;

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  userName = (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['userName']);
  ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['btnDeleteDisabled'] = true;
  ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['btnDelete'] = 'Deleting...';
  try {
    await new Promise(r => setTimeout(r, 1500 || 0));
    ;(function (componentUid, listItems){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('9f186f89932cdfe880554e43f4f916a1', (await asyncListFilter(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1')), async (user) => {


     return ((user['userName']) != userName);
    })));
    ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['btnDelete'] = 'Delete';
    ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['btnDeleteDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, 'User deleted successfully', '#fff', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  } catch (error) {
    ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['btnDelete'] = 'Delete';
    ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['btnDeleteDisabled'] = false;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (error['message']), '#ffa500', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  }

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
  onClick(___arguments) {
      ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['modalTitle'] = 'Set password';
  ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['userName'] = (___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['userName']);
  ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['userNameDisabled'] = true;
  ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['createBtn'] = 'Set password';
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'visible';
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 1;

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/userManagement/components/ea1df98b3023353c2169a1abea133c3b/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
      ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['userName'] = '';
  ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['password'] = '';
  ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['confirmPassword'] = '';
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'hidden';
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 0;
  ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('42fc2f835fa3bf01cbaf06e27b5b5e3b', false);
  ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d50a1aa5921ba06c583457a897f2a8f7', false);
  ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('400fba0802880a93bb759cb7cbb9123f', false);
  ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('76b375976525da5784a688f366843054', false);

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/userManagement/components/8f4c69df692fc0b15ebc79a8b25418e6/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
      ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['modalTitle'] = 'Create User';
  ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['userNameDisabled'] = false;
  ((function (componentUid){ return ___arguments.context.getComponentDataStoreByUid(componentUid) })('b4398d5c0048d80587b9664d8f5eac11'))['createBtn'] = 'Create';
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'visible';
  ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 1;

  },
  /* handler:onClick */
  /* content */
}))

define('./pages/userManagement/components/363a0a2a92aa5bcb62b17eba85b1d7a8/bundle.js', [], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error, currentMessage, userData, isValid;

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  isValid = true;
  if (!(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['userName'])) {
    ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('42fc2f835fa3bf01cbaf06e27b5b5e3b', true);
    isValid = false;
  }
  if (!(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['password'])) {
    ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('d50a1aa5921ba06c583457a897f2a8f7', true);
    isValid = false;
  }
  if (!(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['confirmPassword'])) {
    ;(function (componentUid, visible){ (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('400fba0802880a93bb759cb7cbb9123f', true);
    isValid = false;
  }
  if (___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['confirmPassword']) {
    if ((___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['confirmPassword']) != (___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['password'])) {
      isValid = false;
    }
  }
  if (!isValid) {
    return false;
  }
  ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['createBtnDisabled'] = true;
  if (!(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['userNameDisabled'])) {
    ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['createBtn'] = 'Creating...';
  } else {
    ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['createBtn'] = 'Setting...';
  }
  userData = ({ 'userName': (___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['userName']),'password': (___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['password']) });
  try {
    await new Promise(r => setTimeout(r, 1000 || 0));
    if (!(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['userNameDisabled'])) {
      addItemToList(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems })('9f186f89932cdfe880554e43f4f916a1')), userData);
      currentMessage = 'User has been successfully created';
    } else {
      currentMessage = 'Password was set successfully';
    }
    ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['userName'] = '';
    ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['password'] = '';
    ___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['confirmPassword'] = '';
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'hidden';
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 0;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, currentMessage, '#fff', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  } catch (error) {
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['visibility'] = 'hidden';
    ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('1744db9f250d6ba85e3435fc3be3660e'))['opacity'] = 0;
    await BackendlessUI.Functions.Custom['fn_8f16ba2ef5c9c7a7b32d569b3762f6c4'](___arguments.context.pageData, (error['message']), '#ffa500', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('95980ee1806a02128292c7d76666d134')), ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('56af2c373986c15715d6b101723d8d4f')))

  } finally {
    if (!(___arguments.context.getComponentDataStoreByUid('b4398d5c0048d80587b9664d8f5eac11')['userNameDisabled'])) {
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
