'use strict';
var controllers = require('../controllers/todolist.js');
var routes = {};

routes.set_all_routes = function(app){
  app.get("/task",controllers.get_all);
  app.post("/task",controllers.set_one);
  app.get("/task/:id",controllers.get_one);
}

module.exports = routes;
