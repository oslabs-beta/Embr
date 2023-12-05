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

// Handles AWS CloudWatch Log query. consists of startQuery and getQueryResults. first we must startQuery, which starts the Query on CloudWatch and all we are getting back is a queryId variable, which is the ID of the query we just executed and now need to use that ID to pass into getQueryResults as a param to actually receive the results on our end
// https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions/titans-lambda-log-test?tab=monitoring
app.get('/allData', getData, (req, res) => {
  res.status(200).json(res.locals.data);
});
let lastID = ['856b4cd9-8a7a-468e-8512-79a28d83e5d5'];

async function getData(req, res, next) {
  //  setTimeout(() => {getData(req,res,next)}, 2000)
  console.log('inside getData');
  const cloudwatchlogs = new AWS.CloudWatchLogs();
  const now = new Date();
  const oneWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // TODO: currently 24 hours ago, * 7 if want to change to week. unit is currently in seconds

  setTimeout(async() => {
    await getData(req, res, next);
    console.log('inside the setTIMEOUT: ', res.locals.data);
  }, 5000);

  const params = {
    // when we getLogs, i am wanting to grab the Timestamp, RequestId, and DurationInMS
    // https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions/titans-lambda-log-test?tab=monitoring
    startTime: oneWeek.getTime(),
    endTime: now.getTime(),
    queryString:
      'fields @ingestionTime, @logStream, @message, @timestamp, @requestId, @type, @billedDuration, @duration, @maxMemoryUsed, @memorySize | filter @initDuration | sort @timestamp desc | limit 50',
    logGroupName: '/aws/lambda/ChrisTestFunc',
    // limit: 50,
  };

  const data = await cloudwatchlogs.startQuery(params).promise();
  const { queryId } = data;
  lastID.push(queryId);
  console.log(lastID);

  let newId = lastID[lastID.length - 2];
  console.log({ queryId: queryId });

  const results = await cloudwatchlogs
    .getQueryResults({ queryId: newId })
    .promise();
  console.log(results.results);
  res.locals.data = results.results;
  lastID.shift()
  next();

  //  setTimeout(getData, 2000)
}
// start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

//   cloudwatchlogs.startQuery(params, (err, data) => {
//   if (err) console.error('THIS IS THE ERROR: ', err, err.stack); // error handler
//   else { // else get the logs by
//     console.log(
//       'USE THE QUERY ID TO GetQueryResults, THIS IS THE QUERY ID:',
//       data
//     );
//     const getParams = {
//       queryId: '509faf9a-a7c5-4dbe-9c1b-b0490d4592c5'
//     };
//     // invoke the GetQueryResults method back with the err.requestId,
//     cloudwatchlogs.getQueryResults(getParams, (err, data) => {
//       if (err) console.error("this is the error for getQueryResults:", err, err.stack);
//       else console.log('this is the data from getQueryResults:', data);
//     })
//   }
// });
