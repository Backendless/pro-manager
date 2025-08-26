define([], () => ({
  /* content */
  /* handler:onMounted */
  async ['onMounted'](___arguments) {
      if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'none';
  }
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'flex';
  }
  await new Promise(r => setTimeout(r, 1000 || 0));
  ___arguments.context.pageData['description'] = (await (async function() {
  	const description = [

  	  {
  	    'name': 'enabled',
  	    'required': true
  	  },

  	  {
  	    'name': 'console domain',
  	    'required': true
  	  },

  	  {
  	    'name': 'api domain',
  	    'required': true
  	  },

  	  {
  	    'name': 'rt domain',
  	    'required': true
  	  }

  	]

  	return description
  })());
  ___arguments.context.pageData['sslNginxContainer'] = (await (async function() {

  	const data = [
  	  {
  	    'enabled': true,
  	    'console domain': 'console.my-company.com',
  	    'api domain': 'api.my-company.com',
  	    'rt domain': 'rt.my-company.com'
  	  }

  	  ]

  	  return data
  })());
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('4f334f9dc1010f33ff9a725c1781b1c7'))['display'] = 'none';
  }
  if ((function (componentUid) { return ___arguments.context.getComponentByUid(componentUid) })('924202b19f0ef683e3940a99b258d565')) {
    ((function (componentUid) { return ___arguments.context.getComponentStyleByUid(componentUid) })('924202b19f0ef683e3940a99b258d565'))['display'] = 'flex';
  }

  },
  /* handler:onMounted */
  /* content */
}))
