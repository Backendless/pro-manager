define([], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      if ((___arguments.context.pageData['pageSettings']) != 'kubernetes') {
    ;await ( async function (pageName, pageData){ BackendlessUI.goToPage(pageName, pageData) })('kubernetes', ({ 'pageSettings': 'kubernetes' }));
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
