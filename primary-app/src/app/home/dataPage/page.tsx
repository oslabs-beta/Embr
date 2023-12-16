'use client'
import Link from 'next/link';
import {
  Flex,
  Bold,
  Card,
  Title,
  Text,
  Metric,
  BarList,
  Button,
} from '@tremor/react';
``;

import React from 'react';
import { useState, useEffect } from 'react';


const AWS = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config();

// console.log({accessKeyId: process.env.AWS_ACCESS_KEY_ID})

AWS.config.update({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  region: process.env.region,
});
let invocations = 0
function GotData() {
  const [newData, setNewData] = useState();

  useEffect(() => {
    async function getData() {
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
        'fields @ingestionTime, @initDuration, @logStream, @message, @timestamp, @type, @billedDuration, @duration, @maxMemoryUsed, @memorySize | sort @timestamp desc | limit 1',
      logGroupName: '/aws/lambda/ChrisTestFunc',
    };

    try {
      const queryData =  await cloudwatchlogs.startQuery(params).promise();
      setTimeout(() => {cloudwatchlogs.getQueryResults({ queryId: queryData.queryId }).promise().then((data) => {setNewData(data.results)})}, 2000);
    } catch(error) {
      console.error('error fethcing data: ', error)
    }
  }

  
   
      // .then((promiseData) => {
      //   console.log('this is the queryID: ', promiseData.queryId);
      //   setTimeout(() => {
      //     cloudwatchlogs
      //       .getQueryResults({ queryId: promiseData.queryId })
      //       .promise()
      //       .then((data) => {
      //         setNewData(data.results);
      //       });
      //   }, 1000);
      // });
  // }
  if(!newData) {
      getData();
  }
}, [newData]);
  
  return (
    <div>

      <h1 style={{ color: 'black' }}>YEEAAHHH BOIII</h1>
      <div style={{ color: 'black'}}>
      {newData ? (
          <pre>{JSON.stringify(newData, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
        Hello
      </div>
    </div>
  )
}
export default GotData 
