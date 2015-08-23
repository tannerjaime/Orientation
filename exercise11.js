var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type" : "text/html"}); // if everything went ok, tell client we're sending text
    fs.createReadStream (filePath).pipe(res); //create read stream of file and pipe it to the response 
});

server.listen(port);