var fs = require('fs'); // import the fs core module
var path = require('path'); // import the path core module 
var dir = process.argv[2]; // get the file path 
var ext = process.argv[3]; // get the extension to filter for 2nd argument

fs.readdir(dir, function(error, data){ // asynchronously read input directory; when finished reading, invoke callback
    if (error) throw error; // 
    ext = '.' + ext;
    for (var i = 0; i < data.length; i++){
        //console.log(path.extname(data[i]));
        if(path.extname(data[i]) == ext){ // if the file extension matches node school's file extension
            console.log(data[i]);
        }
    }
});

aoisdjfioajsf