define([], () => ({
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
