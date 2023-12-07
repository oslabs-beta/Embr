/**
 * THIS CODE IS NOT INTENDED TO RUN LOCALLY
 */

import Jimp from 'jimp';
import AWS from 'aws-sdk';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';
import { Upload } from '@aws-sdk/lib-storage';

const s3 = new S3Client({ region: 'us-east-2' });

export const handler = async (event, context) => {
  
  // RUN ON NEW FILE UPLOAD EVENT
  if (event.Records) {
    
    // Get file source info
    const srcBucket = event.Records[0].s3.bucket.name;
    const srcKey = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "));
    
    // Check file type & make sure it can be processed
    const typeMatch = srcKey.match(/\.([^.]*)$/);
    if (!typeMatch) {
      console.log("\nCould not determine the image type.");
      return;
    }
    if (typeMatch[1].toLowerCase() != "jpg") {
      console.log(`\nUnsupported image type: ${typeMatch[0]}`);
      return;
    }
    
    // define destination bucket and filename
    const destBucket = srcBucket + '-thumbnail';
    const destKey = 'thumbnail-' + srcKey;
    
    // placeholder to make sure vars are defined as expected
    console.log(`
      Source:      ${srcBucket},
      File:        ${srcKey},
      Destination: ${destBucket},
      New File:    ${destKey}
    `);
    
    // Retrieve Image
    let content_buffer;
    try {
      const params = {
        Bucket: srcBucket,
        Key: srcKey
      };
      // fetch request to s3
      const reqObj = new GetObjectCommand(params);
      const response = await s3.send(reqObj);
      const stream = response.Body;
      // convert stream to buffer
      if (stream instanceof Readable) {
        content_buffer = Buffer.concat(await stream.toArray());
      } else {
        throw new Error('Unknown object stream type');
      }
    } catch (err) {
      console.log(err);
    }
    console.log(`\n==> Image retrieved...`);
  
    // Create thumbnail image
    const cropSize = 256;
    const imgData = await Jimp.read(content_buffer);
    console.log('\n==> Image data received... \n' + imgData);
    const x_crop = (imgData.bitmap.width / 2) - (cropSize / 2);
    const y_crop = (imgData.bitmap.height / 2) - (cropSize / 2);
		//jimp mods to image must be chained, including the getBuffer which returns a buffer
    const newImgBuffer = await imgData.blur(5).quality(60).crop(x_crop, y_crop, cropSize, cropSize).getBufferAsync(Jimp.MIME_JPEG);
    console.log(`\n==> Created new image...`);
       
    // Upload thumbnail to s3
    try {
      const destParams = {
        Bucket: destBucket,
        Key: destKey,
        Body: newImgBuffer,
        ContentType: "image"
      };
      console.log(`\n==> Writing file...`);
      
      // Sends using Upload
      const uploadObj = new Upload({
        client: new S3Client({ region: 'us-east-2' }),
        params: destParams
      });
      await uploadObj.done();
      console.log(`==> Successfully uploaded thumbnail image!`);
      
    } catch(err) {
      console.log(err);
      return;
    }
  
  } // IF EVENT IS NOT A NEW UPLOAD
  else { 
    console.log(`\nevent triggered is not a new upload:\n`);
    console.log(JSON.stringify(event));
  }
  
  // SEND RESPONSE
  const response = {
    statusCode: 200,
    body: JSON.stringify('Lambda function complete.')
  };
  return response;
};