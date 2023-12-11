'use client'
import Link from 'next/link';
import {
  Flex,
  Bold,
  Card,
  Title,
  Text,
  Metric,
  BarList,
  Button,
} from '@tremor/react';
``;
import GetData from './button1';

export default async function dataPage() { 
// const data = await GetData()
function Data() {

}


  return (
    <div>

      <h1 style={{ color: 'black' }}>YEEAAHHH BOIII</h1>
      <div>
      </div>
      <Button onClick={GetData}>Get More Data</Button>
    </div>
  );
}
