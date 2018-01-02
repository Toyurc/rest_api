'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var routes = require('./routes/routes');

var app = express();
//
// app.get('/notes', function (req, res) {
//    res.json({notes: "My notebooks are stored here. This is where editing can be done."})
// });


app.use('/api', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.listen(config.port_number, function () {
    console.log("Listening on port %s...", config.port_number);
});
