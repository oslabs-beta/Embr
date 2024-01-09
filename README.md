
# Embr

## Overview
Embr provides a dynamic solution for developers seeking to better manage their serverless functions. The goal with this open-source product is to create an application that identifies all Lambda functions currently deployed in a user's account, and monitors those functions to determine usage patterns. Finally, based on usage patterns, the Embr appication allows support engineers to warm cold Lambdas before periods of expected high-use.

Additional context to understand the approach for building Embr:
  - The primary impact of cold lambda functions is the impact to end users
  - Lambdas go cold after approximately 40 minutes of no use 
  - Billing occurs by multiplying function runtime by RAM allocated
  - A cold Lambda requires allocation and instantiation of an execution environment
  - For each concurrent call to a cold function, the duration time is multiplied by each call

This application is for developers looking to optimize serverless function use by maximizing downtime while minimizing the impact of cold starts on dependent functions or users.

## Description
- Features
    - Embr connects to a user's AWS account and provides an easy-to-read interface of all detected Lambda functions
    - Embr tracks and graphs specifics metrics relevant to cold calls and warm calls
    - Embr offers a button enabling users to warm a function on demand
- Tech Stack
    - Front-end is built using Next.js and Tailwind CSS with some components leveraged from the Tremor library
    - AWS Cloudwatch used to query the Lambda metadata, which is further processed before used for visualizations
    - No local or cloud data storage! All data comes directly from AWS, ensuring maximum security
- Coming Soon!
    - Allow users to combine and manage serverless functions across multiple regions
    - Offer a cloud-hosted version of the application
    - Enable notifications for anomoulous Lambda usage

## How to Use Embr
 1. Fork, clone, and install all dependencies
 2. Install latest version of AWS CLI
    - https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html 
 3. Using the terminal, run 'aws configure' and add your access information to AWS - e.g.:
    - AWS Access Key ID [****************MBI3]:
    - AWS Secret Access Key [****************siUL]:
    - Default region name [xx-xxxx-x]: 
    - Default output format [None]: 

## Credits
 - Andrew Sobottka - <a href='https://www.linkedin.com/in/andrewsobottka/'>Linkedin</a>  | <a href='https://github.com/andrewsobottka'>Github</a> 
 - Chris Bock - <a href='https://www.linkedin.com/in/christopher-j-bock/'>Linkedin</a> | <a href='https://github.com/josebock02'>Github</a> 
 - David Tung - <a href='https://www.linkedin.com/in/yuhsuantung/'>Linkedin</a>  | <a href='https://github.com/Davidasahi'>Github</a> 
 - Jade Majed BuGhanem - <a href='https://www.linkedin.com/in/jade-majed-boughanem-6b2a79b8/'>Linkedin</a>  | <a href='https://github.com/majedbg'>Github</a> 
 - Titan Tran - <a href='https://www.linkedin.com/in/titantran/'>Linkedin</a>  | <a href='https://github.com/titrn'>Github</a> 
