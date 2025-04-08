define([], () => ({
  /* content */
  /* handler:onContentAssignment */
  onContentAssignment(___arguments) {
      console.log(___arguments.context.pageData['serviceName']);

  return (___arguments.context.pageData['serviceName'])

  },
  /* handler:onContentAssignment */
  /* content */
}))
