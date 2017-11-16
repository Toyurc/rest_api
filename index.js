var express = require('express');
const config = require('./config');

var app = express();

app.get('/notes', function (req, res) {
   res.json({notes: "My notebooks are stored here. This is where editing can be done."})
});

app.listen(config.port_number);
