
import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda";

import React from 'react';


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
    nameArray.push(dataList[i]['FunctionName'])
  }

  console.log(nameArray)
// 


  return(
    <div style={{ color: 'black'}}>
      test text
      <div>
         {nameArray.map((el, index) => {
         return(<p key={index}>{el}</p>)
      })}
      </div>
    </div>
  )
}

export default getLambdaNames
