import { Card, Metric, Text, Divider, AreaChart } from "@tremor/react";

const data = [
  {
    Timestamp: 'Feb 21',
    'Run Time': 14,
  },
  // ...
  {
    Timestamp: 'Jan 22',
    'Run Time': 20,
  },
  {
    Timestamp: 'Jan 22',
    'Run Time': 18,
  },
  {
    Timestamp: 'Jan 22',
    'Run Time': 13,
  },
  {
    Timestamp: 'Jan 22',
    'Run Time': 19,
  },
];

const valueFormatter = (number: number | bigint) => `${Intl.NumberFormat("us").format(number).toString()} ms`;

export default function LineChart() {
  return (
    <Card className="mx-auto">
      <Text>titans-lambda-logs</Text>
      <Metric>Initialization Runtime: 144ms </Metric>
      <AreaChart
        className="mt-8 h-44"
        data={data}
        categories={["Run Time"]}
        index="Timestamp"
        colors={["indigo"]}
        valueFormatter={valueFormatter}
        showYAxis={true}
        showLegend={false}
      />
    </Card>
  );
}