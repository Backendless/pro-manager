#!/usr/bin/env node

'use strict';

var fs        = require('fs'),
    cliArgs   = process.argv,
    action    = cliArgs[2] || 'start',
    forever   = require('forever'),
    actionMap = {
      'start': start,
      'stop' : stop,
      'list' : list
    };

var PATH_TO_SERVER = './src';
var UID = 'BackendlessProManager';
var PROCESS_LIST;

forever.list(false, function(context, list) {
  PROCESS_LIST = list;

  try {
    var method = actionMap[action];

    if (method) {
      method.call();
    } else {
      forever.out.error('Unknown command [' + action + ']. Please use one of the following: "start", "stop", "list"');
    }
  } catch (e) {
    forever.out.error('Exception throw in attempt to [' + action + '] with message: ' + e);
  }
});

function start() {
  var logsDir = __dirname + '/logs/';

  var options = {
        uid     : UID,
        max     : 5,
        silent  : false,
        watch   : false,
        killTree: true,
        logFile : logsDir + UID + '.log',
        env: {
          DEBUG: 'SAT*'
        }
      },
      proc    = getProcess(PROCESS_LIST);

  if (proc && proc.running) {
    forever.out.info(UID + ' is already started');
    process.exit(0);
  } else if (proc) {
    stop();
  }

  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
  }

  forever.startDaemon(PATH_TO_SERVER, options);
  forever.out.info('Started');
}

function stop() {
  var proc = getProcess(PROCESS_LIST);

  if (!proc) {
    forever.out.info('Nothing to stop');
    process.exit(0);
  }

  if (proc && proc.running) {
    forever.stop(UID, true);
  } else {
    forever.kill(proc.foreverPid, true);
  }
  forever.out.info('Stopped');
}

function list() {
  forever.list(true, function(context, list) {
    console.log(list);
  });
}

function getProcess(processList) {
  return processList && processList.find(proc => proc.uid === UID);
}
