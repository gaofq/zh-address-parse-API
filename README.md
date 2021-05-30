## 地址识别API调用
#### 感谢大神zh-address-parse的开源代码，基于他的代码基本上修改，在网上找了一圈没有找到API调用的方式。于是自学nodejs，学了几个小时写出来的，也是一个渣渣级别，有不对的地方请大佬们指正。
#### 截止我代码上传前，我没有找到API调用方式的代码。找了一些API都是一些收费的，然后github上的代码也都是无法通过API调用的。
#### 由于.net出生，没学多久nodejs，所以用的方法都很原始。但自己部署后测试是可以用的。
###  使用方法
- 第一步：npm下载zh-address-parse
```sh
npm i zh-address-parse -s
```
- 第二步：部署nodejs，默认端口8055，可自行修改
```sh
node app.js
```
- 第三步：部署成功后，接口使用
```
http://localhost:8055/parse?address=广西壮族自治区柳州市柳北区跃进路42号4栋20楼
调用成功后：会返回结果
````
