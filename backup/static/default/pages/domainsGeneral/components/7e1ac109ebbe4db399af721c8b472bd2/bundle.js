define([], () => ({
  /* content */
  /* handler:onChange */
  ['onChange'](___arguments) {
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


  if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e'), 'required')) {
    if (___arguments.value) {
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgVisible'] = false;
    } else {
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgContent'] = 'This field is required';
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgVisible'] = true;
      return ;
    }
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e'), 'name')).toLowerCase() == 'port') {
    if ((new RegExp('^\\d+$', '')).test(___arguments.value)) {
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['isValid'] = true;
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgVisible'] = false;
    } else {
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgContent'] = 'This field must contain only numbers';
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['isValid'] = false;
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgVisible'] = true;
    }
  }
  if ((getObjectProperty(___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e'), 'name')).toLowerCase() == 'protocol') {
    if ((new RegExp('https$|http$', '')).test(___arguments.value)) {
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['isValid'] = true;
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgVisible'] = false;
    } else {
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgContent'] = 'This field must contain "http" or "https';
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['isValid'] = false;
      ___arguments.context.getComponentDataStoreByUid('ef925676496420d56f57345d0dfd424e')['validationMsgVisible'] = true;
    }
  }

  },
  /* handler:onChange */
  /* content */
}))
