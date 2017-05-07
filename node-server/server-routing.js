var express = require('express');
var app = express();

// HTTP methods
app.get('/', function (req, res) {
    console.log("GET /");
    res.send('Hello GET');
});
app.post('/', function (req, res) {
    console.log("POST /");
    res.send('Hello POST');
});
app.delete('/', function (req, res) {
    console.log("DELETE /");
    res.send('Hello DELETE');
});

// Path pattern matching
app.get('/utente/*', function(req, res) {
    console.log("Request to %s", req.path);

    var pattern = req.path.substr(8);
    res.send('Hello GET (pattern), cercavi ' + pattern + '?');
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server up, listening at http://%s:%s", host, port);
});
