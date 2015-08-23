var http = require('http');
var bl = require('bl');
var theUrl = process.argv[2];

http.get(theUrl, function(response) {
  response.pipe(bl(function(error, data) {
    if (error) return console.log(error);
    var Data = data.toString();
    console.log(Data.length);
    console.log(Data);
  }));
});