import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda";
import Home from '../src/app/page';

jest.mock('@aws-sdk/client-lambda', () => ({
  LambdaClient: jest.fn(),
  ListFunctionsCommand: jest.fn()
}));

const mockedLambdaClient = {
  send: jest.fn().mockResolvedValue({
    Functions: [
      { FunctionName: 'function1' },
      { FunctionName: 'function2' },
      { FunctionName: 'function3' },
      { FunctionName: 'function4' },
      { FunctionName: 'function5' }
    ]
  })
};

LambdaClient.mockImplementation(() => mockedLambdaClient);

test('fetches and displays Lambda function names', async () => {
  render(<Home />);
  expect(mockedLambdaClient.send).toHaveBeenCalledTimes(1);
  expect(await screen.findByText('/aws/lambda/function1')).toBeInTheDocument();
  expect(await screen.findByText('/aws/lambda/function2')).toBeInTheDocument();
  expect(await screen.findByText('/aws/lambda/function3')).toBeInTheDocument();
  expect(await screen.findByText('/aws/lambda/function4')).toBeInTheDocument();
  expect(await screen.findByText('/aws/lambda/function5')).toBeInTheDocument();
});