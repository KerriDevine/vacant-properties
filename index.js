'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('./app/www/'));

app.listen(3030, 'localhost', function() {
	console.log("TEST");
});