//src/app/components/email-template.tsx
import * as React from 'react';
import { Card, Metric, Text } from '@tremor/react';

interface EmailTemplateProps {
  Name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Name,
}) => {
  return (
    <div>
      <h1>Welcome, {Name}!</h1>
      <p>Thanks for sendhing me a Email</p>
      <Card
        className="max-w-xs mx-auto"
        decoration="top"
        decorationColor="indigo"
      >
        <Text>Sales</Text>
        <Metric>$ 34,743</Metric>
      </Card>
    </div>
  );
};
