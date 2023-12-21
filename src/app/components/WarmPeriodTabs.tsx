import { 
  Accordion,
   AccordionBody, 
   AccordionHeader,
   Card,
   Flex,
   Metric,
   ProgressBar,
   Tab,
   TabGroup,
   TabList,
   TabPanel,
   TabPanels,
   Text } from '@tremor/react';
        
import { UserGroupIcon, UserIcon } from "@heroicons/react/solid";

import LineChart from './LineChart';

const mockInitInfo = [
  {//0
    timestamp: '2023-12-15 19:42:01.839',
    initDuration: '173.14',
    warmInvocationsDuration: ['1.34', '12.42'],
    day: '2023-12-15',
  },
  {//1
    timestamp: '2023-12-14 19:44:01.840',
    initDuration: '165.61',
    warmInvocationsDuration: ['5.61', '2.02','7.21'],
    day: '2023-12-14',
  },
  {//2
    timestamp: '2023-12-14 18:18:43.243',
    initDuration: '181.02',
    warmInvocationsDuration: ['1.04', '3.91', '2.36', '3.32', '5.60'],
    day: '2023-12-03',
  },
  {//3
    timestamp: '2023-12-14 17:46:43.243',
    initDuration: '162.05',
    warmInvocationsDuration: ['1.04', '1.71', '1.46','3.52'],
    day: '2023-12-02',
  },
  {//4
    timestamp: '2023-12-14 17:21:43.243',
    initDuration: '108.44',
    warmInvocationsDuration: ['14.04', '11.71', '21.33', '10.25', '13.46', '18.18'],
    day: '2023-12-12',
  },
  {//5
    timestamp: '2023-12-14 18:18:43.243',
    initDuration: '116.39',
    warmInvocationsDuration: ['11.04', '14.01', '31.92', '21.36'],
    day: '2023-12-13',
  },
  {//6
    timestamp: '2023-12-14 18:18:43.243',
    initDuration: '108.24',
    warmInvocationsDuration: ['4.04', '8.41', '3.55', '6.92', '4.86'],
    day: '2023-12-14',
  },
  {//7
    timestamp: '2023-12-06 18:18:43.243',
    initDuration: '122.71',
    warmInvocationsDuration: ['8.52', '3.51', '6.46', '3.17', '6.12'],
    day: '2023-12-06',
  },
];

const WarmPeriodTabs = ({ dataIndex }) => {

  return (
    <Card className='p-1 m-0'>
      {/* <Text>Warm execution contexts</Text> */}
      <TabGroup>
        <TabList className="mt-0">
          <Tab className='p-1'>{mockInitInfo[dataIndex].timestamp.slice(0,9)}</Tab>
          <Tab className='p-1'>{mockInitInfo[dataIndex+1].timestamp.slice(0,9)}</Tab>
        </TabList>
        <TabPanels className="p-1">
          <TabPanel className="p-0 m-0">
                <LineChart oneData={ mockInitInfo[dataIndex] }></LineChart>
          </TabPanel>
          <TabPanel className="p-0 m-0">
            <div className="p-0 mt-0">
                <LineChart oneData={ mockInitInfo[dataIndex+1] }></LineChart>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};

export default WarmPeriodTabs;