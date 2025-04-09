define([], () => ({
  /* content */
  /* handler:onMounted */
  async ['onMounted'](___arguments) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  ___arguments.context.pageData['description'] = (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/mysql/describe', null, null));
  (function (componentUid, listItems) { ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('5e3f611a895a0c48231e90eda783d117', (await BackendlessUI.Functions.Custom['fn_696a14dd8d2f85be7023c2c4441a65a5']('get', '/manage/configuration/mysql/shard', null, null)));
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'flex';

  },
  /* handler:onMounted */
  /* content */
}))
