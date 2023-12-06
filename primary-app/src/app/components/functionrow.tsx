'use client';

import React from 'react';
import Link from 'next/link';
import { Flex, Bold, Card, Title, Text, Metric, BarList } from '@tremor/react';
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
const functionrow = () => {
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
