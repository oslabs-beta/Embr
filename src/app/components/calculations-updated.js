const { default: ourData } = require("./data");
import ourData from './data'
import AWSdata from './data'


const parseData = function (data) {
  const newData = [];
  for (let i = 0; i < data.length; i++) {
    const newEntry = {};
    for (let j = 0; j < data[i].length; j++) {
      newEntry[data[i][j].field] = data[i][j].value;
    }
    newData.push(newEntry);
  }
  return newData;
};

const readableMockData = parseData(AWSdata);

const getInitInfo = function (data) {
  const results = [];
  for (let i = 0; i < data.length; i++) {
    const newEntry = {};
    if (data[i]['@initDuration']) {
      newEntry['timestamp'] = data[i]['@timestamp'];
      newEntry['initDuration'] = data[i]['@initDuration'];
      newEntry['warmInvocationsDuration'] = [];
      results.push(newEntry);
    } else if (data[i]['@duration'] && results.length !== 0)
      results[results.length - 1]['warmInvocationsDuration'].push(data[i]['@duration']);
  }
  return results;
};

const initInfo = getInitInfo(readableMockData);

// ******************************************************************************************


const endStartTraffic = (data) => {
  let start = [];
  let end = [];
  for (let i = data.length - 1; i >= 0; i--) {
    if (i === data.length - 1) {
      start.push(data[i].timestamp);
    } else if (data[i].day !== data[i + 1].day) {
      start.push(data[i].timestamp);
    }

    if (i === 0) {
      end.push(data[i].timestamp);
    } else if (data[i].day !== data[i - 1].day) {
      end.push(data[i].timestamp);
    }
  }
  return [start, end];
};

const [startTimestamps, endTimestamps] = endStartTraffic(ourData);
//
const averageTimestamp = (timestampsArray, prewarm) => {
  let results = [];
  let averageTime = '';
  let hoursArray = [];
  let minutesArray = [];
  let prewarmInput = 10 || prewarm;
  let prewarmTime = '';
  for (let i = 0; i < timestampsArray.length; i++) {
    let entry = timestampsArray[i].slice(timestampsArray[i].indexOf(' ') + 1, timestampsArray[i].indexOf('.') - 3);
    const hours = Number(entry.slice(0, entry.indexOf(':')));
    const minutes = Number(entry.slice(entry.indexOf(':') + 1));
    hoursArray.push(hours);
    minutesArray.push(minutes);
  }
  const hoursSum = hoursArray.reduce((a, b) => a + b, 0);
  const minutesSum = minutesArray.reduce((a, b) => a + b, 0);
  const totalMin = (hoursSum / hoursArray.length) * 60 + minutesSum / minutesArray.length;
  const preTotal = totalMin - prewarmInput;
  averageTime = Math.floor(totalMin / 60)
    .toString()
    .concat(':')
    .concat(Math.ceil(totalMin % 60).toString());
  prewarmTime = Math.floor(preTotal / 60)
    .toString()
    .concat(':')
    .concat(Math.ceil(preTotal % 60).toString());
  results.push(averageTime, prewarmTime);
  return results;
};

const averageStart = averageTimestamp(startTimestamps);
const averageEnd = averageTimestamp(endTimestamps);

module.exports = { parseData, getInitInfo };
