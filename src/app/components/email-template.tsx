//src/app/components/email-template.tsx
import * as React from 'react';
import Functionrow from '../components/functionrow';
import { Flex } from '@tremor/react';

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
    </div>
  );
};
