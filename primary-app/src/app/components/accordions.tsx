import { Accordion, AccordionBody, AccordionHeader } from '@tremor/react';
import LineChart from './linechart';

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

const SingleAccordion = ({currentDay}) => {
  const linechartsArray = [];
  for (let i = 0; i < mockInitInfo.length; i++) {
    if (mockInitInfo[i].day === currentDay) linechartsArray.push(<LineChart oneData={mockInitInfo[i]}></LineChart>);
  }

  return (
    <Accordion>
      <AccordionHeader>Accordion {currentDay}</AccordionHeader>
      <AccordionBody>{linechartsArray}</AccordionBody>
    </Accordion>
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
