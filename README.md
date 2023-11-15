## 地址识别API调用
#### 感谢大神zh-address-parse的开源代码，基于他的代码基本上修改，在网上找了一圈没有找到API调用的方式。
###  使用方法
- 第一步：npm下载zh-address-parse
```sh
npm i zh-address-parse -s
```
- 第二步：部署nodejs，默认端口8055
```sh
node app.js
```
- 第三步：部署成功后，接口使用
```
http://localhost:8055/parse?address=广西壮族自治区柳州市柳北区跃进路42号4栋20楼
调用成功后返回json
````
