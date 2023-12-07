'use client';

import React from 'react';
import Link from 'next/link';
import { averageInitDuration , averageColdCalls , initDurationsArray } from '../retrievedData.js';
import { CiTimer } from 'react-icons/ci';
import { initInfo } from '../retrievedData2.js';
import Badges from './badges';
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

const functionrow = () => {
  const badges = [];


  return (
    <Flex flexDirection="col">
      <div className="flex flex-row items-center">
        <Card
          style={{
            minWidth: '75rem',
            borderRadius: '15px',
            border: '2px solid grey',
          }}
          // decoration="bottom"
          decorationColor="gray"
        >
          <Flex>
            <Card className="max-w-xs ">
              <Title>Lambda Function</Title>
            </Card>
            <Card className="max-w-md">
              < Badges />
              {/* <Flex className="mt-4">
                <Text>
                  <Bold>Avg. duration</Bold>
                </Text>
              </Flex>
              <BarList data={data} className="mt-1" /> */}
            </Card>
            <Flex flexDirection="col">
              <Card
                decoration="left"
                decorationColor="blue"
                className="max-w-xs"
              >
                <Metric>{averageColdCalls}</Metric>
                  <Text>cold calls /week</Text>
                </Card>
                <Card decoration="left" decorationColor="blue" className="max-w-xs">
                  <Metric>{averageInitDuration}</Metric>
                  <Text>average cold start</Text>
              </Card>
            </Flex>
            <div
              onClick={() => warmFunction()}
              className="cursor-pointer text-center align-middle font-mono bg-orange-800 w-72 p-2 rounded hover:bg-orange-500"
            >
              Warm
            </div>
          </Flex>
        </Card>
      </div>
    </Flex>
  );
};

export default functionrow;
