import React from 'react';
import styles from './globals.css';
import Functionrow from './components/functionrow';
import Navbar from './components/Navbar';
import { Flex, Card, Text } from '@tremor/react';

// AWS CloudWatch imports to get Lambda function names
import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda";

// Home page
const Home = async () => {

  const getLambdaNames = async () => {

    const listFunctions = async () => {
      const client = new LambdaClient({});
      const input = {
        MasterRegion: 'us-east-2',
        FunctionVersion: 'ALL',
        MaxItems: Number('10')
      };
      const command = new ListFunctionsCommand({ input });
      const response = await client.send(command);
      return response;

    };
    const data = await listFunctions();
    const dataList = data['Functions'];
    const nameArray = [];
    for (let i = 0; i < dataList.length; i++) {
      nameArray.push(`/aws/lambda/${dataList[i]['FunctionName']}`);
    }
    return nameArray;
  };

  let nameArray = await getLambdaNames();

  return (
    <div>
      <Navbar />
      <div className={`${styles.fullWidthContainer} relative z-0`}>
        <Flex flexDirection='row' justifyContent='center'>
          <div style={{
            maxWidth: '77vw',
            boxShadow: '0px 0px 40px gray',
            padding: '4vh 4vw 0 4vw'
            }}>
            <Flex flexDirection='col' className="min-w-25" style={{}}>
              <Functionrow funcName={nameArray[0]} avgColdCalls={'8'} avgColdstartDur={'181'} style={{}} />
              <Functionrow funcName={nameArray[3]} avgColdCalls={'2'} avgColdstartDur={'153'} />
              <Functionrow funcName={nameArray[4]} avgColdCalls={'12'} avgColdstartDur={'144'} />
              <Functionrow funcName={nameArray[1]} avgColdCalls={'4'} avgColdstartDur={'198'} />
            </Flex>
          </div>
        </Flex>

      </div>
    </div>
  );
};

export default Home;