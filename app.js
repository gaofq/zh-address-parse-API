//import AddressParse from 'zh-address-parse'

//import AddressParse from './dist/zh-address-parse.min.js'
var AddressParse = require('zh-address-parse');

//console.log(parseResult);

const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    
     let pathname = url.parse(req.url).pathname;
     console.log(pathname);
    
    if (pathname == "/parse") {
        //console.log("1234");
        //获取get传值
        var query = url.parse(req.url,true).query.address;
        console.log(query);
        // options为可选参数，不传默认使用正则查找
        const options = {
            type: 0, // 哪种方式解析，0：正则，1：树查找
            textFilter: [], // 预清洗的字段
            nameMaxLength: 4, // 查找最大的中文名字长度
        }
        // type参数0表示使用正则解析，1表示采用树查找, textFilter地址预清洗过滤字段。
        const parseResult = AddressParse(query, options)
        console.log(parseResult);

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(parseResult));
    }else  
    {
        //let parseResult = "123123";
        res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
        res.end("123123");
    }
}).listen(8055);