
import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda";

import React from 'react';


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

  // console.log(data['Functions'])

  const dataList = data['Functions']

  const nameArray = []

  for(let i = 0; i < dataList.length; i++){
    nameArray.push(dataList[i]['FunctionName'])
  }

  console.log(nameArray)
// 


  return(
    <div style={{ color: 'black'}}>
      This is BigPoppa
      <div>
         {nameArray.map((el, index) => {
         return(<p key={index}>{el}</p>)
      })}
      </div>
    </div>
  )
}

export default BigPoppa
// export { listFunctions };