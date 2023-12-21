
# Ember: An application for developers using AWS Lambda to lessen the impact of cold starts (on time and budget)

# Overview
There are applications that address the cold start problem, but none provide a dynamic, hands-free approach without developers either contributing some amount of time or money. As Lambda users ourselves, we sought out to create an autonomous application that tracks an app’s Lambda usage and automatically sends warming calls to cold Lambdas before high-use periods. Oh yeah, and it's available for FREE! 

In the making of this application, we learned a few things about AWS Lambda that all Lambda developers should know and consider:
  - Lambdas go cold after 40-60 (aproximately) minutes of no use 
  - Billing occurs by multiplying function runtime by RAM allocated to the function
  - If a cold Lambda is invoked, an execution environment needs to be spun up which delays the function invocation
  - If there are concurrent calls to a cold function, the duration time is multiplied by each call
  - The longer the function stays cold / concurrent calls are made, the longer users have to wait

This application is for the developer that wants to optimize their application by getting the biggest bang for their buck and saving as much time as possible.

# Description
- What the app does
    - Ember connects to a user's AWS account and provides an easy-to-read interface of all user Lambda functions
    - It tracks and graphs metrics relevant to cold calls and warm calls
    - It offers a button for the user to manually warm their function if they wish
- Why we used the tech we did
    - Cloudwatch provides necessary metadata of Lambdas that we plug into algorithms to find optimal warming times.
    - Next.js offers developers the flexibility to choose how different parts of the application are rendered, whether it's server-side or client-side. This allows quicker load times when possible.
    - Tremor offers the ability to create unique and engaging graphs for our data.
- Some features we hope to implement
    - In the future, we would like to implement a feature that allows a user's application to send a warming call to a server in the region where high-volume is expected to occur.
    - We would also like the app to be hosted by AWS itself instead of an application that is hosted from the developers local host. 
    - We also want to send notifications to the developer to let them know if there is atypical activity with Lambda use. 

# How to install and run the project
 1. Fork the repo 
 2. Copy forked URL and clone on local machine
 3. Once added, change directory to Ember and run npm install
 4. Install latest version of AWS CLI
    - https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html 
 5. In the terminal, run 'aws configure' (add your access information to AWS)
    - AWS Access Key ID [****************MBI3]: 
    - AWS Secret Access Key [****************siUL]: 
    - Default region name [xx-xxxx-x]: 
    - Default output format [None]: 
 6. Run 'npm run dev'
 7. View the app at localhost:3000

# How to use the project
To use this app, click around to see the data that your Lambda functions produce. If you want, you can even hit the warm button to send a warming call to Lambda. Otherwise, sit back, relax, and monitor at your convenience.

# Credits
 - Andrew Sobattka - <a href='https://www.linkedin.com/in/andrewsobottka/'>Linkedin</a>  | <a href='https://github.com/andrewsobottka'>Github</a> 
 - Chris Bock - <a href='https://www.linkedin.com/in/christopher-j-bock/'>Linkedin</a> | <a href='https://github.com/josebock02'>Github</a> 
 - David Tung - <a href='https://www.linkedin.com/in/yuhsuantung/'>Linkedin</a>  | <a href='https://github.com/Davidasahi'>Github</a> 
 - Jade Majed BuGhanem - <a href='https://www.linkedin.com/in/jade-majed-boughanem-6b2a79b8/'>Linkedin</a>  | <a href='https://github.com/majedbg'>Github</a> 
 - Titan Tran - <a href='https://www.linkedin.com/in/titantran/'>Linkedin</a>  | <a href='https://github.com/titrn'>Github</a> 

# Licenses
Ember is distributed under the MIT License.
