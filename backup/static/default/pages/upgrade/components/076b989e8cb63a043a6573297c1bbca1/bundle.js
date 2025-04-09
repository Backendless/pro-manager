define([], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      console.log('kkkkkkkkkkkkkkkkkkk');
  console.log((await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})('http://localhost:5051')).setEncoding('utf8').send()));

  },
  /* handler:onClick */
  /* content */
}))
