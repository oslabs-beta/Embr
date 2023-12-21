import { Accordion, AccordionBody, AccordionHeader } from '@tremor/react';
import LineChart from './LineChart';
import ourData from './data'

const SingleAccordion = ({ currentDay }) => {
  const linechartsArray = [];
  for (let i = 0; i < ourData.length; i++) {
    if (ourData[i].day === currentDay) linechartsArray.push(<LineChart oneData={ourData[i]}></LineChart>);
  }

  return (
    <Accordion>
      <AccordionHeader>Date: {currentDay}</AccordionHeader>
      <AccordionBody>{linechartsArray}</AccordionBody>
    </Accordion>
  );
};

const allAccordionArray = [];

for (let i = 0; i < ourData.length; i++) {
  if (i === 0)
    allAccordionArray.push(
      <SingleAccordion oneData={ourData} currentDay={ourData[i].day}>
        {ourData[i].day}
      </SingleAccordion>
    );
  else if (ourData[i].day !== ourData[i - 1].day)
    allAccordionArray.push(
      <SingleAccordion oneData={ourData} currentDay={ourData[i].day}>
        {ourData[i].day}
      </SingleAccordion>
    );
}
export default allAccordionArray;
