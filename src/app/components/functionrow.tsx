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
import GetData from '../home/dataPage/page'

//AWS Cloudwatch start and get query imports
import { CloudWatchLogsClient, StartQueryCommand, GetQueryResultsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import

import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda";

const getLambdaNames = async () => {

  const listFunctions = async () => {
    const client = new LambdaClient({});
    const input = {
      MasterRegion: 'us-east-2',
      FunctionVersion: 'ALL',
      MaxItems: Number('10')
    }
    const command = new ListFunctionsCommand({input});
    const response = await client.send(command);
    return response

  };
  const data = await listFunctions()
  const dataList = data['Functions']
  const nameArray = []
  for(let i = 0; i < dataList.length; i++){
    nameArray.push(`/aws/lambda/${dataList[i]['FunctionName']}`)
  }
  return nameArray
}

//___AWS_Start query: creates the query on AWS and returns response of queryId
const startQueryFunc = async function(funcName) {

  // const nameArray = await getLambdaNames()
  // console.log(nameArray)

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
  // console.log('response:',response);
}

//calls startQuery and getQuery sequentially and does some data manipulation.
const getLogs = async function(funcName) {
  const QueryStartResults = await startQueryFunc(funcName);
  const queryId = QueryStartResults.queryId;
  // console.log('V3startQuery:',QueryStartResults);
  // console.log('QueryId:',queryId);
  const initialQueryGetResults = await getQueryFunc(queryId);
  console.log('initialQuery',initialQueryGetResults);
  setTimeout(async () => {
    let delayedQueryGetResults = await getQueryFunc(queryId); 
    console.log(delayedQueryGetResults.results);
    return delayedQueryGetResults.results
  }, 2000);
  //status goes from Scheduled, to Running, to Complete. or Failed/cancelled/timeout/unknown. see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html 
  //setTimeout gives AWS some time to run the query.
}

const functionrow = async () => {
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
  let nameArray = await getLambdaNames()
  let gotResults;
  for(let i = 0; i < nameArray.length; i++) {
    gotResults = await getLogs(nameArray[i])
    setTimeout(()=> {console.log(`this is the name of the function: ${nameArray[i]}: `, gotResults)}, 2000)
  }
  // const gotResults = await getLogs();


  //const gotResults = await getLogs();
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
