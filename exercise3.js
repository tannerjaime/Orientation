var fs = require('fs'); // importing fs module
var file = process.argv[2]; // declaring argument
var buffer = fs.readFileSync(file); //reading the file synchronously & converting it to a buffer
var fileText = buffer.toString(); //converting the buffer to a string
var splitText = fileText.split('\n'); //splitting the string into array, using new line as delimiter
console.log(splitText.length-1);