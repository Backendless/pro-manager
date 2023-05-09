define([], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      ;await ( async function (url, isExternal, params){ const queryString = BackendlessUI.QueryString.stringify(params); const targetUrl = `${url}${queryString ? '?' + queryString : ''}`; isExternal ? window.open(targetUrl, '_blank') : window.location = targetUrl; })('https://backendless.com', true, null);

  },
  /* handler:onClick */
  /* content */
}))
