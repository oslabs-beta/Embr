'use client';
const AWS = require('aws-sdk');
const dotenv = require('dotenv');

import React from 'react';
import Link from 'next/link';
import { Flex, Bold, Card, Title, Text, Metric, BarList, Button } from '@tremor/react';
``;

dotenv.config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// const currentData = [];

let lastID = ['856b4cd9-8a7a-468e-8512-79a28d83e5d5'];

async function getData() {
  //  setTimeout(() => {getData(req,res,next)}, 2000)
  // const [idString, setIdString] = useState()
  console.log('inside getData');
  const cloudwatchlogs = new AWS.CloudWatchLogs();
  const now = new Date();
  const oneWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // TODO: currently 24 hours ago, * 7 if want to change to week. unit is currently in seconds

  // setTimeout(async() => {
  //   await getData();
  //   console.log('inside the setTIMEOUT');
  // }, 5000);

  const params = {
    // when we getLogs, i am wanting to grab the Timestamp, RequestId, and DurationInMS
    // https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions/titans-lambda-log-test?tab=monitoring
    startTime: oneWeek.getTime(),
    endTime: now.getTime(),
    queryString:
    'fields @ingestionTime, @initDuration, @logStream, @message, @timestamp, @type, @billedDuration, @duration, @maxMemoryUsed, @memorySize | sort @timestamp desc | limit 10',
    logGroupName: '/aws/lambda/titans-lambda-log-test',
    // limit: 50,
  };

  const data = await cloudwatchlogs.startQuery(params).promise();
  const { queryId } = data;
  lastID.push(queryId);
  console.log(lastID);

  let newId = lastID[lastID.length - 2];
  console.log({ queryId: queryId });

  const results = await cloudwatchlogs
    .getQueryResults({ queryId: newId })
    .promise();
    let sendBack = results.json()
  console.log(sendBack.json());
  // currentData.push(results.results);
  lastID.shift()
  //  setTimeout(getData, 2000)
}


const functionrow = () => {
  return (
    <Flex flexDirection="col">
        <Card>
          <Flex>
            <Card style={{ minWidth: '350px' }}>
              <Title>Inovcations</Title>
            </Card>
            {/*<Card>
          <Flex flexDirection="row">
            <Badge color={'blue'}>.</Badge>
            <Badge color={'orange'}>.</Badge>
            <Badge color={'orange'}>.</Badge>
            <Badge color={'orange'}>.</Badge>
            <Badge color={'orange'}>.</Badge>
            <Badge color={'orange'}>.</Badge>
            <Badge color={'orange'}>.</Badge>
          </Flex>
        </Card>*/}
            <Card style={{ minWidth: '260px' }} className="max-w-lg">
              <Flex className="mt-4">
                <Text>
                  <Bold>Avg. duration</Bold>
                </Text>
              </Flex>
              {/* <BarList data={currentData} className="mt-1" /> */}
            </Card>
            <Flex flexDirection="col">
              <Card decoration="left" decorationColor="gray">
                <Metric>20</Metric>
                <Text>cold calls /week</Text>
              </Card>
              <Card decoration="left" decorationColor="gray">
                <Metric>120ms</Metric>
                <Text>init time</Text>
              </Card>
            </Flex> 
              <Button onClick={getData}>get data</Button>
          </Flex>
        </Card>
    </Flex>
   
  );
};

export default functionrow;
