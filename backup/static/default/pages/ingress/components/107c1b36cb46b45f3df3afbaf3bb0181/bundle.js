define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
      ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('2296afff5b9ced6febcee034fa4def5b'))['opacity'] = 0;
  ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('2296afff5b9ced6febcee034fa4def5b'))['visibility'] = 'hidden';
  await (async function() {
  	const inputCrtFile   = document.querySelector('#crtFile');
  	const inputKeyFile   = document.querySelector('#keyFile');

  	inputCrtFile.value = '';
  	inputKeyFile.value = '';

  	document.querySelector('#fileLabelCrt').innerHTML = '';
  	document.querySelector('#fileLabelKey').innerHTML = '';

  })();
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('fb3b28c8ecb422c9d789a3d5b17a989f', false);
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('bd6a0655e9f42f64a20ea5b9ef4e75db', false);
  (function (componentUid, visible) { (function(component){ component.display = !!(typeof visible === 'boolean' ? visible : !component.display ) })(___arguments.context.getComponentByUid(componentUid)) })('4b695664b7e53de7f71eeca54673416a', false);

  },
  /* handler:onClick */
  /* content */
}))
