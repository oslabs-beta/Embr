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
  {
    timestamp: '2023-12-15 19:42:01.839',
    initDuration: '173.14',
    warmInvocationsDuration: ['1.34', '12.42'],
    day: '2023-12-15',
  },
  {
    timestamp: '2023-12-14 19:44:01.840',
    initDuration: '165.61',
    warmInvocationsDuration: ['5.61', '42.02','17.21'],
    day: '2023-12-14',
  },
  {
    timestamp: '2023-12-14 18:18:43.243',
    initDuration: '181.02',
    warmInvocationsDuration: ['11.04', '1.91', '2.36', '1.92', '1.36'],
    day: '2023-12-14',
  },
  {
    timestamp: '2023-12-14 17:46:43.243',
    initDuration: '142.05',
    warmInvocationsDuration: ['1.04', '1.71', '1.46'],
    day: '2023-12-14',
  },
  {
    timestamp: '2023-12-14 17:21:43.243',
    initDuration: '192.01',
    warmInvocationsDuration: ['9.04', '1.71', '2.33', '1.95', '1.46', '2.18'],
    day: '2023-12-14',
  },
];

const WarmPeriodTabs = () => {

  return (
    <Card className='p-1 m-0'>
      {/* <Text>Warm execution contexts</Text> */}
      <TabGroup>
        <TabList className="mt-0">
          <Tab className='p-1'>{mockInitInfo[0].timestamp.slice(0,9)}</Tab>
          <Tab className='p-1'>{mockInitInfo[1].timestamp.slice(0,9)}</Tab>
        </TabList>
        <TabPanels className="p-1">
          <TabPanel className="p-0 m-0">
                <LineChart oneData={ mockInitInfo[0] }></LineChart>
          </TabPanel>
          <TabPanel className="p-0 m-0">
            <div className="p-1 mt-0">
                <LineChart oneData={ mockInitInfo[1] }></LineChart>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};

export default WarmPeriodTabs;