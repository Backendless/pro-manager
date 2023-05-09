define([], () => ({
  /* content */
  /* handler:onBeforeMount */
  async onBeforeMount(___arguments) {
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
      })(((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))))) + String('px'));
    }
    if (getObjectProperty(___arguments.context.pageData, 'pageServerStatus')) {
      ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = (getObjectProperty(___arguments.context.appData, 'height'));
    } else {
      ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = 0;
      addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('1fed8d3527f135219fb66d9de15adb04')), 'aside__TabHeader--rotated');
    }

  } catch (error) {
    await ( async function (message) { alert(message) })((getObjectProperty(error, 'message')));

  }

  },
  /* handler:onBeforeMount */
  /* content */
}))
