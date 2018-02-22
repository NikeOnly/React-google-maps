var path = require('path');
var express = require('express');
var api = require('./rest-api');
var bodyParser = require('body-parser');
var port = 8080;

var app = express();

app.use(bodyParser.json());
app.use('/rest', api);

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'build' + req.originalUrl));
});

app.listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:' + port);
});
