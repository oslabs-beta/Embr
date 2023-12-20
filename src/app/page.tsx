import React from 'react';
import styles from './page.module.css';
import Functionrow from './components/functionrow';
import Navbar from './components/Navbar';
import { Flex , Card , Text } from '@tremor/react'

//AWS Cloudwatch imports to get Lambda function names
import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda";

//home page
const home = async () => {

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

  let nameArray = await getLambdaNames()
  let gotResults;
  for(let i = 0; i < nameArray.length; i++) {
    // gotResults = await getLogs(nameArray[i]);
    setTimeout(()=> {console.log(`${i},this is the name of the function: ${nameArray[i]}`)}, 1000)
  }


  return (
    <>
      <Navbar />
      <div className={`${styles.fullWidthContainer} relative z-0`}>
        <Flex flexDirection='row' >
          <Card>
            <Text>funcName1</Text>
          </Card>
          <Flex flexDirection='col'>
          <Functionrow funcName={ nameArray[4] }/>
          <Functionrow funcName = { nameArray[3] } />
          </Flex>
        </Flex>
      </div>
    </>
  );
};

export default home;
