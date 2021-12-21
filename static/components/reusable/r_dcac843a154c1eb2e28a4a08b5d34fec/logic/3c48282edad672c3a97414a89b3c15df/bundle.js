define([], () => ({
  /* content */
  /* handler:onMounted */
  async onMounted(___arguments) {
    var error;


  try {
    if (!(___arguments.context.appData['statusData'])) {
      ___arguments.context.appData['statusData'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/status', null));
      await new Promise(r => setTimeout(r, 100 || 0));
      ___arguments.context.appData['height'] = (String(await ( async function (typeSize, component){ return component && component.el ? component.el[`${typeSize}`] : null })('clientHeight', ((function (componentUid){ return ___arguments.context.getComponentByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df')))) + String('px'));
      ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = (___arguments.context.appData['height']);
    } else {
      ((function (componentUid){ return ___arguments.context.getComponentStyleByUid(componentUid) })('3c48282edad672c3a97414a89b3c15df'))['maxHeight'] = (___arguments.context.appData['height']);
    }

  } catch (error) {
    ;await ( async function (message){ alert(message) })((error['message']));

  }

  },
  /* handler:onMounted */
  /* content */
}))
