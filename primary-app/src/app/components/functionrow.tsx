'use client';

import React from 'react';
import Link from 'next/link';

import { CiTimer } from 'react-icons/ci';

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
const data = [
  {
    name: '12:04',
    value: 456,
    color: 'orange',
  },
  {
    name: '4:05',
    value: 191,
  },
];

const warmFunction = () => {
  fetch('https://k2j68xsjnc.execute-api.us-east-2.amazonaws.com/default/thumbnail-creator', {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
};

const functionrow = () => {
  return (
    <Flex flexDirection="col">
      <div className="flex flex-row items-center">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Card decoration="bottom" decorationColor='gray'>
            <Flex>
              <Card style={{ minWidth: '50px' }}>
                <Title>Invocations</Title>
              </Card>
              <Card style={{ minWidth: '350px' }} className="max-w-lg">
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
        <div onClick={() => warmFunction()} className="cursor-pointer text-center align-middle font-mono bg-violet-600 w-32 p-2 rounded hover:bg-blue-600">
          Warm
        </div>
      </div>
    </Flex>
  );
};

export default functionrow;
