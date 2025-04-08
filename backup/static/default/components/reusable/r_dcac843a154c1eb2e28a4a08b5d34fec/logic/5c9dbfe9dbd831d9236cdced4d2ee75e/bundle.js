define([], () => ({
  /* content */
  /* handler:onContentAssignment */
  async onContentAssignment(___arguments) {
    var date, month, day, seconds, minutes, hours, outputTimeItem, timeItem;

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

/**
 * Describe this function...
 */
async function formatTimeItem(timeItem) {
  if (timeItem < 10) {
    outputTimeItem = String(0) + String(timeItem);
  } else {
    outputTimeItem = timeItem;
  }
  return outputTimeItem
}


  date = (new Date((getObjectProperty(___arguments.context.getComponentDataStoreByUid('17ba156b5b49eae93175d437c9e8c1c2'), 'creationTimestamp'))));
  day = await formatTimeItem((new Date(date).getDate()));
  month = await formatTimeItem((new Date(date).getMonth() + 1));
  hours = await formatTimeItem((new Date(date).getHours()));
  minutes = await formatTimeItem((new Date(date).getMinutes()));
  seconds = await formatTimeItem((new Date(date).getSeconds()));

  return ([day,'/',month,'/',(new Date(date).getFullYear()),' ','v. ',(getObjectProperty(___arguments.context.getComponentDataStoreByUid('17ba156b5b49eae93175d437c9e8c1c2'), 'version'))].join(''))

  },
  /* handler:onContentAssignment */
  /* content */
}))
