console.log("starting...");
//References
var express = require('express');
var mongoose = require('mongoose');
var parser = require('body-parser');
//beware,its required follow this order first model then router.
var task = require('./api/models/todolist.js');
var routes = require('./api/routes/todolist.js');
var port = process.env.PORT || 8080;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connection.openUri('mongodb://localhost/task');

//Init express
var app = express();

//MIddleware
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

//Setting routes
routes.set_all_routes(app);

app.listen(port);

console.log("Started at port: " + port);
