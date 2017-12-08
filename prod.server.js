const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware')
const config = require('./config');
const app = express();
const http = require('http')
const https = require('https')
const fs = require('fs')

let options = {
  key: fs.readFileSync('./2_juanrr.cn.key'),
  cert: fs.readFileSync('./1_juanrr.cn_bundle.crt')
}


let proxyTable = config.dev.proxyTable;

Object.keys(proxyTable).forEach(function (key,index,array) {
  app.use(key,proxy(proxyTable[key]))
})
// console.log(config.dev.proxyTable);
app.use(express.static(path.join(__dirname,'dist')))
http.createServer(app).listen(80,() => {
  console.log('server is running in http://localhost:80');
})

https.createServer(options,app).listen(443);
