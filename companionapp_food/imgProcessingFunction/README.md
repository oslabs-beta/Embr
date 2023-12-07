# Image Processing Function Deployed on AWS Lambda

### Context
The function here was built to allow for testing the primary application built by this codebase. This function is required solely for the companion application and provides no functionality for the monitoring and warming application. When downloading this codebase, this folder may largely be ignored.

### Overview of Function
The function within takes in some image, duplicates and performs some processing, then writes the new image to a specified destination. For the purposes of this project, the trigger for this lambda function was configured as an upload to a specific S3 bucket. After trigger, this function would retrieve the image recently uploaded and perform processing, including cropping, downsizing, and blurring the image, in an effort to create thumbnail version of the original image. The function then writes the new image to a second S3 bucket (important in order to prevent infinite loop).

### How to Use
You may use this function for your own testing by following these steps:
[] Create two S3 buckets - make sure both are in the same region
[] Create a role - must have permissions to read/write to S3 buckets; should also have permissions to write to cloudwatch logs
[] Create Lambda function
  * Feel free to copy/paste this code
  * Make sure to configure lambda function with the appropriate role
[] Create a Layer for package dependencies
  * Download dependencies locally
  * Create zip folder of all node_modules
  * Upload zip folder into new Layer
  * Add layer to lambda function
[] Add trigger to lambda function
  * For this example, trigger was an upload to an S3 bucket - make sure lambda function does not read/write to the same S3 bucket; this will create an infinite recursive loop!
  * Will also need to configure an API Gateway to enable remote warming