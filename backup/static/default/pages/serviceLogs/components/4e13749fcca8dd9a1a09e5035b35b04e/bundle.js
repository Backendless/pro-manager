define([], () => ({
  /* content */
  /* handler:onChange */
  async ['onChange'](___arguments) {
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


  ___arguments.context.pageData['clearInputValue'] = false;
  ___arguments.context.pageData['inputValue'] = ___arguments.value;
  await (async function(inputValue) {
  	const output = document.querySelector('.ServerLogs__ContentLogs');

  	if (inputValue.length > 2) {
  	  const regex       = new RegExp(inputValue, 'gi');

  	  let text        =  logOriginalText;
  	  text = text.replace(/(<mark class='ServerLogs__marker'>|<\/mark>)/gim, '');

  	  const newText = text.replace(regex, '<mark class="ServerLogs__marker">$&</mark>');
  	  output.innerHTML = newText;
  	} else {
  	  output.innerHTML = logOriginalText;
  	}
  })((getObjectProperty(___arguments.context.pageData, 'inputValue')));

  },
  /* handler:onChange */
  /* handler:onValueAssignment */
  ['onValueAssignment'](___arguments) {
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


  if (getObjectProperty(___arguments.context.pageData, 'clearInputValue')) {
    ___arguments.context.pageData['inputValue'] = '';
  }

  return (getObjectProperty(___arguments.context.pageData, 'inputValue'))

  },
  /* handler:onValueAssignment */
  /* content */
}))
