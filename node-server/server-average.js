var express = require('express');
const fs = require('fs');

var app = express();

app.get('/average', function (req, res) {
    fs.readFile('average.dat', 'utf8', function(err, data) {
        if(err) {
            res.send('0');
        }
        else {
            var lines = data.split('\n');
            var acc = 0.0;
            var count = 0;
            for(var i = 0; i < lines.length; ++i) {
                var lineValue = Number.parseInt(lines[i]);
                if(!Number.isNaN(lineValue)) {
                    acc += lineValue;
                    count++;
                }
            }

            console.log("Acc %s, count %s", acc, count);
            if(count > 0) {
                res.status(200).send('' + (acc / count));
            }
            else {
                res.status(200).send('0');
            }
        }
    });
});

app.post('/average', function(req, res) {
    var vote = Number.parseInt(req.query.vote);
    if(!Number.isNaN(vote) && vote >= 0) {
        fs.appendFile('average.dat', vote + '\n', function(err) {
            res.status(200).send('OK!');
        });
    }
    else {
        res.status(400).send('Invalid parameter');
    }
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server up, listening at http://%s:%s", host, port);
});
