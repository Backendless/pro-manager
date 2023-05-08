define([], () => ({
  /* content */
  /* handler:onClassListAssignment */
  async ['onClassListAssignment'](___arguments) {
    var classList, currentStatus, currentService, service;

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

async function asyncListFilter(sourceList, callback) {
  const list = await Promise.all(sourceList.map(async source => ({
    source,
    value: await callback(source),
  })));

  const resultList = list.filter(item => item.value)

  return resultList.map(item => item.source)
}


  classList = ['ServerLogs__ControlsIcon'];
  if (getObjectProperty(___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6'), 'statusData')) {
    currentService = (await asyncListFilter((getObjectProperty(___arguments.context.getComponentDataStoreByUid('cc6c067e2b46da2502deb333245ebfc6'), 'statusData')), async (service) => {


     return ((getObjectProperty(service, 'name')) == (getObjectProperty(___arguments.context.pageData, 'serviceName')));
    }));
    currentStatus = (getObjectProperty((currentService[0]), 'status'));
    if (currentStatus == 'running') {
      classList = ['ServerLogs__ControlsIcon', 'ServerLogs__ControlsIconRunning'];
    }
    if (currentStatus == 'stopped') {
      classList = ['ServerLogs__ControlsIcon', 'ServerLogs__ControlsIconStopped'];
    }
    if (currentStatus == 'notInstalled') {
      classList = ['ServerLogs__ControlsIcon', 'ServerLogs__ControlsIconNotinstalled'];
    }
    if (currentStatus == 'complete') {
      classList = ['ServerLogs__ControlsIcon', 'ServerLogs__ControlsIconComplete'];
    }
    if (currentStatus == 'changing') {
      classList = ['ServerLogs__ControlsIcon', 'ServerLogs__ControlsIconChanging'];
    }
  }

  return classList

  },
  /* handler:onClassListAssignment */
  /* content */
}))
