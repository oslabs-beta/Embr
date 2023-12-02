// server.js
const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = 3000;

// config AWS SDK with i-am-titan user
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

// handle middleware to file uploads
const upload = multer({ dest: 'uploads/' });

// serve HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// serve the javascript file with correct content-type
app.get('/index.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.js'));
  res.header('Content-Type', 'application/javascript');
});

// handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
  const file = req.file;

  // check if file exists
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  // config S3 upload parameters
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${Date.now()}-${file.originalname}`,
    Body: require('fs').createReadStream(file.path),
  };

  // upload file to S3
  s3.upload(params, (err, data) => {
    if (err) {
      return res.status(500).send('Error uploading file to S3.');
    }

    // reset/delete the local file
    require('fs').unlinkSync(file.path);

    res.send(`File uploaded successfully. S3 URL: ${data.Location}`);
  });
});

// Handle AWS CloudWatch Log query
app.get('/getLogs', (req, res) => {
  console.log('inside app.get(/getLogs)');
  const cloudwatchlogs = new AWS.CloudWatchLogs();
  const now = new Date();
  const oneWeek = new Date(Date.now() - 24 * 60 * 60 * 1000); // TODO: currently 24 hours ago, * 7 if want to change to week. unit is currently in seconds

//  queryString:
//   'fields @timestamp, @message, @logStream, @log, @initDuration | sort @timestamp desc | limit 20',


  const params = {
    // when we getLogs, i am wanting to grab the Timestamp, RequestId, and DurationInMS
    // https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions/titans-lambda-log-test?tab=monitoring
    startTime: oneWeek.getTime(),
    endTime: now.getTime(),
    queryString:
      'fields @timestamp, @message, @logStream, @log | sort @timestamp desc | limit 20',
    logGroupName: '/aws/lambda/titans-lambda-log-test',
    // limit: 50,
  };

  cloudwatchlogs.startQuery(params, (err, data) => {
    if (err) console.error('THIS IS THE ERROR: ', err, err.stack); // error handler
    else { // else get the logs by 
      console.log(
        'USE THE QUERY ID TO GetQueryResults, THIS IS THE QUERY ID:',
        data
      );
      const getParams = {
        queryId: '509faf9a-a7c5-4dbe-9c1b-b0490d4592c5'
      };
      // invoke the GetQueryResults method back with the err.requestId,
      cloudwatchlogs.getQueryResults(getParams, (err, data) => {
        if (err) console.error("this is the error for getQueryResults:", err, err.stack);
        else console.log('this is the data from getQueryResults:', data);
      })
    }
  });

  // TODO: res.status(200).send('here are the logs')
  console.log('back outside the /getLogs in the server.js file, now ru');
});

// const queryID = '8ea94d9f-7cc8-4a86-b226-9a47a63bd255';
// cloudwatchlogs.GetQueryResults(queryID, (err, data) => {
//   console.log('pressed the button to GetQueryResults');
//   if (err) console.error('This is the error inside GetQueryResults: ', err, err.stack);
//   else { // successful
// console.log('successful inside the else statement of GetQueryResults');

//   }
// })


// start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// ********* CHATGPT ***************

// const cloudwatchlogs = new AWS.CloudWatchLogs();

// const params = {
//   startTime: ...,
//   endTime: ...,
//   queryString: 'your-query-string',
//   logGroupName: 'your-log-group-name',
// };

// cloudwatchlogs.startQuery(params, (err, data) => {
//   if (err) console.error(err, err.stack);
//   else console.log(data);
// });

// *************************** below are from docs - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchLogs.html#startQuery-property

// var params = {
//   endTime: 'NUMBER_VALUE', /* required */
//   queryString: 'STRING_VALUE', /* required */
//   startTime: 'NUMBER_VALUE', /* required */
//   limit: 'NUMBER_VALUE',
//   logGroupIdentifiers: [
//     'STRING_VALUE',
//     /* more items */
//   ],
//   logGroupName: 'STRING_VALUE',
//   logGroupNames: [
//     'STRING_VALUE',
//     /* more items */
//   ]
// };
// cloudwatchlogs.startQuery(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });

// ********* mine to put

// const now = Date();
// const oneWeek = new Date(Date() - 24 * 60 * 60 * 1000); // TODO: currently 24 hours ago, * 7 if want to change to week. unit is currently in seconds

// const params = {
//   startTime: oneWeek.getTime(),
//   endTime: now.getTime(),
//   queryString: 'fields @timestamp, @message | sort @timestamp desc | limit 20',
//   logGroupName: '/aws/lambda/titans-lambda-log-test',
//   // limit: 50,
// };

// cloudwatchlogs.startQuery(params, (err, data) => {
//   if (err) console.error(err, err.stack);
//   else console.log(data);
// });

//*** CHAT GPT*/
// const now = new Date();
// const oneDayAgo = new Date(now - 24 * 60 * 60 * 1000); // 24 hours ago

// const params = {
//   startTime: oneDayAgo.getTime(),
//   endTime: now.getTime(),
//   queryString: 'fields @timestamp, @message | sort @timestamp desc | limit 20',
//   logGroupName: '/aws/lambda/your-function-name',
// };
