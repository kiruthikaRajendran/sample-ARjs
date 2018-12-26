var express = require('express');
var app = express();
var path = require ('path');
var http = require ('http');
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static(path.join(__dirname,'html')));
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, 'html/sample.html'));
});
const port = process.env.PORT || '5001';
app.set('port',port);
const server =http.createServer(app);

server.listen(port);
console.log("server running at port 5001");
