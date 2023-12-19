const AWS = require('aws-sdk');
const dotenv = require('dotenv');

import React from 'react';
import Link from 'next/link';
import Badges from './badges';

//Do not confuse this for the Tremor component (not being imported) also called 'Button'. This import is our button component.
// import WarmButton from './WarmButton';

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
  Button
} from '@tremor/react';
import { allowedNodeEnvironmentFlags } from 'process';
``;
import GetData from '../home/dataPage/page'

//AWS Cloudwatch start and get query imports
import { CloudWatchLogsClient, StartQueryCommand, GetQueryResultsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import

//___AWS_Start query: creates the query on AWS and returns response of queryId
const startQueryFunc = async function() {
    const client = new CloudWatchLogsClient({region: 'us-east-2'});
    const oneWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // TODO: currently 24 hours ago, * 7 if want to change to week. unit is currently in seconds
    const now = new Date();
    
    const input = { // StartQueryRequest
      logGroupName: '/aws/lambda/ChrisTestFunc',
  startTime: oneWeek.getTime(),
    endTime: now.getTime(),
    queryString:
    'fields @ingestionTime, @initDuration, @logStream, @message, @timestamp, @type, @billedDuration, @duration, @maxMemoryUsed, @memorySize | sort @timestamp desc',
  limit: 1,
  };
  const command = new StartQueryCommand(input);
  const response = await client.send(command);
  return response;
};

//__AWS Get query: returns logs from a AWS query via a query ID
const getQueryFunc = async function (queryId) {
  const client = new CloudWatchLogsClient(dotenv.config);
  const input = { // GetQueryResultsRequest
    queryId: queryId};
  const command = new GetQueryResultsCommand(input);
  const response = await client.send(command);
  return response; //response object has many properties, the results property is the array of logs we are interested in.
  // console.log('response:',response);
}

//calls startQuery and getQuery sequentially and does some data manipulation.
const getLogs = async function() {
  const QueryStartResults = await startQueryFunc();
  const queryId = QueryStartResults.queryId;
  // console.log('V3startQuery:',QueryStartResults);
  // console.log('QueryId:',queryId);
  const initialQueryGetResults = await getQueryFunc(queryId);
  console.log('initialQuery',initialQueryGetResults);
  setTimeout(async () => {
    let delayedQueryGetResults = await getQueryFunc(queryId); 
    console.log(delayedQueryGetResults.results);
    return delayedQueryGetResults.results
  },1000);
  //status goes from Scheduled, to Running, to Complete. or Failed/cancelled/timeout/unknown. see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html 
  //setTimeout gives AWS some time to run the query.
}

const functionrow = async () => {
  const gotResults = await getLogs();

  const badges = [];
  const averageColdCalls = 40;
  const averageInitDuration = 200;
  return (
    <Flex flexDirection='col'>
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
          <Card style={{ minWidth: '260px' }} className='max-w-lg'>
            <Flex className='mt-4'>
              <Text>
                <Bold>Avg. duration</Bold>
              </Text>
            </Flex>
            {/* <BarList data={currentData} className="mt-1" /> */}
          </Card>
          <Flex flexDirection='col'>
            <Card decoration='left' decorationColor='gray'>
              <Metric>20</Metric>
              <Text>cold calls /week</Text>
            </Card>
            <Card decoration='left' decorationColor='gray'>
              <Metric>120ms</Metric>
              <Text>init time</Text>
            </Card>
          </Flex>
          <div>
            <Button onClick={GetData}>Get Data</Button>
            <Button>
              <Link href='../home/dataPage'>More</Link>
            </Button>
            <Button>
              <Link href='../home/functionList'>Get List</Link>
            </Button>
          </div>
        </Flex>
      </Card>
    </Flex>
  );
};

export default functionrow;
