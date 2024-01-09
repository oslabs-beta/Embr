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
  Card,
  Title,
  Text,
  Metric,
} from '@tremor/react';
import allAccordionArray from './Accordions';
import WarmPeriodTabs from './WarmPeriodTabs';
import { allowedNodeEnvironmentFlags } from 'process';
``;
import GetData from '../home/dataPage/page'

//AWS Cloudwatch start and get query imports
import { CloudWatchLogsClient, StartQueryCommand, GetQueryResultsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda";
import { Grey_Qo } from 'next/font/google';

//___AWS_Start query: creates the query on AWS and returns response of queryId
const startQueryFunc = async function(funcName) {
  const client = new CloudWatchLogsClient({region: 'us-east-2'});
  const oneWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // TODO: currently 24 hours ago, * 7 if want to change to week. unit is currently in seconds
  const now = new Date();
  const input = { // StartQueryRequest
    logGroupName: funcName,
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
}
//calls startQuery and getQuery sequentially and does some data manipulation.
const getLogs = async function( funcName ) {
  const QueryStartResults = await startQueryFunc(funcName);
  const queryId = QueryStartResults.queryId;
  const initialQueryGetResults = await getQueryFunc(queryId);
  setTimeout(async () => {
    let delayedQueryGetResults = await getQueryFunc(queryId); 
    return delayedQueryGetResults.results
  }, 2000);
  //status goes from Scheduled, to Running, to Complete. or Failed/cancelled/timeout/unknown. see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html 
  //setTimeout gives AWS some time to run the query.
}
//receives prop funcName and destructures it
const functionrow = async ( { funcName , avgColdCalls , avgColdstartDur , dataIndex } ) => {
  let initInfo = [{
    timestamp: '2023-12-14 18:18:43.243',
    initDuration: '181.02',
    warmInvocationsDuration: ['11.04', '1.91', '2.36', '1.92', '1.36'],
    day: '2023-12-14',
  },
  {
    timestamp: '2023-12-14 18:18:43.243',
    initDuration: '181.02',
    warmInvocationsDuration: ['11.04', '1.91', '2.36', '1.92', '1.36'],
    day: '2023-12-14',
  }];
  const gotResults = await getLogs(funcName);
  // const initInfo = await getInitInfo(gotResults);
  const badges = [];
  const averageInitDuration = 200;
  //below var removes '/aws/lambda/' from the function name. eg '/aws/lambda/myLambda' ==> 'myLambda'
  const funcNameSliced = funcName.slice(12);

  return (
    <div style={{
      width: '70vw',
    }}>

    <Flex flexDirection='row'>
      <Card className='p-1'
        style={{
          minWidth: '4rem',
          borderRadius: '15px',
          maxWidth: '15rem',
        }}
        decorationColor='gray'
        >
        <Title>{funcNameSliced}</Title>
      </Card>
      <Card className='p-1 max-w-45 max-h-15 '>
        {/* <Badges initInfo={initInfo}/> */}
        <WarmPeriodTabs dataIndex={ dataIndex }></WarmPeriodTabs>
      </Card>
      <Flex flexDirection='col' className='w-96'>
        <Card
          decoration='left'
          decorationColor='blue'
          className='max-w-xs'
          >
          <Metric>{avgColdCalls}</Metric>
          <Text>cold calls /week</Text>
        </Card>
        <Card
          decoration='left'
          decorationColor='blue'
          className='max-w-xs'
          >
                <Metric>{avgColdstartDur}ms</Metric>
          <Text>average cold start</Text>
        </Card>
      </Flex>
      <WarmButton buttonName={'Warm'} />
    </Flex>
  </div>
  );
};

export default functionrow;
