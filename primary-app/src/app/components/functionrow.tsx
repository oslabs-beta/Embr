'use client';
const AWS = require('aws-sdk');
const dotenv = require('dotenv');

import React from 'react';
import Link from 'next/link';
import Badges from './badges';
import { initInfo } from '../retrievedData2';
import {
  Flex,
  Bold,
  Card,
  Title,
  Text,
  Metric,
  BarList,
  Button,
  Badge,
} from '@tremor/react';
``;

dotenv.config();
const data = [];

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
      'fields @ingestionTime, @initDuration, @logStream, @message, @timestamp, @type, @billedDuration, @duration, @maxMemoryUsed, @memorySize | sort @timestamp desc | limit 200',
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
            data = data;
          });
      }, 1000);
    });
}


const warmFunction = () => {
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
              <Badges />
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
                <Metric>{averageInitDuration}</Metric>
                <Text>average cold start</Text>
              </Card>
            </Flex>
            <div
              onClick={() => warmFunction()}
              className='cursor-pointer text-center align-middle font-mono bg-orange-800 w-60 p-2 rounded hover:bg-orange-500'
            >
              Warm
            </div>
            <div
              onClick={ () => { GetData(); console.log('this is data: ', data) } }
              className='cursor-pointer text-center align-middle font-mono bg-orange-800 w-60 p-2 rounded hover:bg-orange-500'
            >
              getData
            </div>
          </Flex>
        </Card>
      </div>
    </Flex>
  );
};

export default functionrow;
