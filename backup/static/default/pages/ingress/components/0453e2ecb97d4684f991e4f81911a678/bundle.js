define([], () => ({
  /* content */
  /* handler:onClick */
  ['onClick'](___arguments) {
    function removeItemInList(l, i, c) {   const index = c ? l.findIndex(el => el[c] === i[c]) : l.indexOf(i);  if (index >= 0) { l.splice(index, 1); }  return l;}

function addItemToList(l, v) { Array.prototype.push.apply(l, Array.isArray(v) ? v : [v]);return l;}


  if (!(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('0453e2ecb97d4684f991e4f81911a678')).includes('ssl__TabsItem--active'))) {
    removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('e2db21f28ca3d6cf6e7a501a310e9167')), 'ssl__TabsItem--active', '');
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('0453e2ecb97d4684f991e4f81911a678')), 'ssl__TabsItem--active');
    addItemToList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('958240095c22f582b77fbe4d1b0f632a')), 'ingress__TabInactive');
    removeItemInList(((function (componentUid) { return ___arguments.context.getComponentClassesByUid(componentUid) })('4d3482dee1d5af9b3201b095cc62c0d3')), 'ingress__TabInactive', '');
  }

  },
  /* handler:onClick */
  /* content */
}))
