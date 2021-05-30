## 地址识别API调用
### 感谢大神zh-address-parse的开源代码，基于他的代码基本上修改，在网上找了一圈没有找到API调用的方式。于是自学nodejs，学了几个小时写出来的，也是一个渣渣级别，有不对的地方请大佬们指正。
### 截止我代码上传前，我没有找到API调用方式的代码。找了一些API都是一些收费的，然后github上的代码也都是无法通过API调用的。
### 由于自己是菜鸟，没学多久nodejs，所以用的方法都很原始。但自己部署后测试是可以用的。
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
[http://localhost:8055/parse?address=广西壮族自治区柳州市柳北区跃进路42号4栋20楼][1]
调用成功后：会返回结果
````

[1]:	http://localhost:8055/parse?address=%E5%B9%BF%E8%A5%BF%E5%A3%AE%E6%97%8F%E8%87%AA%E6%B2%BB%E5%8C%BA%E6%9F%B3%E5%B7%9E%E5%B8%82%E6%9F%B3%E5%8C%97%E5%8C%BA%E8%B7%83%E8%BF%9B%E8%B7%AF42%E5%8F%B74%E6%A0%8B20%E6%A5%BC
