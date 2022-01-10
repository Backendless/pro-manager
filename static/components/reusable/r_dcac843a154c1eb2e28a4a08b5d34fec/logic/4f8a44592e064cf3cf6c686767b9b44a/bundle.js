define([], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      if ((___arguments.context.pageData['page']) != 'domainsGeneral') {
    ;await ( async function (pageName, pageData){ BackendlessUI.goToPage(pageName, pageData) })('domainsGeneral', ({ 'page': 'domainsGeneral' }));
  }

  },
  /* handler:onClick */
  /* handler:onClassListAssignment */
  onClassListAssignment(___arguments) {
    var classList;


  classList = ['aside__TabContentItem'];
  if ((___arguments.context.pageData['page']) == 'domainsGeneral') {
    classList = ['aside__TabContentItem', 'aside__TabContentItem--active'];
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))
