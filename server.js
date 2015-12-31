var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use(serveStatic('www'));
app.listen(process.env.PORT || 3000);