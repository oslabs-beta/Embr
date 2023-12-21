// src/app/components/email-template.tsx
import * as React from 'react';

interface EmailTemplateProps {
  Name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Name,
}) => {
  return (
    <div>
      <h1>Welcome, {Name}!</h1>
      <p>
        Thanks for sending me an Email; here is your function data information!
      </p>
      <div>
        <table
          style={{
            border: '1px solid #ddd',
            borderCollapse: 'collapse',
            width: '100%',
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                }}
              ></th>
              <th
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                }}
                scope="col"
              >
                Function name
              </th>
              <th
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                }}
                scope="col"
              >
                Cold calls /week
              </th>
              <th
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                }}
                scope="col"
              >
                Average cold start
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                }}
              >
                1
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                }}
              >
                ChrisTestFunc
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                }}
              >
                40
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                }}
              >
                180ms
              </td>
            </tr>

            <tr>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                }}
              >
                2
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                }}
              >
                ChrisPresentation
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                }}
              >
                30
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                }}
              >
                200ms
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
