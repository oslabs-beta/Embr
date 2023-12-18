/**
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// const AWS = require('aws-sdk');
// const dotenv = require('dotenv');
import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda";
// const listFunctions = () => {
//   const client = new LambdaClient({});
//   const command = new ListFunctionsCommand({});

//   return client.send(command);
// };
// const list = listFunctions()
// console.log(list)

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