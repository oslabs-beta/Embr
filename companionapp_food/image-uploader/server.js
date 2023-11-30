// server.js
const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

// Configure AWS SDK with your credentials
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

// Multer middleware to handle file uploads
const upload = multer({ dest: 'uploads/' });

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
  const file = req.file;

  // Check if file exists
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  // Configure the S3 upload parameters
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${Date.now()}-${file.originalname}`,
    Body: require('fs').createReadStream(file.path),
  };

  // Upload file to S3
  s3.upload(params, (err, data) => {
    if (err) {
      return res.status(500).send('Error uploading file to S3.');
    }

    // Delete the local file
    require('fs').unlinkSync(file.path);

    res.send(`File uploaded successfully. S3 URL: ${data.Location}`);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});