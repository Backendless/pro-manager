define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
      ___arguments.context.pageData['downloadBtnDisabled'] = true;
  ___arguments.context.pageData['downloadBtnLabel'] = 'Downloading...';
  await (async function() {
  	var _global="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:this;function bom(e,t){return(void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type))?new Blob(["\uFEFF",e],{type:e.type}):e}function download(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){saveAs(n.response,t,o)},n.onerror=function(){console.error("could not download file")},n.send()}function corsEnabled(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(o){}return t.status>=200&&t.status<=299}function click(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(o)}}var isMacOSWebView=_global.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),saveAs=_global.saveAs||("object"!=typeof window||window!==_global?function e(){}:"download"in HTMLAnchorElement.prototype&&!isMacOSWebView?function e(t,o,n){var a=_global.URL||_global.webkitURL,l=document.createElementNS("http://www.w3.org/1999/xhtml","a");o=o||t.name||"download",l.download=o,l.rel="noopener","string"==typeof t?(l.href=t,l.origin!==location.origin?corsEnabled(l.href)?download(t,o,n):click(l,l.target="_blank"):click(l)):(l.href=a.createObjectURL(t),setTimeout(function(){a.revokeObjectURL(l.href)},4e4),setTimeout(function(){click(l)},0))}:"msSaveOrOpenBlob"in navigator?function e(t,o,n){if(o=o||t.name||"download","string"==typeof t){if(corsEnabled(t))download(t,o,n);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout(function(){click(a)})}}else navigator.msSaveOrOpenBlob(bom(t,n),o)}:function e(t,o,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return download(t,o,n);var l="application/octet-stream"===t.type,r=/constructor/i.test(_global.HTMLElement)||_global.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||l&&r||isMacOSWebView)&&"undefined"!=typeof FileReader){var i=new FileReader;i.onloadend=function(){var e=i.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},i.readAsDataURL(t)}else{var s=_global.URL||_global.webkitURL,d=s.createObjectURL(t);a?a.location=d:location.href=d,a=null,setTimeout(function(){s.revokeObjectURL(d)},4e4)}});_global.saveAs=saveAs.saveAs=saveAs,"undefined"!=typeof module&&(module.exports=saveAs);

  	let textForSave = logFileText;
  	let blob = new Blob([textForSave], { type: "text/plain;charset=utf-8" });
  	saveAs(blob, "log-file.txt");
  })();
  ___arguments.context.pageData['downloadBtnLabel'] = 'Download';
  ___arguments.context.pageData['downloadBtnDisabled'] = false;

  },
  /* handler:onClick */
  /* content */
}))
