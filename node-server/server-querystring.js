var express = require('express');
var app = express();

app.get('/query', function (req, res) {
    res.send('Query string: ' + JSON.stringify(req.query));
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server up, listening at http://%s:%s", host, port);
});
