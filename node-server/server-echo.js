var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log("Connection from %s", req.ip);
    res.send('Ciao mondo!');
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server up, listening at http://%s:%s", host, port);
});
