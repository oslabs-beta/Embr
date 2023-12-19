import React from 'react'

//note typescript type setting in destructuring syntax
export default function Button({ buttonName, onClickFunc }:{ buttonName:string, onClickFunc:Function}) {
  return (
    <div
      onClick={() => onClickFunc()}
      className='cursor-pointer text-center align-middle font-mono bg-orange-800 w-60 p-2 rounded hover:bg-orange-500'
    >
      {buttonName}
    </div>
  )
}
