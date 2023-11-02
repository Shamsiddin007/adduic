## Development Loacally
1. According to Next.js official documentation to install and initialize your `Next.js` project:
```
npx create-next-app
```

2. Then, modify the initialized project to adapt to the Tencent SCF Web Function, create a new `scf_bootstrap` file in the project root directory, and add the following content to the file which is used to start the service and specify the startup port:
```
#!/var/lang/node12/bin/node
const { nextStart } = require('next/dist/cli/next-start');
nextStart([ '--port', '9000', '--hostname', '0.0.0.0' ])
```
> Notice

>	a. This is only a sample file, please adjust it according to your own project.

>	b. The sample uses the standard Node environment path of Tencent SCF environment. When debugging locally, you need to modify it to your local path。

3. After completing the creation, you need to execute the following commands to modify the executable permissions of the file:
```
chmod 777 scf_bootstrap
```

## Build the Gitlab CI pipeline to deploy it into the Tencent Serverless Cloud Function

After completing the local development, publish your Nextjs project to Gitlab, and complete the CI pipeline construction:

1. Configuring `serverless.yml` file
Refer to the official website of Tencent Cloud files to configure `serverless.yml`. The sample files are as follows:
```
component: scf
name: http

inputs:
  src:
    src: ./
    exclude:
      - .env
  # Function Type: web
  type: web
  name: web-function
  region: ap-guangzhou
  handler: scf_bootstrap
  runtime: Nodejs12.16
  memorySize: 512 
  installDependency: true
  events:
    - apigw:
        parameters:
          protocols:
            - http
            - https
          environment: release
          endpoints:
            - path: /
              method: ANY
              function:
                type: web
```

2. Preparing the `.gitlab-ci.yml` file
```
image: node:latest

stages:  
   - deploy

production:  
  stage: deploy  
  before_script:    
     - npm config set prefix /usr/local    
     - npm install -g serverless   
     - npm install
     - npm run build    
  script:    
     - serverless deploy
```

3. Configure Tencent Cloud account information in the GitLab environment

Please get the account information in the Tencent Cloud console
```
SERVERLESS_PLATFORM_VENDOR: tencent #platform:tencent
TENCENT_SECRET_ID: # sercret ID of your Tencent Cloud account
TENCENT_SECRET_KEY: #sercret key of your Tencent Cloud account
```
![](https://main.qcloudimg.com/raw/0c596ec7f1e95e905b44781a2206226a.png)

4. Execute CI pipeline
![](https://main.qcloudimg.com/raw/b131a10f852caa81301dfcd411dffe0d.png)
5. Componet the deployment and test results
Visit the url to check your Nextjs project.
![](https://main.qcloudimg.com/raw/88671580ddc004f5a3e792afedcc34a6.png)
![](https://main.qcloudimg.com/raw/d39f85e95d37b77fc2780fb38e7ff4f9.png)
