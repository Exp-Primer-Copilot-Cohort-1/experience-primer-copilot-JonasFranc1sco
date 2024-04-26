// Create web server
var express = require('express');
var app = express();
var port = 8080;

// Create routes
app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/commits', function(req, res) {
    res.send('List of commits');
});

app.listen(port, function() {
    console.log('Server is running on port ' + port);
});