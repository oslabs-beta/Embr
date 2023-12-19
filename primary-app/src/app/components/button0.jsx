
const AWS = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config();

// console.log({accessKeyId: process.env.AWS_ACCESS_KEY_ID})

AWS.config.update({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  region: process.env.region,
});

async function GetData() {
  console.log('\n\n********>> inside getData <<********\n');
  const cloudwatchlogs = new AWS.CloudWatchLogs();
  const now = new Date();
  const oneWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // TODO: currently 24 hours ago, * 7 if want to change to week. unit is currently in seconds

  const params = {
    // when we getLogs, i am wanting to grab the Timestamp, RequestId, and DurationInMS
    // https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions/titans-lambda-log-test?tab=monitoring
    startTime: oneWeek.getTime(),
    endTime: now.getTime(),
    queryString:
      'fields @ingestionTime, @initDuration, @logStream, @message, @timestamp, @type, @billedDuration, @duration, @maxMemoryUsed, @memorySize | filter @initDuration | sort @timestamp desc | limit 2000',
    logGroupName: '/aws/lambda/ChrisTestFunc',
  };
  console.log(params);
  await cloudwatchlogs
    .startQuery(params)
    .promise()
    .then((promiseData) => {
      console.log(promiseData.queryId);
      setTimeout(() => {
        cloudwatchlogs
          .getQueryResults({ queryId: promiseData.queryId })
          .promise()
          .then((data) => {
            console.log(data.results);
          });
      }, 1000);
    });
}

export default GetData;