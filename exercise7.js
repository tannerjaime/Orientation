var http = require('http'); //require http module
var theUrl = process.argv[2];

//use get function 
http.get(theUrl, function(response) {
    response.setEncoding('utf8');   //converts data that is streaming to text from binary
    response.on('data', function(data) {  //while response is happening, data is coming in
        console.log(data); //logs data as it was coming in
    });
    response.on('error', function(error) {
        console.log(error);
    });
})