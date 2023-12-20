'use client'
import { 
  Card, 
  Metric, 
  Text, 
  Divider, 
  AreaChart,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel } from '@tremor/react';

  const LineChart = ({ oneData }) => {
    const valueFormatter = (number: number | bigint) => `${Intl.NumberFormat('us').format(number).toString()} ms`;
    
    //Takes in log object and creates a graph point for each warm invocation
    const formatter = (info) => {
      let result = [];
      for (let i = 0; i < info.warmInvocationsDuration.length; i++) {
        //each plot point has timestamp and a runtime
        let entry = {
            //timestamp is sliced to take out the date and contain only the time (hh:mm:ss format).
          Timestamp: info.timestamp.slice(info.timestamp.indexOf(' ') + 1, info.timestamp.indexOf('.') - 3),
          Runtime: info.warmInvocationsDuration[i],
        };
        result.push(entry);
      }
      console.log(result);
      return result; //array of plot points
    };

    const data = formatter(oneData);
    return (<>
        <Text>{oneData.timestamp.slice(oneData.timestamp.indexOf(' ') + 1, oneData.timestamp.indexOf('.') - 3)}</Text>
        <Text>cold start: {oneData.initDuration}ms </Text>
        <AreaChart
          className='mt-8 h-44'
          data={data}
          categories={['Runtime']}
          index='Timestamp'
          colors={['orange']}
          valueFormatter={valueFormatter}
          yAxisWidth={30}
          showYAxis={true}
          showXAxis={false}
          showLegend={true}
          />
        </>
    );
  };

export default LineChart;