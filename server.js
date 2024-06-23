//............Clients and Sever
// creatind a server
var http = require('http');
//req meaning request, res meanig responce
var server = http.createServer(function(req, res){
    console.log(req.url + ' made the request')
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey guys');
});

server.listen(3000, '127.0.0.1');
console.log('connection successful');


//............Streams and Buffers