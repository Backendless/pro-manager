define([], () => ({
  /* content */
  /* handler:onClick */
  async ['onClick'](___arguments) {
    function getObjectProperty(object, propPath) {
  if (typeof propPath !== 'string' || object[propPath] !== undefined) {
    return object[propPath]
  }

  const propsNamesList = propPath.split('.')

  let result = object

  for (let i = 0; i < propsNamesList.length; i++) {
    if (!result || result[propsNamesList[i]] === undefined) {
      return
    }

    result = result[propsNamesList[i]]
  }

  return result
}


  ___arguments.context.pageData['clearInputValue'] = true;
  ___arguments.context.pageData['inputValue'] = '';
  await (async function(inputValue) {
  	const output      = document.querySelector('.ServerLogs__ContentLogs');
  	if (inputValue.length > 2) {
  	  const regex       = new RegExp(inputValue, "g");
  	  const replacement = `<span class="ServerLogs__marker">${inputValue}</span>`;
  	  const text        =  logOriginalText;
  	  output.innerHTML  = text.replace(regex, replacement);
  	} else {
  	  output.innerHTML = logOriginalText;
  	}
  })((getObjectProperty(___arguments.context.pageData, 'inputValue')));

  },
  /* handler:onClick */
  /* content */
}))
