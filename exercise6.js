var myModule = require('./myModule'); //import module we just made 
var dir = process.argv[2]; // get the file path 
var ext = process.argv[3]; // get the extension to filter for 2nd argument

//creating a callback function to pass to myModule as the third parameter
//print out the results of the module
function myCallback(err, FileList){
    FileList.forEach(function(item){
        console.log(item);
    });
}

//invoke myModule with path to directory, ext, and callback
myModule(dir, ext, myCallback);