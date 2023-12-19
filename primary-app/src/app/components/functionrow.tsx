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

import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda";

const BigPoppa = async () => {

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

  // const nameArray = await BigPoppa()
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

  let nameArray = await BigPoppa()
  let gotResults
  for(let i = 0; i < nameArray.length; i++) {
    gotResults = await getLogs(nameArray[i])
    setTimeout(()=> {console.log(`this is the name of the function: ${nameArray[i]}: `, gotResults)}, 2000)
  }
  // const gotResults = await getLogs();

  const badges = [];
  const averageColdCalls = 40;
  const averageInitDuration = 200;
  return (
    <Flex flexDirection="col">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
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
              <BarList data={data} className="mt-1" />
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
          </Flex>
        </Card>
      </div>
    </Flex>
  );
};

export default functionrow;
