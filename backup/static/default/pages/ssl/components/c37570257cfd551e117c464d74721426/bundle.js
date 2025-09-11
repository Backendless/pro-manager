define([], () => ({
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
