const mockData = [
  [
    { field: '@ingestionTime', value: '2023-12-05 22:14:52.883' },
    { field: '@initDuration', value: '103.01' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value: 'END RequestId: 76269889-7d50-4d6d-a3f1-9b4f5322f47c\n',
    },
    { field: '@timestamp', value: '2023-12-05 22:14:43.877' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAALF88qQAGVvoIwAAAAkIgASiW97DgwzEwpfew4MMxOARAkgRIxgxQ+AYYACABEAIYAQ==',
    },
  ],
]
//Improves format of returned data from AWS for further processing
const parseData = function (data) {
  const newData = [];
  for (let i = 0; i < data.length; i++) {
    // replace end-statement with data.length
    const newEntry = {};
    for (let j = 0; j < data[i].length; j++) {
      newEntry[data[i][j].field] = data[i][j].value;
    }
    newData.push(newEntry);
  }
  return newData;
};

const readableMockData = parseData(mockData);

const getInitInfo = function (data) {
  const results = [];
  for (let i = 0; i < data.length; i++) {
    const newEntry = {}
    if (data[i]['@initDuration']){
      newEntry['timestamp'] = data[i]['@timestamp'];
      newEntry['initDuration'] = data[i]['@initDuration'];
      // newEntry['message'] = data[i]['@message'];
      newEntry['warmInvocationsDuration'] = [];
      results.push(newEntry);
    }
      // now for the rest of the loops, access the most recent newEntry[newEntry.length - 1]['timestampsofWarmIncovationsWithin].push(data[i]['@duration])
    else if (data[i]['@duration'] && results.length !== 0) results[results.length - 1]['warmInvocationsDuration'].push(data[i]['@duration']);
  }
  return results;
};

module.exports = { parseData, getInitInfo };
// *************** Task 1: Getting the name of the function ************************************
// the name of our s3 bucket is called original-dinner-time-images, the name of our function is called titans-lambda-log-function. this is obtainable through the variable params.logGroupName on server.js and is not information we query for on AWS CloudWatch
//
// *************** Task 2: Average duration of warm time / 24 hour scale ***********************

// *************** Task 3: Inital duration (number - milliseconds) *****************************

// *************** Task 4: Cold calls/ week (number) *******************************************

// *************** Task 5: Average Initialization Duration (number - milliseconds ) ************

// ********************************** - STRETCH - **********************************************

// ********** Task 5: Average DurRun **********

// ********** Task 6: Average DurCold **********

// ********** Task 7: Average DurRun **********
