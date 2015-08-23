var http = require('http'); //importing http module 
var theUrls = [process.argv[2], process.argv[3], process.argv[4]]; //store urls in an array
var count = 0; // creating a counter to keep track of how many get requests have been made 
var allTheData = []; // store data from each get request in an array 

//want to reuse code multiple times = function
// get the data from a url 
function getData(url) {
    var dataStore = ''; //stores the data from the get reqeust
   
    // making a get request 
    // the callback gives us the response 
    http.get(url, function(res) { 
        // converting it from binary to text using utf8 encoding
            res.setEncoding('utf8');
            
            // on a data event, we're storing a chunk of data
            res.on('data', function(chunkOfData) {
                dataStore += chunkOfData // save data to empty array
            });
            
            //here we're listening for when the response is over, or an end event 
            res.on('end', function(){
                //incrementing our counter (logging that its finished)
                count += 1; 
                //finding out which url it is based on its index
                var index = theUrls.indexOf(url); 
                //use index to place data in the right order in the array
                allTheData[index] = dataStore;
                
                if (count === 3) {
                    printData();
                }
            });

            res.on('error', console.error);
            });
    }

//now actually print the data once it's finished
function printData(){
    for (var i=0; i<allTheData.length; i++) {
        console.log(allTheData[i]);
    }
};

//invoke function
for (var i=0; i < theUrls.length; i++) {
    getData(theUrls[i]);
}