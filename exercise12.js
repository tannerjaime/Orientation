var map = require('through2-map'); // import the through2-map core module
var http = require('http'); //import the http module 
var port = process.argv[2]; // get the port number from the first argument 
var filePath = process.argv[3];

//creating the server. callback gets request and response 
var server = http.createServer(function(req, res){
    //console.log(req);
    
    //check to see if the request metho is a POST
    if (req.method != 'POST') {
        return res.end(); //early return
    }
    
    //pipe the request data to through2-map
    req.pipe(map(function(chunk){
        //return the data chunk as an uppr case string
        return chunk.toString().toUpperCase();
    })).pipe(res); // pipe altered chunk of data to the response 
});

// tell our server to listen for connections on the specified port 
server.listen(port);