define([], () => ({
  /* content */
  /* handler:onLeave */
  onLeave(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onLeave */
  /* handler:onEnter */
  onEnter(___arguments) {
      localStorage.removeItem('originLoad');

  },
  /* handler:onEnter */
  /* content */
}))
