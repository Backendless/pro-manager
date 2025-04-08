define([], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  await BackendlessUI.Functions.Custom['fn_d1c73eef0a362f8719d1f5ffd944aded']((___arguments.context.pageData['contentItemClasses']))
  addItemToList(((function (componentUid){ return ___arguments.context.getComponentClassesByUid(componentUid) })('fe7d5401f3d449e38fa12ab56a645587')), 'aside__TabContentItem--active');

  },
  /* handler:onClick */
  /* content */
}))
