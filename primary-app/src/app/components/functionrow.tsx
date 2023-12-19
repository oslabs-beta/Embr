const AWS = require('aws-sdk');
const dotenv = require('dotenv');

import React from 'react';
import Link from 'next/link';
import Badges from './badges';

//Do not confuse this for the Tremor component (not being imported) also called 'Button'. This import is our button component.
import WarmButton from './WarmButton';

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
  AccordionList
} from '@tremor/react';
import allAccordionArray from './Accordions';
import { allowedNodeEnvironmentFlags } from 'process';
``;

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
  limit: 15,
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
  // const initInfo = await getInitInfo(gotResults);
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
                {/* <Metric>{initInfo}</Metric> */}
                <Text>average cold start</Text>
              </Card>
            </Flex>
            <WarmButton buttonName={'Warm'} />
          </Flex>
          <AccordionList className='max-w-md mx-auto'>
          { allAccordionArray }
        </AccordionList>
        </Card>
      </div>
    </Flex>
  );
};

export default functionrow;
