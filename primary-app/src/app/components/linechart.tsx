import { Card, Metric, Text, Divider, AreaChart } from '@tremor/react';

  const LineChart = ({ oneData }) => {

    const valueFormatter = (number: number | bigint) => `${Intl.NumberFormat('us').format(number).toString()} ms`;

    const formatter = (info) => {
      let result = [];
      for (let i = 0; i < info.warmInvocationsDuration.length; i++) {
        let entry = {
          Timestamp: info.timestamp.slice(info.timestamp.indexOf(' ') + 1, info.timestamp.indexOf('.') - 3),
          RunTime: info.warmInvocationsDuration[i],
        };
        result.push(entry);
      }
      return result;
    };

    const data = formatter(oneData);
    console.log('line 54: ', data);

    return (
      <Card className='mx-auto'>
        <Text>titans-lambda-logs</Text>
        <Metric>Initialization Runtime: {oneData.initDuration}ms </Metric>
        <AreaChart
          className='mt-8 h-44'
          data={data}
          categories={['RunTime']}
          index='Timestamp'
          colors={['indigo']}
          valueFormatter={valueFormatter}
          showYAxis={true}
          showLegend={true}
        />
      </Card>
    );
  };

export default LineChart;