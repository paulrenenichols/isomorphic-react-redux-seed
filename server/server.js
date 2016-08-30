var express = require('express'); // dependencies from npm (package.json)

var portNumber      = require('../portNumber');

//Create Server
var app = express();


// Server setup
app.listen(portNumber, 'localhost', function(error){
  if (error) {
    console.log(error);
    return;
  }
  console.log(`Server listening on: ${portNumber}`);
});
