const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});

// var express = require('express');
// var app= express();
// app.set('view engine','ejs');
// app.get('/',function(req,res){
// res.sendFile(__dirname+'/index.html');
// });

// app.get('/profile/:id',function(req,res){
// res.render('profile',{'person':req.params.id});
// });

// app.listen(3000);
// console.log('hello');
// var http = require('http');
// const log=require('./logger');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   if(req.url==='/' || req.url==='/home'){
//     var readStream= fs.createReadStream(__dirname + '/index.html').pipe(res);
//   }  
// }).listen(8080);
// var fs = require('fs');
// var demo= fs.readFile('demo.txt','utf8',function(err,data){
// if(err)  return console.error(err);
// else  return console.log(data.toString());
// });
//fs.writeFileSync('write.txt',demo);
// console.log(demo);
// fs.rmdirSync('stuuff');
// console.log('end part');
