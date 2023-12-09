'use client';

import React from 'react';
import { averageInitDuration, averageColdCalls } from '../retrievedData.js';
import Badges from './badges';
import { Flex, Card, Title, Text, Metric } from '@tremor/react';

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
          decorationColor="gray"
        >
          <Flex>
            <Card className="max-w-xs">
              <Title>Lambda Function</Title>
            </Card>
            <Card className="max-w-sm">
              <Badges />
            </Card>
            <Flex flexDirection="col" className="w-96">
              <Card
                decoration="left"
                decorationColor="blue"
                className="max-w-xs"
              >
                <Metric>{averageColdCalls}</Metric>
                <Text>cold calls /week</Text>
              </Card>
              <Card
                decoration="left"
                decorationColor="blue"
                className="max-w-xs"
              >
                <Metric>{averageInitDuration}</Metric>
                <Text>average cold start</Text>
              </Card>
            </Flex>
            <div
              onClick={() => warmFunction()}
              className="cursor-pointer text-center align-middle font-mono bg-orange-800 w-60 p-2 rounded hover:bg-orange-500"
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
