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

export default function dataPage() {
  return (
    <div>
      <h1 style={{ color: 'black' }}>YEEAAHHH BOIII</h1>
      <Button onClick={GetData}>Get More Data</Button>
    </div>
  );
}
