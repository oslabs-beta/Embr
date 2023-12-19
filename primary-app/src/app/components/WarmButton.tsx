'use client';
import React from 'react'

//note typescript type setting in destructuring syntax
export default function WarmButton({ buttonName }:{ buttonName:string}) {

//warm function for a specific Lambda function - triggered on button click
const warmFunction:Function = () => {
  fetch(
    'https://k2j68xsjnc.execute-api.us-east-2.amazonaws.com/default/thumbnail-creator',
    {
      method: 'GET',
      mode: 'cors',
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

  return (
    <div
      onClick={() => warmFunction()}
      className='cursor-pointer text-center align-middle font-mono bg-orange-800 w-60 p-2 rounded hover:bg-orange-500'
    >
      {buttonName}
    </div>
  )
}
