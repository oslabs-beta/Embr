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

const functionrow = () => {
  return (
    <div>
      <Flex flexDirection="col">
        <Card>
          <Flex className="max-w: 300, max-h: 300">
            <Flex>
              <Title className="mx-5" style={{ minWidth: '350px' }}>
                Function name
              </Title>
            </Flex>
            <Card style={{ minWidth: '500px', minHeight: '220px' }}>
              <Flex flexDirection="row" className="mt-4">
                <CiTimer />
                <Text>
                  <Bold>Avg. duration</Bold>
                </Text>
              </Flex>
              <BarList data={data} className="mt-1" />
            </Card>
            <Flex flexDirection="col">
              <Card style={{ minWidth: '500px', minHeight: '220px' }}>
                <Metric>20</Metric>
                <Text>cold calls /week</Text>
                <Metric>120ms</Metric>
                <Text>init time</Text>
              </Card>
            </Flex>
            <Flex flexDirection="col" style={{ minHeight: '220px' }}>
              <Card>
                <Button size="sm">Warm the data</Button>
              </Card>
              <Card>
                <Button size="sm">Read more</Button>
              </Card>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </div>
  );
};

export default functionrow;
