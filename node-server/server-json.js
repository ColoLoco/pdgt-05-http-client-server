var express = require('express');
var app = express();

// Enable application/json parsing
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/upload', function (req, res) {
    console.log('Body: ' + JSON.stringify(req.body));

    var response = req.body;
    response.status = 'OK';

    res.json(response);
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server up, listening at http://%s:%s", host, port);
});
