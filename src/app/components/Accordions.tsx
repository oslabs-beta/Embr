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
    initDuration: '165.61',
    warmInvocationsDuration: ['1.34', '12.42'],
    day: '2023-12-15',
  },
  {
    timestamp: '2023-12-14 19:42:01.840',
    initDuration: '165.61',
    warmInvocationsDuration: ['1.34', '12.42'],
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

const SingleAccordion = ({ oneData, currentDay}) => {
  const mockInitInfo = oneData;
  const linechartsArray = [];
  for (let i = 0; i < mockInitInfo.length; i++) {
    if (mockInitInfo[i].day === currentDay) linechartsArray.push(<LineChart oneData={mockInitInfo[i]} coldStartTimestamp={'coldstartTimeStamp'}></LineChart>);
  }

  return (
    <>
    <TabGroup>
        <TabList className="mt-8">
          <Tab icon={UserGroupIcon}>Chart A</Tab>
          <Tab icon={UserIcon}>Chart B</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="mt-10">
              <Flex className="mt-4">
                <Text className="w-full">Product Y</Text>
                <Flex className="space-x-2" justifyContent="end">
                  <Text>$ 108,799</Text>
                  <Text>38%</Text>
                </Flex>
              </Flex>
              {linechartsArray[0]}
              <ProgressBar value={38} className="mt-2" />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-10">
              <Flex className="mt-4">
                <Text className="w-full">Product Z</Text>
                <Flex className="space-x-2" justifyContent="end">
                  <Text>$ 99,484</Text>
                  <Text>16%</Text>
                </Flex>
              </Flex>
              <ProgressBar value={12} className="mt-2" />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
};

// *******
// const AllAccordions = () => {
  const allAccordionArray = [];

  for (let i = 0; i < mockInitInfo.length; i++) {
    if (i === 0)
      allAccordionArray.push(
        <SingleAccordion oneData={mockInitInfo} currentDay={mockInitInfo[i].day}>
          Hello {mockInitInfo[i].day}
        </SingleAccordion>
      );
    else if (mockInitInfo[i].day !== mockInitInfo[i - 1].day)
      allAccordionArray.push(
        <SingleAccordion oneData={mockInitInfo} currentDay={mockInitInfo[i].day}>
          Hello {mockInitInfo[i].day}
        </SingleAccordion>
      );
  }
// };
export default allAccordionArray;