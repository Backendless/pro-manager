define([], () => ({
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
