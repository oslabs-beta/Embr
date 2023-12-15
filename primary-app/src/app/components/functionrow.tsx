'use client';
const AWS = require('aws-sdk');
const dotenv = require('dotenv');

import React from 'react';
import Link from 'next/link';
import Badges from './badges';

//Do not confuse this for the Tremor component (not being imported) also called 'Button'. This import is our button component.
import Button from './Button';

import { parseData, getInitInfo } from './calculations-updated';
import {
  Flex,
  Bold,
  Card,
  Title,
  Text,
  Metric,
  BarList,
  Badge,
} from '@tremor/react';
import { allowedNodeEnvironmentFlags } from 'process';
``;

dotenv.config();
AWS.config.update({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  region: process.env.region,
});

//get logs from AWS using a query string and preset params.
//(maybe refactor to include a params object from outside as well as start and end time)
async function getData() {
  const cloudwatchlogs = new AWS.CloudWatchLogs();
  const now = new Date();
  const oneWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // TODO: currently 24 hours ago, * 7 if want to change to week. unit is currently in seconds
  let allLogs;
  const params = {
    // when we getLogs, i am wanting to grab the Timestamp, RequestId, and DurationInMS
    // https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions/titans-lambda-log-test?tab=monitoring
    startTime: oneWeek.getTime(),
    endTime: now.getTime(),
    queryString:
      'fields @ingestionTime, @initDuration, @logStream, @message, @timestamp, @type, @billedDuration, @duration, @maxMemoryUsed, @memorySize | sort @timestamp desc | limit 200',
    logGroupName: '/aws/lambda/ChrisTestFunc',
  };
  // console.log(params);
  await cloudwatchlogs
    .startQuery(params)
    .promise()
    .then((promiseData) => {
      // console.log(promiseData.queryId);
        cloudwatchlogs
          .getQueryResults({ queryId: promiseData.queryId })
          .promise()
          .then((data) => {
            // console.log(data.results);
            //data is promise object with results in it (arrays)
            allLogs = data.results;
            console.log('getData internal allLogs: ', allLogs);
          });
    });
    console.log('getData func allLogs:',allLogs);
    return allLogs;
}
//figure out by Saturday ~ 

//warm function for a specific Lambda function - triggered on button click
const warmFunction:Function = () => {
  fetch(
    'https://k2j68xsjnc.execute-api.us-east-2.amazonaws.com/default/thumbnail-creator',
    {
      method: 'GET',
      mode: 'cors',
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

let initInfo = [];

//loadAll is there to allow incorporating more modular calculations as new metrics are calculated for display
const loadAll = async function() {
  const data = await getData();
  console.log('data:',data);
  const parsedData = parseData( data );
  initInfo = getInitInfo(parsedData);
  //calculate concurrent calls();
  // console.log(initInfo);
}

loadAll();

const functionrow = () => {
  const badges = [];
  const averageColdCalls = 40;
  const averageInitDuration = 200;
  return (
    <Flex flexDirection='col'>
      <div className='flex flex-row items-center'>
        <Card
          style={{
            minWidth: '75rem',
            borderRadius: '15px',
            border: '2px solid grey',
          }}
          decorationColor='gray'
        >
          <Flex>
            <Card className='max-w-xs'>
              <Title>Lambda Function</Title>
            </Card>
            <Card className='max-w-sm'>
              {/* <Badges initInfo={initInfo}/> */}
            </Card>
            <Flex flexDirection='col' className='w-96'>
              <Card
                decoration='left'
                decorationColor='blue'
                className='max-w-xs'
              >
                <Metric>{averageColdCalls}</Metric>
                <Text>cold calls /week</Text>
              </Card>
              <Card
                decoration='left'
                decorationColor='blue'
                className='max-w-xs'
              >
                <Metric>{initInfo}</Metric>
                <Text>average cold start</Text>
              </Card>
            </Flex>
            <Button buttonName={'Warm'} onClickFunc={warmFunction} />
            <Button buttonName={'getData'} onClickFunc={getData} />
          </Flex>
        </Card>
      </div>
    </Flex>
  );
};

export default functionrow;
