define([], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      if ((___arguments.context.pageData['page']) != 'mySql') {
    ;await ( async function (pageName, pageData){ BackendlessUI.goToPage(pageName, pageData) })('mySql', ({ 'page': 'mySql' }));
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList;


  classList = ['aside__TabContentItem'];
  if ((___arguments.context.pageData['page']) == 'mySql') {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))
