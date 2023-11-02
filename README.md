## 本地开发
1. 参考 Next.js 官方文档，安装并初始化一个您的 Next.js 项目：
```
npx create-next-app
```

2. 接下来对已初始化的项目进行简单修改，使其可以适应云函数 Web Function 架构，在项目根目录下新建 `scf_bootstrap` 启动文件，在该文件添加如下内容（用于启动服务并指定启动端口）：
```
#!/var/lang/node12/bin/node
const { nextStart } = require('next/dist/cli/next-start');
nextStart([ '--port', '9000', '--hostname', '0.0.0.0' ])
```
> 注意
>	a. 此处仅为示例启动文件，具体请根据您的业务场景进行调整。
>	b. 示例使用的是云函数标准 Node 环境路径，本地调试时，需修改成您的本地路径。

3. 新建完成后，还需执行以下命令修改文件可执行权限：
```
chmod 777 scf_bootstrap
```

## 构建极狐 Gitlab CI 流水线，完成应用到 SCF 云函数的部署

完成本地开发后，将您的 Nextjs 项目发布到极狐，并完成相关 CI 流水线构建

1. 配置 serverless.yml 配置文件
参考腾讯云官网文档，配置 serverless.yml，示例文件如下：
```
component: scf
name: http

inputs:
  src:
    src: ./
    exclude:
      - .env
  # 指定 SCF 类型为 Web 类型
  type: web
  name: web-function
  region: ap-guangzhou
  handler: scf_bootstrap
  runtime: Nodejs12.16
  memorySize: 512 # 内存大小，单位MB
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
                # 指定 API 类型为 Web 类型
                type: web
```

2. 编写 GitLab CI 构建文档 `.gitlab-ci.yml`
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

3. 在 GitLab 默认环境中配置腾讯云账号信息

账号信息请在腾讯云控制台获取
```
SERVERLESS_PLATFORM_VENDOR: tencent #serverless 境外默认为 aws，配置为腾讯
TENCENT_SECRET_ID: #您的腾讯云账号 sercret ID
TENCENT_SECRET_KEY: #您的腾讯云账号 sercret key 
```
![](https://main.qcloudimg.com/raw/0c596ec7f1e95e905b44781a2206226a.png)

4. 执行 CI 流水线
![](https://main.qcloudimg.com/raw/b131a10f852caa81301dfcd411dffe0d.png)
5. 部署完成，测试结果
访问 url，即可登陆您的 Nextjs 项目
![](https://main.qcloudimg.com/raw/88671580ddc004f5a3e792afedcc34a6.png)
![](https://main.qcloudimg.com/raw/d39f85e95d37b77fc2780fb38e7ff4f9.png)


