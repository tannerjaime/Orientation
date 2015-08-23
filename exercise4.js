var fs = require('fs'); // importing fs module
var file = process.argv[2]; // declaring argument
var numLines = 0;
var buffer = fs.readFile(file, function(error, data){
    if (error) throw error; //first check to see if there was an error
    // if there was no error, operate on data
    var text = data.toString();  
    var splitText = text.split('\n');
    numLines = splitText.length-1;
    console.log(numLines); //do this inside function, otherwise prints 0 because it doesn't go in order
}); //reading the file synchronously & converting it to a buffer