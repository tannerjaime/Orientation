var fs = require('fs'); // import the fs core module
var path = require('path'); // import the path core module 

//create a named function called filterFiles 
// takes 3 arguments: dir, ext, callback function
function filterFiles(dir, ext, callback){
    var dotExt = '.' + ext;  // prepend a dot to file extension to filter for
    var filteredList = [];  // create an empty array to put our filtered file names in
    
    //reading the input directory asynchronously
    // takes 2 arguments: path to a directory and a callback function
    // callback take error and data
    fs.readdir(dir, function(err, data){
        //if an error exists, return our callback with the error
    if(err) return callback(err);
    
    //looping over array of file names inside the data variable 
    for (var i=0; i < data.length; i++){
        // check for a file extension that match
        if (path.extname(data[i]) == dotExt) {
            filteredList.push(data[i]);
        }
    }
    
    //
    callback (null, filteredList);
    });
    //callback(err, data)
}
module.exports = filterFiles;
